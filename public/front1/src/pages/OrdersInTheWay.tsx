import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { OrdersType } from "../types/OrdersTypes";

import logorappi from "../assets/logorappi.png"
import shopcart from "../assets/ShopCart.png"
import signout from "../assets/signout.png"
import { OrdersInTheWayDATA } from "../services/OrdersInTheWay";
import OrdersCardInTheWay from "../components/OrdersCardsInTheWay";

function OrdersInTheWay() {
  const [TotalOrders, setTotalOrders] = useState<OrdersType[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await OrdersInTheWayDATA()
        setTimeout(() => {
          setTotalOrders(data);
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
        <div 
        onClick={() => navigate("/seleccionuser/delivery")}
        className="cursor-none hover:scale-110 transition-all mb-7 absolute">
          <img 
          src={logorappi}></img>
        </div>
        <img
        onClick={() => navigate("/seleccionuser")}
        className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7" 
        src={signout}></img>
        <img
        onClick={() => navigate("/seleccionuser/delivery/ordersintheway")}
        className="scale-30 flex cursor-pointer self-end ml-220 hover:scale-35 transition-all mb-7" 
        src={shopcart}></img>
      </div>

      <h1 className="text-5xl font-bold text-[#fc6251]/80 mb-5">Orders On the Way</h1>

      {TotalOrders.length > 0 ? (<div className="mb-12">
        {TotalOrders.map((IndividualOrder: OrdersType) => {
          return (
            <OrdersCardInTheWay
              OrderIndividual={IndividualOrder}
              key={IndividualOrder.id}
            />
          );
        })}
      </div>) : (<div className="text-xl text-white/50 p-10 border-[#fc6251]/30 border-2 rounded mt-5 flex flex-col items-center shadow-lg shadow-black/20">
          <p className="mb-4 text-white/80 font-bold">There are No Orders in Progress</p>
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all w-40 
                cursor-pointer mt-2 text-white/80 text-[15px]"
          >
            Go Back
          </button>
        </div>)}

      
    </div>
  );
}

export default OrdersInTheWay;
