import React from 'react'
import IndianSweetsSection from '../../Compontes/Herosection/homehero'
import Contectusbox from '../../Compontes/contectus/contectusbox'
import Bestseller from '../../Compontes/home/product'
import img2 from '../../assets/about-us.png'
import useScrollAnimation from '../../Compontes/useScrollAnimation'
import AboutSectionHome from '../../Compontes/home/AboutSection'
import BestSellingDishes from '../../Compontes/home/BestSellingDishes'


function Home() {
    useScrollAnimation()
    return (
        <>
            <IndianSweetsSection />
            <Bestseller />
            <AboutSectionHome/>
            <BestSellingDishes/>
            <section className="bg-[#F4F1EA] w-full py-10 slideU">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#713722] mb-2 border-l-4 border-[#713722] pl-3">
                            Our Philosophy
                        </p>
                        <br />

                        <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
                           Premium Chikki,<br />
                            Made for Everyone
                        </h2>

                        <p className="text-gray-600 md:text-lg mb-8 text-sm">
                            At <b>Marvel Crunch</b>, we believe true taste comes from purity and passion. We carefully select the finest peanuts, jaggery, and natural 
                            ingredients from across India to craft chikkis that are rich in flavour and irresistible in crunch. Because when ingredients are honest, every 
                            bite becomes a celebration.
                        </p>

                    </div>

                    <div className="relative">
                        <img
                            src={img2}
                            alt="Chocolate"
                            className="rounded-lg w-full object-cover shadow-md"
                        />
                    </div>
                </div>
            </section>
            <Contectusbox />
        </>
    )
}

export default Home