const OrdersInTheWayDATA = async () => {
    const r = await fetch(`${import.meta.env.VITE_API_URL}/seleccionuser/delivery/ordersintheway`)
    const data = await r.json()
    return data.orders 
}

export {OrdersInTheWayDATA}