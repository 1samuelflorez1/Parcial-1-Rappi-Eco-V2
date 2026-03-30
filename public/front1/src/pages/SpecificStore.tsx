import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Logorappi from "../assets/logorappi.png"
import ShopCart from "../assets/ShopCart.png"
import SignOut from "../assets/signout.png"
import ProductCard from "../components/Products";
import { ProductsData } from "../services/ProductsData";
import { StoresData } from "../services/StoresData";
import type { ProductType } from "../types/ProductType";
import type { RestaurantTypes } from "../types/RestaurantTypes";

function SpecificStore() {
  const { id } = useParams();
  const [store, setStore] = useState<ProductType[]>([]);
  const [PageName, setPageName] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const loadstore = async () => {
      const products = await ProductsData(Number(id));
      const allStores = await StoresData();
      const storeindividual = allStores.find(
        (s: RestaurantTypes) => s.id === Number(id),
      );
      if (storeindividual) {
        setPageName(storeindividual.name);
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
          onClick={() => navigate("/seleccionuser/client")} 
          src={Logorappi}></img>
        </div>
        <img
        onClick={() => navigate("/")}
        className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7" 
        src={SignOut}></img>
        <img
        onClick={() => navigate("/shopcart")}
        className="scale-30 flex self-end ml-220 cursor-pointer hover:scale-35 transition-all mb-5" 
        src={ShopCart}></img>
        
      </div>
        <h1 className="text-5xl font-bold text-[#fc6251]/80">{PageName}</h1>

        <div className="grid grid-cols-3">
          {store.map((product) => (
            <ProductCard
              key={product.id}
              ProductIndividual={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SpecificStore;
