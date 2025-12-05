import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

function Bestseller() {
    const [quantity, setQuantity] = useState({});

    const products = [
        {
            id: 1,
            name: "Special Doodh Peda",
            price: 260,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713",
                image2: "https://www.anandsweets.in/cdn/shop/files/Doodh_Peda_FOP.jpg?v=1740398099&width=493",
            },
        },
        {
            id: 2,
            name: "Motichoor Laddu",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/files/Laddu_f08f1645-4330-4433-a58c-a1acefe0357e.png?v=1741338627&width=713",
                image2: "https://www.anandsweets.in/cdn/shop/products/MotichurLaddu_1.png?v=1741338627&width=713",
            },
        },
        {
            id: 4,
            name: "Fresh Dharwad Peda",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/laddu_8fa9bbd5-2cc3-4b75-be55-7ffcefc2d9fe.png?v=1740397942&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/DharwadPedaBOP.png?v=1740397942&width=493",
            },
        },
        {
            id: 3,
            name: "Anand Mysore Pak",
            price: 280,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/KajuKatli.png?v=1747477294&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/Kaju_Katli_BOP.png?v=1747477294&width=493",
            },
        },
        {
            id: 5,
            name: "Coconut Burfi",
            price: 260,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/files/coco-barfi.png?v=1752650243&width=713",
                image2: "https://www.anandsweets.in/cdn/shop/products/Coconutburfi.png?v=1752650243&width=493",
            },
        },
        {
            id: 6,
            name: "California Badam Halwa",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/files/BadamHalwaTinFront.jpg?v=1716457083&width=1946",
                image2: "https://www.anandsweets.in/cdn/shop/products/badamHalwa.png?v=1716457083&width=990",
            },
        },
        {
            id: 7,
            name: "Ajmeri Kalakand",
            price: 270,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/files/AjmeriKalakand.png?v=1747477611&width=713",
                image2: "https://www.anandsweets.in/cdn/shop/products/AjmeriKalakand3.png?v=1747477611&width=713",
            },
        },
        {
            id: 8,
            name: "Roasted Channa Dal Burfi",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/RoastedChannaDal.png?v=1713442612&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/RoastedChanadalBurfiFront.jpg?v=1701772830&width=713",
            },
        },
        {
            id: 9,
            name: "Anjeer Dry Fruit Burfi",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/Figberry-Sugar-Free.jpg?v=1752650579&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/Anjeer_Dry_Fruit_Burfi_Nutrition.png?v=1741338515&width=713",
            },
        },
        {
            id: 10,
            name: "Anand Mysore Pak",
            price: 280,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/KajuKatli.png?v=1747477294&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/Kaju_Katli_BOP.png?v=1747477294&width=493",
            },
        },
        {
            id: 11,
            name: "Coconut Burfi",
            price: 260,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/Coconutburfi.png?v=1752650243&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/coco-barfi.png?v=1752650243&width=713",
            },
        },
        {
            id: 12,
            name: "California Badam Halwa",
            price: 230,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/files/BadamHalwaTinFront.jpg?v=1716457083&width=1946",
                image2: "https://www.anandsweets.in/cdn/shop/products/badamHalwa.png?v=1716457083&width=990",
            },
        },
    ];

    const randomSix = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 9);

    const updateQty = (id, amount) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + amount),
        }));
    };

       const Addtocart = ()=>{
         toast.success("Succesfully Item Add to Cart!")
    }

    return (
        <>
         <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <div className=" min-h-screen py-12">
                <h1 className='text-center text-3xl font-bold pb-5 text-[#c19b5a] '>Best Sellers</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

                    {randomSix.map((item) => (
                        <div
                            key={item.id}
                            className="p-5 rounded-xl overflow-hidden transition-all duration-300 border-1 border-[#c19b5a]"
                        >
                            <Link to={`/items/${item.id}`}>
                                <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                                    <img
                                        src={item.img.image1}
                                        alt={item.name}
                                        className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />

                                    <img
                                        src={item.img.image2}
                                        alt="Hover"
                                        className="absolute w-auto h-full object-contain opacity-1 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>

                                <h3 className="text-gray-900 font-medium mt-4 text-center">{item.name}</h3>
                                <p className="text-gray-700 text-sm font-semibold text-center">₹ {item.price}</p>
                            </Link>
                            <div className="flex place-content-center gap-3 mt-4 ">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-2">{quantity[item.id] || 1}</span>
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="bg-[#c19b5a] text-white px-6 py-3 rounded-md text-sm hover:bg-[#a48145] transition" onClick={()=>Addtocart()}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Bestseller
