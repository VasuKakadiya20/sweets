import React from 'react'
import mainimg from '../../assets/Pattern_Banner_1.png'
import img1 from '../../assets/Pattern_Banner_2.png'
import img2 from '../../assets/about-us.png'
import img3 from "../../assets/Contacts_Img.png"
import Certifications from './Priority'
import useScrollAnimation from '../useScrollAnimation'
import AboutSectionHome from '../home/AboutSection'
import CtaSection from '../home/order'

function Aboutuspage() {
    useScrollAnimation();
    return (
        <>
            <div className="contact-banner slideU">
                <div className="overlay"></div>
                <div className="content">
                    <h1>About us</h1>
                    <div className="breadcrumb">
                        <a href="/" className="text-[#E09F40] font-bold text-sm">Home</a>
                        <span className="font-bold text-sm text-white">//</span>
                        <span className="font-bold text-sm text-white">About us</span>
                    </div>
                </div>
            </div>

            <div className='bg-[#F4F1EA]'>
                  <section className="max-w-6xl mx-auto text-center py-12 px-6 slideU">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#713722] mb-4 ">
                        {/* Excellence in Every Crunch */}Taste the Crunch, Celebrate the Flavor
                    </h1>
                    <p className="text-gray-600 md:text-lg mb-8 text-sm">
                        For years, <b>Marvel Crunch Chikki</b> has stood for authentic taste and premium craftsmanship. With carefully selected ingredients and perfected techniques, we’ve earned a reputation as a trusted high-quality chikki.
                    </p>{/*and gift-worthy brand for delicious, */}
                    <img
                        src={mainimg}
                        alt="sweets pattern"
                        className="w-full max-w-[1500px] mx-auto rounded-lg shadow-md"
                    />
                </section>

                <AboutSectionHome />

                {/* <section className="w-full py-10 slideRight">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                        <div>
                            <p className="text-2xl font-serif font-bold tracking-widest text-[#713722] mb-2 border-l-4 border-[#713722] pl-2">
                                Quality that delights, In every bite.
                            </p>
                            <br />
                            <p className="text-gray-600 md:text-lg mb-8 text-sm">
                                At <b>Marvel Crunch</b>, we create chikki with passion, tradition, and precision.
                                Our artisans combine time-honored methods with modern food science for the perfect crunch.
                                Each batch is made in a hygienic, state-of-the-art facility to ensure freshness.
                                We use only carefully selected peanuts, dry fruits, jaggery, and rich chocolate.
                                No artificial shortcuts—just pure ingredients and authentic taste.
                                Every bite delivers quality, crunch, and unforgettable flavor.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src={img1}
                                alt="Chocolate"
                                className="rounded-lg w-full object-cover shadow-md"
                            />
                        </div>
                    </div>
                </section> */}

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
                                Premium Chikki,<br />
                                Made for Everyone
                            </h2>
                            <p className="text-gray-600 md:text-lg mb-8 text-sm">
                                At <b>Marvel Crunch</b>, we believe true taste comes from purity and passion. We carefully select the finest peanuts, jaggery, and natural ingredients from across India to craft chikkis that are rich in flavour and irresistible in crunch. Because when ingredients are honest, every bite becomes a celebration.
                            </p>
                        </div>
                    </div>
                </section>

                <CtaSection />
                <Certifications />
            </div>
        </>
    )
}

export default Aboutuspage
