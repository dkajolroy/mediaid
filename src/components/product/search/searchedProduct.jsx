import { discountCalculator } from "@/utils/generator"
import Image from "next/image"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"

function SearchedProduct({ item }) {
    const discountPrice = discountCalculator(item.price, item.discountPercent)

    return (
        <div
            className="flex p-1 border-b rounded  items-center justify-between hover:bg-gray-100 cursor-pointer"
        >
            <Link href={{ pathname: "/view", query: { product: item.sku } }} className="flex w-full items-center gap-2">
                <Image
                    src={item.thumbnail}
                    alt="image"
                    width={50}
                    height={50}
                    priority={true}
                    className="object-cover rounded"
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <div className="flex gap-2 items-center">
                        {
                            // Discount Percent
                            discountPrice !== item.price ?
                                <p className="text-[10px] bg-[#60B8A6] px-1 py-0.5 text-white rounded-md">
                                    <span>{item.discountPercent}</span>% Off
                                </p> : null
                        }
                        {
                            // Regular Price                                
                            discountPrice !== item.price ?
                                <del className="text-xs font-mono text-gray-400">
                                    {item.price}৳
                                </del> : null
                        }
                        <span className="text-sm">{discountPrice}৳</span>

                    </div>
                </div>
            </Link>
            <div className="p-1 rounded-full cursor-pointer hover:bg-red-100">
                <IoMdClose size={22} />
            </div>
        </div>
    )
}

export default SearchedProduct