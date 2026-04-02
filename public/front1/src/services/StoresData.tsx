const StoresData = async () => {
    const r = await fetch(`${import.meta.env.VITE_API_URL}/seleccionuser/client`)
    const data = await r.json()
    return data.stores
}

export {StoresData}