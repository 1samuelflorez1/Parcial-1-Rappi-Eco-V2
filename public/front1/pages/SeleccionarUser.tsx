import { useNavigate } from "react-router-dom";

function SeleccionarUser() {
  const nav = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center mt-50">
        <h1 className="font-bold text-4xl mb-4 text-white/80">
          What are <span className="text-[#FD6250]">You</span>
        </h1>

        <div className="flex flex-row gap-4">
          <button
            onClick={() => nav("/seleccionuser/client")}
            className="bg-[#FD6250]/70 p-1 pl-4 pr-4 rounded-4xl 
    text-white/80 hover:bg-[#FD6250]/30 transition-all cursor-pointer"
          >
            Client
          </button>

          <button
            onClick={() => nav("/seleccionuser/restaurant")}
            className="bg-[#FD6250]/70 p-1 pl-4 pr-4 rounded-4xl 
        text-white/80 hover:bg-[#FD6250]/30 transition-all cursor-pointer"
          >
            Restaurant
          </button>

        <button
          onClick={() => nav("/seleccionuser/delivery")}
          className="bg-[#FD6250]/70 p-1 pl-4 pr-4 rounded-4xl 
        text-white/80 hover:bg-[#FD6250]/30 transition-all cursor-pointer"
        >
          Delivery
        </button>
        </div>

        <button
          onClick={() => nav("/")}
          className="bg-white/10 pl-2 pr-2 rounded-4xl text-[13px] 
        text-white/30 hover:bg-white/5 transition-all cursor-pointer mt-40"
        >
          Home
        </button>

      </div>
    </>
  );
}

export default SeleccionarUser;
