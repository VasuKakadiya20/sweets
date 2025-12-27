// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Rating from '@mui/material/Rating';
import "swiper/css";

import quoteIcon from "../../assets/quote.svg";
import { FaQuoteLeft } from "react-icons/fa";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import testimonialThumb from "../../assets/img3.png";
import "./testimonial.css";

const testimonials = [
    {
        name: "Ravi Patel",
        rating: 5,
        roll: "Regular Customer",
        text: "The Peanut Chikki is absolutely delicious! Fresh, crunchy and perfectly balanced with sweetness. I order every festival season for my family.",
        profile: profile4,
    },
    {
        name: "Meera Shah",
        rating: 4,
        roll: "Sweet Lover",
        text: "Loved the Kaju Til Chikki and Dry Fruit Mix Bar. Packaging was neat and hygienic, and the taste feels completely homemade.",
        profile: profile4,
    },
    {
        name: "Amit Verma",
        rating: 5,
        roll: "Wholesale Buyer",
        text: "Great quality and premium ingredients. We regularly buy Chikki in bulk for our shop — our customers really like the authentic traditional taste.",
        profile: profile4,
    },
];

export default function TestimonialSlider() {
    return (
        <section className="py-20 px-6 lg:px-24 grid grid-cols-1 items-center gap-12 container "> {/*xl:grid-cols-2  */}

            <div>
                <p className="flex gap-2 subtitle">
                    Testimonials
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

            {/* <div className="flex justify-center d-none d-xl-block">
                <div className="imgwarrper mt-10">
                    <img src={testimonialThumb} />
                </div>
            </div> */}

        </section>
    );
}
