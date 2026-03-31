const OrdersData = async () => {
    const r = await fetch(`http://localhost:7070/seleccionuser/client/totalorders`)
    const data = await r.json()
    return data.orders
}

export {OrdersData}