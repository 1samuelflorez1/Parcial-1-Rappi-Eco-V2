const OrdersDataDelivery = async () => {
    const r = await fetch(`${import.meta.env.VITE_API_URL}/seleccionuser/delivery/totalorderdelivery`)
    const data = await r.json()
    return data.orders 
}

export {OrdersDataDelivery}