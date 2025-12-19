import React, { useEffect, useMemo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { fetchDataFromApi } from '../../api';
import useScrollAnimation from '../useScrollAnimation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Bestseller() {
    useScrollAnimation();

    const [product, setproduct] = useState([])
    useEffect(() => {
        fetchDataFromApi("/Item/").then((res) => {
            setproduct(res)
        })
    }, [])

    const randomSix = useMemo(() => {
        if (!product || product.length === 0) return [];
        return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
    }, [product]);

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="py-12 bg-[#FFF8F0]">
                <h1 className='text-center text-xl text-[#713722] font-bold'>Best Sweets</h1>
                <p className='text-center text-2xl font-bold pb-3 text-[#E09F40]'>Popular Sweets Items</p>
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {randomSix.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <div className="rounded-2xl p-6 text-center transition-all duration-300">

                                        <Link to={`/items/${item._id}`}>
                                            <div className="relative w-60 h-60 mx-auto mb-5">

                                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E09F40] animate-spin-slow"></div>
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.itemtitle}
                                                    className="w-full h-60 rounded-full object-cover p-3 bg-white"
                                                />
                                            </div>
                                        </Link>

                                        <h3 className="text-xl font-bold text-[#713722]">
                                            {item.itemtitle}
                                        </h3>

                                        <p className="text-[#E09F40] font-bold mt-1 text-lg">
                                            ₹ {item.price}
                                        </p>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bestseller