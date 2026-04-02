import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SeleccionarUser from "./pages/SeleccionarUser"
import MainClientPage from "./pages/MainClientPage"
import SpecificStore from "./pages/SpecificStore"
import OptionalRestaurants from "./pages/OptionsRestaurants"
import IndividualStore from "./pages/IndividualRestaurant"
import TotalOrders from "./pages/TotalOrders"
import ShopCart from "./pages/ShopCart"
import TotalOrdersDelivery from "./pages/TotalOrdersDelivery"
import OrdersInTheWay from "./pages/OrdersInTheWay"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seleccionuser" element={<SeleccionarUser/>} />
        <Route path="/seleccionuser/client" element={<MainClientPage/>} />
        <Route path="/seleccionuser/client/store/:id" element={<SpecificStore/>} />
        <Route path="/seleccionuser/client/shopcart" element={<ShopCart/>} />
        <Route path="/seleccionuser/restaurant" element={<OptionalRestaurants/>} />
        <Route path="/seleccionuser/restaurant/store/:id" element={<IndividualStore/>} />
        <Route path="/seleccionuser/client/totalorders" element={<TotalOrders/>} />
        <Route path="/seleccionuser/delivery" element={<TotalOrdersDelivery/>} />
        <Route path="/seleccionuser/delivery/ordersintheway" element={<OrdersInTheWay/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App