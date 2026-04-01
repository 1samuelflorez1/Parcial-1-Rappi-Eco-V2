const OrdersDataDelivery = async () => {
    const r = await fetch(`http://localhost:7070/seleccionuser/delivery/totalorderdelivery`)
    const data = await r.json()
    return data.orders 
}

export {OrdersDataDelivery}