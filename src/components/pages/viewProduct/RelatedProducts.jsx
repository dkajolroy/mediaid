import BestSellingProduct from "@/components/product/bestSale/BestSellingProduct";
import { products } from "@/constant/dummyData";

const RelatedProducts = () => {
  return (
    <>
      <div className="border md:mx-auto mx-2 md:my-6 my-4  px-4 py-4  ">
        <h2 className="font-semibold text-lg">
          Related Products
        </h2>

        {/* product card  */}
        <div className="grid grid-cols-2 lg:grid-cols-3  ">
          {products.map((item, i) => (
            <BestSellingProduct item={item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
