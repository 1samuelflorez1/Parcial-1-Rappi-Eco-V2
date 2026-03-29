import { useNavigate } from "react-router-dom"

function HomePage () {

    const nav = useNavigate()

    return (<>
    <div className="flex flex-col items-center mt-50">
        <h1 className="font-bold text-4xl mb-4 text-white/80">Welcome to <span className="text-[#FD6250]">RAPPI</span></h1>
        <button
        onClick={() => nav("/seleccionuser")} 
        className="bg-[#FD6250]/70 p-1 w-20 rounded-4xl 
        text-white/80 hover:bg-[#FD6250]/30 transition-all cursor-pointer">Start</button>
    </div>
    </>)
}

export default HomePage