import React from 'react'
import mainimg from '../../assets/Pattern_Banner_1.png'
import img3 from "../../assets/Contacts_Img.png"
import Certifications from './Priority'
import useScrollAnimation from '../useScrollAnimation'
import AboutSectionHome from '../home/AboutSection'
import CtaSection from '../home/order'
import TestimonialSlider from './testimonials'

function Aboutuspage() {
    useScrollAnimation();
    return (
        <>
            <div className="contact-banner slideU">
                <div className="overlay"></div>
                <div className="content">
                    <h1>About Us</h1>
                    <div className="breadcrumb">
                        <a href="/" className="text-[#E09F40] font-bold text-sm">Home</a>
                        <span className="font-bold text-sm text-white">//</span>
                        <span className="font-bold text-sm text-white">About Us</span>
                    </div>
                </div>
            </div>

            <div className='bg-[#F4F1EA]'>
                <section className="max-w-6xl mx-auto text-center py-12 px-6 slideU">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#713722] mb-4 ">
                        Crunch with Joy, Taste the Tradition.
                    </h1>
                    <p className="text-gray-600 md:text-lg mb-8 text-sm">
                        At <b>Marvel Crunch Chikki</b>, we honor tradition with every bite. Crafted using premium ingredients and time-tested techniques, our chikkis deliver authentic taste, rich texture, and the trusted quality our customers love.
                    </p>
                    <img
                        src={mainimg}
                        alt="sweets pattern"
                        className="w-full max-w-[1500px] mx-auto rounded-lg shadow-md"
                    />
                </section>

                <AboutSectionHome />

                <section className="w-full py-10 slideLeft">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                        <div className="relative">
                            <img
                                src={img3}
                                alt="Chocolate"
                                className="rounded-lg w-full object-cover shadow-md"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-widest text-[#E09F40] mb-2 border-l-4 border-[#E09F40] pl-3">
                                Our Philosophy
                            </p>
                            <br />
                            <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
                                Authentic Chikki,<br />
                                Rooted in Tradition
                            </h2>
                            <p className="text-gray-600 md:text-lg mb-8 text-sm">
                                At <b>Marvel Crunch</b>, we believe great taste begins with sincerity and care. We source premium-quality peanuts, jaggery, and natural ingredients from trusted farms across India, ensuring every chikki is full of rich flavor and satisfying crunch. With honest ingredients and heartfelt craftsmanship, every bite is a moment of pure delight.
                            </p>
                        </div>
                    </div>
                </section>

                <CtaSection />
                <TestimonialSlider />
                <Certifications />
            </div>
        </>
    )
}

export default Aboutuspage