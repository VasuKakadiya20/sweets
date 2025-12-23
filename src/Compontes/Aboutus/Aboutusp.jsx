import React from 'react'
import mainimg from '../../assets/Pattern_Banner_1.png'
import img1 from '../../assets/Pattern_Banner_2.png'
import img2 from '../../assets/about-us.png'
import img3 from "../../assets/Contacts_Img.png"
import Certifications from './Priority'
import useScrollAnimation from '../useScrollAnimation'
// import bg from "../../assets/bg_img12.jpg"

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

            <section className="max-w-6xl mx-auto text-center py-12 px-6 slideU">
                <h1 className="text-3xl md:text-4xl font-bold text-[#c19b5a] mb-4 "> 
                    Excellence in Every Morsel
                </h1>
                <p className="text-gray-600 md:text-lg mb-8 text-sm">
                    For over 3 decades, Dairy has grown to be synonymous with premium quality Indian Sweets. It has created a niche
                    for itself for being one of the most premium and giftable brands in Surat today.
                </p>
                <img
                    src={mainimg}
                    alt="sweets pattern"
                    className="w-full max-w-[1500px] mx-auto rounded-lg shadow-md"
                />
            </section>

            <section className="w-full py-10 slideRight">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                    <div>
                        <p className="text-2xl font-serif font-bold tracking-widest text-[#c19b5a] mb-2 border-l-4 border-[#c19b5a] pl-2">
                            Quality that delights, In every bite.
                        </p>
                        <br />
                        <p className="text-gray-600 md:text-lg mb-8 text-sm">
                            Over decades, Dairy has grown to be synonymous with premium quality Indian sweets. Using technique, skill and science, our mithai artisans have
                            perfected our recipes, packaging and processes. At hygienic, state- of the - art making facility we mould over 30,000 kgs of sweets everyday to
                            deliver noticeable freshness, patrons can feel, taste and enjoy. Only absolutely fresh, carefully selected ingredients sourced from the best across
                            the country go into making every bite.
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
            </section>

            <section className="w-full py-10 slideLeft">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                    <div className="relative">
                        <img
                            src={img2}
                            alt="Chocolate"
                            className="rounded-lg w-full object-cover shadow-md"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#c19b5a] mb-2 border-l-4 border-[#c19b5a] pl-3">
                            About Us
                        </p>
                        <br />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
                            Taste of<br />
                            Royal India
                        </h2>
                        <p className="text-gray-600 md:text-lg mb-8 text-sm">
                            Dairy owes its success to its know-how that is the culmination of tradition, innovation and uncompromising quality. The dynamism
                            of Dairy is also the result of it’s unrelenting quest to restyle and update its product range, packaging , to cater to the changing demographic and dynamics of changing India.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-10 slideRight">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#c19b5a] mb-2 border-l-4 border-[#c19b5a] pl-3">
                            Our Philosophy
                        </p>
                        <br />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
                            Luxurious Mithais,<br />
                            Accessible To Everyone
                        </h2>
                        <p className="text-gray-600 md:text-lg mb-8 text-sm">
                            We are obsessed with authenticity and believe in curating flavours that suit your taste and your celebrations.
                            The sweet smelling saffron in our Malpua we get from Kashmir, and the melt-in-your-mouth paneer in our savouries
                            from Delhi - because great taste can never have boundaries.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img3}
                            alt="Chocolate"
                            className="rounded-lg w-full object-cover shadow-md"
                        />
                    </div>
                </div>
            </section>

          <Certifications/>
        </>
    )
}

export default Aboutuspage
