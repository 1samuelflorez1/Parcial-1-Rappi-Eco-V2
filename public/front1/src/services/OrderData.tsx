const OrdersData = async () => {
    const r = await fetch(`${import.meta.env.VITE_API_URL}/seleccionuser/client/totalorders`)
    const data = await r.json()
    return data.orders
}

export {OrdersData}