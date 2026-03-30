import { useNavigate } from "react-router-dom";
import type { RestaurantTypes } from "../types/RestaurantTypes";

function BtnRestaurant({RestaurantIndividual}: {RestaurantIndividual: RestaurantTypes;}) {

const nav = useNavigate()

  return (
    <>
      <button
        onClick={() => nav(`/seleccionuser/restaurant/store/${RestaurantIndividual.id}`)}
        className="p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all w-70 
                cursor-pointer mt-2 text-white/80"
      >
        {RestaurantIndividual.name}
      </button>
    </>
  );
}

export default BtnRestaurant;
