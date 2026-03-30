import type { ProductType } from "../types/ProductType.ts"

function AdminProducts ({ProductIndividual}: {ProductIndividual:ProductType}) {

    return (<>
        <div className="p-2 border-[#fc6251]/30 border-2 rounded w-60 m-1 
        flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all">
            <p className="text-[18px] font-medium text-white/80 mt-2 mb-1">{ProductIndividual.name}</p>
            <h3 className="text-[14px]">{ProductIndividual.price}$</h3>
        </div>
    </>)
}
export default AdminProducts