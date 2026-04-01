import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { OrdersType } from "../types/OrdersTypes";

import logorappi from "../assets/logorappi.png"
import shopcart from "../assets/ShopCart.png"
import signout from "../assets/signout.png"
import { OrdersDataDelivery } from "../services/OrderDataDelivery";
import OrdersCardDelivery from "../components/OrdersCardsDelivery";

function TotalOrdersDelivery() {
  const [TotalOrders, setTotalOrders] = useState<OrdersType[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await OrdersDataDelivery();
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
        <div className="cursor-none hover:scale-110 transition-all mb-7 absolute">
          <img 
          src={logorappi}></img>
        </div>
        <img
        onClick={() => navigate("/seleccionuser")}
        className="scale-30 flex self-end cursor-pointer hover:scale-35 transition-all mb-7" 
        src={signout}></img>
        <img
        onClick={() => navigate("/seleccionuser/client/totalorders")}
        className="scale-30 flex cursor-pointer self-end ml-220 hover:scale-35 transition-all mb-7" 
        src={shopcart}></img>
      </div>

      <div className="mb-12">
        {TotalOrders.map((IndividualOrder: OrdersType) => {
          return (
            <OrdersCardDelivery
              OrderIndividual={IndividualOrder}
              key={IndividualOrder.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TotalOrdersDelivery;
