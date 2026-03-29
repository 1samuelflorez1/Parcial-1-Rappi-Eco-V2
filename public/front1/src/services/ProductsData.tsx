const ProductsData = async (storeId: number) => {
    const r = await fetch(`http://localhost:7070/seleccionuser/client/store${storeId}`)
    const data = await r.json()
    return data.stores
}

export {ProductsData}