import { useEffect, useState } from "react";
import RestaurantCards from "../components/RestaurantCards";
import { useNavigate } from "react-router-dom";
import type { RestaurantTypes } from "../types/RestaurantTypes";
import { StoresData } from "../services/StoresData";

import logorappi from "../assets/logorappi.png"
import shopcart from "../assets/ShopCart.png"
import signout from "../assets/signout.png"

function AvailableStores() {
  const [InfoRestaurants, setInfoRestaurants] = useState<RestaurantTypes[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await StoresData();
        setTimeout(() => {
          setInfoRestaurants(data);
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
          <img 
          src={logorappi}></img>
        </div>
        <img
        onClick={() => navigate("/seleccionuser")}
        className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7" 
        src={signout}></img>
        <img
        onClick={() => navigate("/shopcart")}
        className="scale-30 flex self-end ml-220 cursor-pointer hover:scale-35 transition-all mb-7" 
        src={shopcart}></img>
      </div>

      <div className="grid grid-cols-3">
        {InfoRestaurants.map((IndividualRestaurant: RestaurantTypes) => {
          return (
            <RestaurantCards
              CardIndividual={IndividualRestaurant}
              key={IndividualRestaurant.id}
            ></RestaurantCards>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableStores;
