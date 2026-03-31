import type { ProductType } from "../types/ProductType.ts"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function ProductCard ({ProductIndividual, storeId}: {ProductIndividual:ProductType, storeId: number}) {
    const dispatch = useDispatch()

    return (<>
        <div className="p-5 border-[#fc6251]/30 border-2 rounded w-80 m-5 
        flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
            <img
            className="rounded h-50" 
            src={ProductIndividual.image_product}></img>
            <p className="text-2xl font-bold text-white/80 mt-2 mb-2">{ProductIndividual.name}</p>
            <h3>{ProductIndividual.price}$</h3>
            <button
          onClick={() => dispatch(addToCart({ product: ProductIndividual, storeId }))}
          className="p-2 bg-white/10 rounded mb-2 outline-none
                hover:scale-105 hover:bg-[#fc6251]/80 transition-all w-70 
                cursor-pointer mt-2 text-white/80"
        >
          Add
        </button>
        </div>
    </>)
}

export default ProductCard