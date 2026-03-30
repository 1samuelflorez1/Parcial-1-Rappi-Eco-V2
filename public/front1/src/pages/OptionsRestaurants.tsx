import { useNavigate } from "react-router-dom";

import logorappi from "../assets/logorappi.png";
import shopcart from "../assets/ShopCart.png";
import signout from "../assets/signout.png";
import { useEffect, useState } from "react";
import { StoresData } from "../services/StoresData";
import type { RestaurantTypes } from "../types/RestaurantTypes";
import BtnRestaurant from "../components/BtnRestaurant";

function AvailableStores() {
  const [NameStores, setNameStores] = useState<RestaurantTypes[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await StoresData();
        setTimeout(() => {
          setNameStores(data);
        }, 1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center justify-center">
        <div className="cursor-none hover:scale-110 transition-all mb-7 absolute">
          <img src={logorappi}></img>
        </div>
        <img
          onClick={() => nav("/seleccionuser")}
          className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7"
          src={signout}
        ></img>
        <img
          className="scale-30 flex self-end ml-220 hover:scale-35 transition-all mb-7 opacity-0"
          src={shopcart}
        ></img>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {NameStores.map((IndividualButtonStore: RestaurantTypes) => {
          return (
            <BtnRestaurant
              RestaurantIndividual={IndividualButtonStore}
            ></BtnRestaurant>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableStores;
