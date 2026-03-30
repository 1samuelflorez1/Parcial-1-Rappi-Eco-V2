import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Logorappi from "../assets/logorappi.png";
import ShopCart from "../assets/ShopCart.png";
import SignOut from "../assets/signout.png";
import { ProductsData } from "../services/ProductsData";
import { StoresData } from "../services/StoresData";
import type { ProductType } from "../types/ProductType";
import type { RestaurantTypes } from "../types/RestaurantTypes";
import AdminProducts from "../components/AdminProducts";

function IndividualStore() {
  const { id } = useParams();
  const [store, setStore] = useState<ProductType[]>([]);
  const [PageName, setPageName] = useState("");
  const [storeInfo, setStoreInfo] = useState<RestaurantTypes>();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image_product: "",
  });

  const handleCloseOpenStore = async () => {
    const res = await fetch("http://localhost:7070/seleccionuser/restaurant/store/status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            store_id: Number(id),
            is_open: !storeInfo?.is_open
        }) 
    })

    const data = await res.json()
    setStoreInfo(data)
  }

  const handleNewProduct = async (e: React.MouseEvent) => {
    e.preventDefault();

    await fetch(
      "http://localhost:7070/seleccionuser/restaurant/store/product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          store_id: Number(id),
          name: newProduct.name,
          price: newProduct.price,
          image_product: newProduct.image_product,
        }),
      },
    );
    setNewProduct({ name: "", price: "", image_product: "" });
    const products = await ProductsData(Number(id));
    setStore(products);
  };

  useEffect(() => {
    const loadstore = async () => {
      const products = await ProductsData(Number(id));
      const allStores = await StoresData();
      const storeindividual = allStores.find(
        (s: RestaurantTypes) => s.id === Number(id),
      );
      if (storeindividual) {
        setPageName(storeindividual.name);
        setStoreInfo(storeindividual);
      }
      setStore(products);
    };
    loadstore();
  }, [id]);

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center justify-center">
          <div className="cursor-none hover:scale-110 transition-all mb-5 absolute">
            <img
              onClick={() => navigate("/seleccionuser/restaurant")}
              src={Logorappi}
            ></img>
          </div>
          <img
            onClick={() => navigate("/")}
            className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7"
            src={SignOut}
          ></img>
          <img
            onClick={() => navigate("/shopcart")}
            className="scale-30 flex self-end ml-220 cursor-pointer hover:scale-35 transition-all mb-5"
            src={ShopCart}
          ></img>
        </div>
        <h1 className="text-5xl font-bold text-[#fc6251]/80">{PageName}</h1>
        <h1 className="text-[15px] text-white/80 mt-2 w-50 text-center">{storeInfo?.description}</h1>

        <div className="flex items-center mt-5 mb-10 gap-10">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-white/80 mb-2">Products</h1>
            <div className="grid grid-cols-2">
              {store.map((product) => (
                <AdminProducts key={product.id} ProductIndividual={product} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-white/80 mb-2">
              New Product
            </h1>
            <form className="flex flex-col">
              <input
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                placeholder="Name"
                className="p-1 pr-3 pl-3 bg-white/10 rounded-4xlp- rounded mb-2 focus:outline-none 
                focus:scale-105 focus:bg-orange-700 transition-all w-60 hover:scale-103 hover:bg-white/20
                text-[15px] text-white/80"
              ></input>

              <input
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                placeholder="Price"
                className="p-1 pr-3 pl-3 bg-white/10 rounded-4xlp- rounded mb-2 focus:outline-none 
                focus:scale-105 focus:bg-orange-700 transition-all w-60 hover:scale-103 hover:bg-white/20
                text-[15px] text-white/80"
              ></input>

              <input
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    image_product: e.target.value,
                  })
                }
                placeholder="URL image "
                className="p-1 pr-3 pl-3 bg-white/10 rounded-4xlp- rounded mb-2 focus:outline-none 
                focus:scale-105 focus:bg-orange-700 transition-all w-60 hover:scale-103 hover:bg-white/20
                text-[15px] text-white/80"
              ></input>

              <button
                onClick={handleNewProduct}
                className={`bg-white/5 text-[15px] text-white/30 p-1 pl-3 pr-3 rounded mt-2 hover:text-white/90
           hover:bg-orange-700 transition-all cursor-pointer`}
              >
                Upload
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center">
            <h1
              className={`font-bold text-5xl ${storeInfo?.is_open ? "text-green-800" : "text-red-800"}`}
            >
              {storeInfo?.is_open ? "OPEN" : "CLOSE"}
            </h1>
            <button
              onClick={handleCloseOpenStore}
              className={`bg-white/5 text-[15px] text-white/30 p-1 pl-3 pr-3 rounded mt-2 hover:text-white/90
            ${storeInfo?.is_open ? "hover:bg-red-800" : "hover:bg-green-800"} transition-all cursor-pointer`}
            >
              {storeInfo?.is_open ? "Close" : "Open"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualStore;
