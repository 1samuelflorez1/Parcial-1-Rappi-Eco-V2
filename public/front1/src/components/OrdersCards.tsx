import type { OrdersType } from "../types/OrdersTypes"

function OrdersCard({OrderIndividual}: {OrderIndividual: OrdersType} ) {

    return(
        <div className="flex flex-col bg-white shadow-lg rounded overflow-hidden m-4 w-72 h-auto hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                <img 
                    src={OrderIndividual.product_image} 
                    alt={OrderIndividual.product_name} 
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Orden #{OrderIndividual.order_id}
                </div>
            </div>
            
            <div className="p-5 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{OrderIndividual.product_name}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        <span className="font-semibold text-gray-700">Dirección:</span> {OrderIndividual.address}
                    </p>
                </div>
                
                <div className="mt-2 border-t pt-3">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Estado</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-md 
                            ${OrderIndividual.status && OrderIndividual.status.toLowerCase() 
                            === 'pagado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {OrderIndividual.status || 'Pendiente'}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-600">Precio Unit.</span>
                        <span className="text-lg font-black text-green-600">${OrderIndividual.unit_price}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OrdersCard