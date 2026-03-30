import { useNavigate } from "react-router-dom";
import type { RestaurantTypes } from "../types/RestaurantTypes";

function RestaurantCards({
  CardIndividual,
}: {
  CardIndividual: RestaurantTypes;
}) {
  const navigate = useNavigate();

  const GoToStore = () => {
    if (CardIndividual.is_open) {
      navigate(`/seleccionuser/client/store/${CardIndividual.id}`);
    }
  };

  return (
    <div>
      <div
        className="p-5 border-[#fc6251]/30 border-2 rounded-2xl w-90 m-5 
        flex flex-col items-center cursor-pointer hover:scale-105 transition-all"
      >
        <img
          className="rounded-2xl h-60"
          src={CardIndividual.image_store}
        ></img>
        <p className="text-2xl font-bold text-white/80 mt-2">
          {CardIndividual.name}
        </p>
        <p className="text-white/60 mt-2 w-70 text-[13px]">
          {CardIndividual.description}
        </p>
        <p className={`text-[12px] self-start ml-5 ${CardIndividual.is_open ? "text-green-800" : "text-red-800"}`}>
            {CardIndividual.is_open ? "Open" : "Close"}</p>
        <button
          className={`p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all w-70 
                cursor-pointer mt-2 text-white/80 ${CardIndividual.is_open ? "hover:bg-[#fc6251]/80" : "hover:bg-red-800"}`}
          type="submit"
          onClick={GoToStore}
        >
          {CardIndividual.is_open ? "Availeable" : "Absent"}
        </button>
      </div>
    </div>
  );
}

export default RestaurantCards;
