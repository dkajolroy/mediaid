"use client"
import BestSellingProduct from "@/components/product/bestSale/BestSellingProduct";
import { products } from "@/constant/dummyData";
import { Swiper, SwiperSlide } from "swiper/react";

const BestSelling = () => {

  return (
    <div className="px-1 mt-4">
      <div className="flex items-end justify-between">
        <h4 className="md:font-extrabold md:text-2xl text-slate-700 tracking-wide">
          Best <span className="text-[#FD3851]">Selling</span>
        </h4>
        <p className="text-sm tracking-wide mr-1">View All</p>
      </div>


      {/* Column 1 */}
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className="mySwiper my-1">
        {products.slice(4, 30).map((item, i) => (
          <SwiperSlide key={i}>
            <BestSellingProduct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Column 2 */}
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className="mySwiper my-1">
        {products.slice(10, 30).map((item, i) => (
          <SwiperSlide key={i}>
            <BestSellingProduct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default BestSelling;
