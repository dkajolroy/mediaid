'use client'
import ProductLoader from "@/components/loader/productLoader";
import FlashSellingProduct from "@/components/product/flashSale/FlashSellingProduct";
import { useFilter } from "@/hooks/useFilteredProduct";
import { useSelector } from "react-redux";

function Page({ searchParams }) {
    const searchText = searchParams.search;
    const { filter } = useSelector(s => s.filterState)
    // category
    // inStock
    // maxPrice
    // minPrice
    // rating
    const query = `keyword=${searchText}&min=${filter.minPrice}${filter.maxPrice ? `&max=${filter.maxPrice}` : ''}${filter.inStock ? "&inStock=true" : ''}${filter.category ? `&category=${filter.category}` : ''}`

    const { products, error, loading } = useFilter(query)
    // console.log(products)

    if (error) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="text-2xl">Something want wrong !</span>
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
                    : products && products.length ?
                        <div className="grid grid-cols-5">
                            {products.map((item, i) =>
                                <FlashSellingProduct item={item} key={i} />
                            )}
                        </div> :
                        <div>
                            <span className="text-2xl">Product not found</span>
                        </div>
            }
        </div>
    )
}

export default Page