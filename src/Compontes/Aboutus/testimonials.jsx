import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Rating from '@mui/material/Rating';
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import "./testimonial.css";

const testimonials = [
    {
        name: "Ravi Patel",
        rating: 3,
        roll: "Regular Customer",
        text: "Strawberry Chocolate Chikki from Marvel Crunch has an amazing fruity - choco flavour. Fresh, crunchy and perfectly balanced - my kids absolutely love it.",
        profile: profile1,
    },
    {
        name: "Meera Shah",
        rating: 5,
        roll: "Chocolate Lover",
        text: "Pista Chocolate Chikki and Mango Chocolate Chikki are my favourites. The taste feels premium, rich and truly unique compared to regular sweets.",
        profile: profile2,
    },
    {
        name: "Amit Verma",
        rating: 4,
        roll: "Family Buyer",
        text: "Pineapple Chocolate Chikki has a refreshing tropical flavour with crunchy texture - something really different and delicious from Marvel Crunch.",
        profile: profile1,
    },
    {
        name: "Nisha Mehta",
        rating: 5,
        roll: "Regular Customer",
        text: "Chocolate Chikki is a perfect blend of sweetness and roasted nuts. Freshly made and full of flavour - we enjoy it every season.",
        profile: profile2,
    },
    {
        name: "Chetan Desai",
        rating: 4,
        roll: "Corporate Buyer",
        text: "We ordered SP Rajgira Tal Gud Ladu and SP Dana Gud Ladu for our office gifting. Premium quality, authentic taste and everyone appreciated the freshness.",
        profile: profile1,
    },
    {
        name: "Priya Nair",
        rating: 3,
        roll: "Health-Conscious Customer",
        text: "SP Daliya Gud Ladu has a wholesome crunch with natural sweetness. A perfect traditional sweet that feels light and satisfying.",
        profile: profile2,
    },
];

export default function TestimonialSlider() {
    return (
        <>
            <section className="py-20 px-6 lg:px-24 grid grid-cols-1 items-center gap-12 container ">
                <div>
                    <p className="flex gap-2 subtitle">
                        Client Reviews
                    </p>

                    <h2 className="mt-3 title">
                        what have lots of happy <br /> customer feedback
                    </h2>

                    <div className="mt-6 border-t border-gray-300"></div>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        className="mt-8 px-3 py-3"
                    >
                        {testimonials.map((item, i) => (
                            <SwiperSlide key={i} className="px-5 py-5 bg-white shadow-xl rounded-2xl">
                                <div>
                                    <FaQuoteLeft className="quote-icon mb-4" />

                                    <p className="text-xl font-bold text-[#5c6574]">
                                        {item.text}
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 profile-badge">
                                        <img src={item.profile} className="profile-badgeimg" />
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-xl font-semibold">{item.name}</span>
                                            <span className="text-sm">{item.roll}</span>
                                            <Rating name="read-only" value={item.rating} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}