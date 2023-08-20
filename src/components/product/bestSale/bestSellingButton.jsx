'use client'
import { BsCart } from "react-icons/bs"
import { FiEye, FiHeart } from "react-icons/fi"

function BestSellingButton() {
    return (
        <div className="flex items-center justify-center gap-3 my-2">
            <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiEye className="text-lg text-white" />
            </button>
            <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiHeart className="text-lg text-white" />
            </button>
            <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <BsCart className="text-lg text-white" />
            </button>
        </div>
    )
}

export default BestSellingButton