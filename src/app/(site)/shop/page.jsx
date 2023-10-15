'use client'
import ProductLoader from "@/components/loader/productLoader";
import FlashSellingProduct from "@/components/product/flashSale/FlashSellingProduct";
import { useSearch } from "@/hooks/useSearch";
import { useState } from "react";

function Page({ searchParams }) {
    const searchText = searchParams.search;
    // category
    // inStock
    // maxPrice
    // minPrice
    // rating
    const defaultCategory = {
        _id: "",
        name: "All Departments",
        image: ""
    }
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

    // const { products, error, loading } = useFilter(query)
    const { products, loading, error } = useSearch(searchText, !searchText ? null : selectedCategory._id)
    console.log(products, loading, error)

    if (error) {
        return <div className="min-h-[60vh] flex justify-center items-center">
            <span className="text-2xl text-gray-500">Something want wrong !</span>
        </div>
    }
    return (
        <div className="min-h-screen">
            {
                loading ?
                    <div className="grid grid-cols-5">
                        {[...Array(15).keys()].map((item) =>
                            <ProductLoader key={item} />
                        )}
                    </div>
                    : products.length ?
                        <div>
                            <div className="grid grid-cols-5">
                                {products.map((item, i) =>
                                    <FlashSellingProduct item={item} key={i} />
                                )}
                            </div>
                            <div className="flex justify-center my-5">
                                <button
                                    disabled={products.length < 15}
                                    className="bg-[#60b7a5] disabled:bg-[#60b7a5] disabled:cursor-not-allowed hover:bg-[#509e8e] transition text-white rounded py-1 px-5">Load more</button>
                            </div>
                        </div> :
                        <div className="flex h-full min-h-[60vh] justify-center items-center">
                            <span className="text-2xl text-gray-500">Product not found</span>
                        </div>
            }
        </div>
    )
}

export default Page