import type { OrdersType } from "../types/OrdersTypes"

function OrdersCard({OrderIndividual}: {OrderIndividual: OrdersType} ) {

    return(
        <div className="flex flex-col border-2 border-[#fc6251]/30 shadow-lg rounded overflow-hidden m-4 h-auto hover:shadow-2xl transition-all 
        duration-300 transform hover:-translate-y-1">            
            <div className="p-5 flex flex-row">
                <div>
                    <img
                    className="w-40 rounded" 
                    src={OrderIndividual.product_image}></img>
                </div>
                <div className="ml-10 mr-10 w-50">
                    <h3 className="text-xl font-bold text-white/90 mb-1 truncate">{OrderIndividual.product_name}</h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                        <span className="font-semibold text-white/80">Dirección - </span> {OrderIndividual.address}
                    </p>
                    <div className="top-2 right-2 bg-[#fc6251]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Orden #{OrderIndividual.order_id}
                </div>
                </div>
                
                <div className="mt-2 pt-3">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/30">Estado</span>
                        <span className={`text-xs font-bold p-2 rounded-md 
                            ${OrderIndividual.status && OrderIndividual.status.toLowerCase() 
                            === 'delivered' ? 'bg-green-100 text-green-700' : 'border border-[#fc6251]/80 text-white/80'}`}>
                            {OrderIndividual.status}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-white/30 mr-6">Precio</span>
                        <span className="text-lg font-black text-white/60">${OrderIndividual.unit_price}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OrdersCard