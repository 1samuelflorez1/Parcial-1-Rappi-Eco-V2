const ProductsData = async (storeId: number) => {
    const r = await fetch(`${import.meta.env.VITE_API_URL}/seleccionuser/client/store/${storeId}`)
    const data = await r.json()
    return data
}

export {ProductsData}