import React, { useContext, useEffect, useMemo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { fetchDataFromApi, postData } from '../../api';
import { mycontext } from '../../App';


function Relatedproduct() {
    const [quantity, setQuantity] = useState({});
    const [product, setproduct] = useState([])
    const context = useContext(mycontext)

    useEffect(() => {
        fetchDataFromApi("/Item/").then((res) => {
            setproduct(res)
        })
    }, [])

    const randomSix = useMemo(() => {
        if (!product || product.length === 0) return [];
        return [...product].sort(() => Math.random() - 0.5).slice(0, 3);
    }, [product]);

    const updateQty = (_id, amount) => {
        setQuantity((prev) => ({
            ...prev,
            [_id]: Math.max(1, (prev[_id] || 1) + amount),
        }));
    };

    const Addtocart = async (item) => {
        if (context.islogin === true) {
            try {
                const userid = localStorage.getItem("username");
                const qty = quantity[item._id] || 1;
                const cartData = {
                    userid: userid,
                    itemid: item._id,
                    qty: qty,
                    producttitle: item.itemtitle,
                    price: item.price,
                    totalprice: item.price * qty,
                    itemimg: item.images[0]
                };

                await postData("/Cart/create", cartData);
                toast.success("Successfully added to cart!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to add to cart!");
            }
        } else {
            toast.error("Please login to add items to cart!");
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {/* <div className="py-12">
              
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                    {randomSix.map((item) => (
                        <div
                            key={item._id}
                            className="p-5 rounded-xl overflow-hidden transition-all duration-300 border-1 border-[#c19b5a]"
                        >
                            <Link to={`/items/${item._id}`}>
                                <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />
                                    <img
                                        src={item.images[1]}
                                        alt="Hover"
                                        className="absolute w-auto h-full object-contain opacity-1 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>
                                <h3 className="text-gray-900 font-medium mt-4 text-center">{item.itemtitle}</h3>
                                <p className="text-gray-700 text-sm font-semibold text-center">₹ {item.price}</p>
                            </Link>
                            <div className="flex place-content-center gap-3 mt-4 ">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item._id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-2">{quantity[item._id] || 1}</span>
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item._id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="bg-[#c19b5a] text-white px-6 py-3 rounded-md text-sm hover:bg-[#a48145] transition"
                                onClick={() => Addtocart(item)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

               <div className="py-16 bg-[#faf9f7]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4 mb-10"> Our Products </h1>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                        {randomSix.map((item) => (
                            <div
                                key={item._id}
                                className="py-4 rounded-xl overflow-hidden transition-all duration-300 border-1 border-[#c19b5a]">
                                <Link to={`/items/${item._id}`}>
                                    <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                                        <img
                                            src={item.images[0]}
                                            alt={item.itemtitle}
                                            className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                                        <img
                                            src={item.images[1]}
                                            alt={item.itemtitle}
                                            className="absolute w-auto h-full object-contain opacity-1 transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                    </div>
                                    <h3 className="text-gray-900 font-medium mt-4 text-center">{item.itemtitle}</h3>
                                    <p className="text-gray-700 text-sm font-semibold text-center">₹ {item.price}</p>
                                </Link>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
                                    <div className="flex items-center border-1 border-gray-300 rounded-full">
                                        <button
                                            className="px-3 py-2 text-lg"
                                            onClick={() => updateQty(item._id, -1)}
                                        >
                                            −
                                        </button>
                                        <span className="px-4 py-2">{quantity[item._id] || 1}</span>
                                        <button
                                            className="px-3 py-2 text-lg"
                                            onClick={() => updateQty(item._id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="bg-[#c19b5a] text-white px-6 py-3 rounded-full text-sm hover:bg-[#a48145] transition"
                                        onClick={() => Addtocart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
        </>
    )
}

export default Relatedproduct
