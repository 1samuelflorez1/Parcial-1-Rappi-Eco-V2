import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import type { RootState } from '../redux/store';

function ShopCart() {
  const { items: cartItems, cartTotal, currentStoreId } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [payMethod, setPayMethod] = useState('cash');
  const navigate = useNavigate();

  const handleOrder = async () => {
    if (!address) {
      alert("Por favor ingresa una dirección");
      return;
    }

    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    try {
      const response = await fetch("http://localhost:7070/seleccionuser/client/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          store_id: currentStoreId,
          pay_method: payMethod,
          address: address,
          status: "pending",
          total: cartTotal,
          items: cartItems.map(item => ({
            product_id: item.id,
            unit_price: item.price
          }))
        })
      });

      if (response.ok) {
        alert("Pedido realizado con éxito");
        dispatch(clearCart());
        navigate(`/seleccionuser/client`);
      } else {
        alert("Hubo un error al crear tu pedido");
      }
    } catch (error) {
      console.error("Error al procesar el pedido:", error);
      alert("Falla de red al realizar el pedido");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full px-4">
      <h1 className="text-5xl font-bold text-[#fc6251]/80 mb-5">Tu Carrito</h1>
      
      {cartItems.length > 0 ? (
        <div className="w-full max-w-2xl p-8 rounded border-[#fc6251]/30 border-2">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-[#fc6251]/20 py-3">
              <div className="flex items-center gap-4">
                <img src={item.image_product} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-white/80">{item.name}</h3>
                  <p className="text-gray-400">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-[#fc6251]">${Number(item.price) * item.quantity}</p>
            </div>
          ))}
          
          <div className="mt-5 text-right">
            <h2 className="text-3xl font-bold text-white/90">Total: ${cartTotal}</h2>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div>
              <label className="block text-white/70 mb-2 font-semibold">Dirección de Envío</label>
              <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 rounded bg-white/10 text-white outline-none border border-transparent focus:border-[#fc6251]/50 transition-all font-semibold"
                placeholder="Ej. Carrera 32a #16-08"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2 font-semibold">Método de Pago</label>
              <select 
                value={payMethod}
                onChange={(e) => setPayMethod(e.target.value)}
                className="w-full p-3 rounded bg-[#1a1a1a] text-white outline-none border border-[#fc6251]/30 font-semibold"
              >
                <option value="cash">Efectivo (Cash)</option>
                <option value="card">Tarjeta (Card)</option>
              </select>
            </div>
            <button 
              onClick={handleOrder}
              className="p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all 
                cursor-pointer mt-2 text-white/80"
            >
              Realizar Pedido
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="mt-2 p-2 text-white/50 hover:text-white transition-all cursor-pointer"
            >
              Seguir comprando
            </button>
          </div>
        </div>
      ) : (
        <div className="text-xl text-white/50 p-10 border-[#fc6251]/30 border-2 rounded flex flex-col items-center shadow-lg shadow-black/20">
          <p className="mb-4 text-white/80">Tu carrito está vacío.</p>
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all w-70 
                cursor-pointer mt-2 text-white/80"
          >
            Volver a la tienda
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
