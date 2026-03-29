const StoresData = async () => {
    const r = await fetch("http://localhost:7070/seleccionuser/client")
    const data = await r.json()
    return data.stores
}

export {StoresData}