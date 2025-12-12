import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Deletedata, fetchDataFromApi, updatedata } from "../../../api";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

function Checkoutitem() {
    const [items, setItems] = useState([]);

    const userid = localStorage.getItem('username')
    useEffect(() => {
        fetchDataFromApi(`/Cart/`).then((res) => {
            console.log("this is a cart data:-", res)
            setItems(res)
        })
    }, [])


    const removeItem = (_id) => {
        Deletedata(`/Cart/${_id}`).then((res) => {
            toast.success("Item Remove to Cart !")
            fetchDataFromApi(`/Cart/${id}`).then((res) => {
                console.log("this is a cart data:-", res)
                setItems(res)
            })
        })
    };

    const userCartItems = items.filter(item => item.userid === userid);
    const subtotal = userCartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    const shippingCharge = 100;
    const total = subtotal + shippingCharge;


    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
                <h2 className="text-2xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4 mb-4">Order Summary</h2>
                <div className="hidden md:grid grid-cols-4 font-medium text-gray-600 pb-4 border-b">
                    <p>Product</p>
                    <p className="text-center">Price</p>
                    <p className="text-center">Quantity</p>
                    <p className="text-right">Total</p>
                </div>

                {userCartItems.map((item) => (
                    <div
                        key={item._id}
                        className="grid grid-cols-2 md:grid-cols-4 py-6 border-b gap-4 md:items-center"
                    >
                        <div className="flex gap-4 items-start">
                            <Link to={`/items/${item.itemid}`}>
                                <img
                                    src={item.itemimg}
                                    alt={item.producttitle}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </Link>
                            <div>
                                <p className="font-medium">{item.producttitle}</p>
                                <button
                                    onClick={() => removeItem(item._id)}
                                    className="text-sm underline mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-700 font-medium md:text-center">
                            ₹ {item.price}
                        </p>

                        <div className="flex justify-start md:justify-center">
                            <div className="flex items-center gap-4 px-4 py-2 rounded-md bg-gray-100">
                                <span>{item.qty}</span>
                            </div>
                        </div>

                        <p className="font-medium text-gray-800 md:text-right">
                            ₹ {item.qty * item.price}
                        </p>
                    </div>
                ))}


                {/* <div className="mt-6 border-t pt-4">
                    <p className="text-lg font-semibold text-gray-800 mb-3">Shipping</p>

                    <div className="space-y-3 text-gray-700">

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="shipping"
                                value="free"
                                checked={shipping === "free"}
                                onChange={(e) => setShipping(e.target.value)}
                                className="accent-[#c19b5a]"
                            />
                            Free Shipping (₹0)
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="shipping"
                                value="local"
                                checked={shipping === "local"}
                                onChange={(e) => setShipping(e.target.value)}
                                className="accent-[#c19b5a]"
                            />
                            Local Pickup (₹0)
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="shipping"
                                value="flat"
                                checked={shipping === "flat"}
                                onChange={(e) => setShipping(e.target.value)}
                                className="accent-[#c19b5a]"
                            />
                            Flat Rate (₹10)
                        </label>

                    </div>
                </div> */}

                <div className="mt-10 w-full flex justify-end">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-between">
                            <p className="text-base font-semibold text-gray-500">Subtotal</p>
                            <p className="text-lg font-bold text-gray-800">₹ {subtotal}</p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <p className="text-base font-semibold text-gray-500">Shipping Charge</p>
                            <p className="text-lg font-bold text-gray-800">₹ {shippingCharge}</p>
                        </div>


                        <div className="flex items-center justify-between mt-3 border-t pt-3">
                            <p className="text-xl font-bold text-gray-900">Total</p>
                            <p className="text-xl font-bold text-gray-900">₹ {total}</p>
                        </div>

                        <p className="text-sm text-gray-500 mt-1 font-bold">
                            Tax included. Shipping calculated at checkout.
                        </p>

                        <button className="mt-6 bg-[#C19B3B] text-white w-full py-3 rounded-full font-semibold transition hover:opacity-90">
                            process to pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkoutitem
