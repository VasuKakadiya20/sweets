import React from 'react'
import IndianSweetsSection from '../../Compontes/Herosection/homehero'
import Bestseller from '../../Compontes/home/product'
import useScrollAnimation from '../../Compontes/useScrollAnimation'
import AboutSectionHome from '../../Compontes/home/AboutSection'
import BestSellingDishes from '../../Compontes/home/BestSellingDishes'
import CtaSection from '../../Compontes/home/order'
import ContactSection from '../../Compontes/contectus/contectusbox'


function Home() {
    useScrollAnimation()
    return (
        <>
            <IndianSweetsSection />
            <Bestseller />
            <AboutSectionHome/>
            <BestSellingDishes/>
            <CtaSection/>
            <ContactSection/>
        </>
    )
}

export default Home