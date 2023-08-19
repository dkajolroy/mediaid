
import { discountCalculator } from "@/utils/generator";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { FiEye, FiHeart } from "react-icons/fi";

function BestSellingProduct({ item }) {
    const discountPrice = discountCalculator(item.price, item.discountPercent)
    return (
        <Link
            href={{ pathname: "/view", query: { product: item.sku } }}
            className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
            <div className="overflow-hidden">
                <Image
                    src={item.thumbnail}
                    alt="item"
                    width={200}
                    height={200}
                    priority={true}
                    className="object-cover hover:scale-125 transition w-full h-32 rounded-sm"
                />
            </div>
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
            <div>
                <h4 className="text-[12px] mt-1 tracking-wide">
                    {item.title.length > 20
                        ? item.title.slice(0, 20) + "..."
                        : item.title}
                </h4>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        {
                            // Regular Price                                
                            discountPrice !== item.price ?
                                <del className="text-xs font-mono text-gray-400">
                                    {item.price}
                                </del> : null
                        }
                        <span className="font-mono text-yellow-500 font-semibold">
                            {discountPrice}৳
                        </span>
                    </div>
                    {/* <Rating
                        key={item.sku}
                        placeholderRating={4.5}
                        emptySymbol={<AiTwotoneStar className="text-[10px]" />}
                        placeholderSymbol={
                            <AiTwotoneStar className="text-[10px] text-yellow-600" />
                        }
                        readonly
                    /> */}
                </div>
            </div>
        </Link>
    )
}

export default BestSellingProduct