import React, { useState } from 'react'
import cartsvg from '../../assets/cart.svg'
import { Link } from 'react-router-dom';

function Cartsidebar({ opensidebar, setopensidebar, }) {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Special Doodh Peda",
            price: 260,
            qty: 2,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713",
                image2: "https://www.anandsweets.in/cdn/shop/files/Doodh_Peda_FOP.jpg?v=1740398099&width=493",
                image3: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713",
            },
        },
        {
            id: 3,
            name: "Anand Mysore Pak",
            price: 280,
            qty: 1,
            img: {
                image1: "https://www.anandsweets.in/cdn/shop/products/KajuKatli.png?v=1747477294&width=493",
                image2: "https://www.anandsweets.in/cdn/shop/files/Kaju_Katli_BOP.png?v=1747477294&width=493",
            },
        },
    ]);

    const updateQty = (id, qty) => {
        if (qty < 1) return;
        setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(i => i.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            {opensidebar && (
                <>
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        onClick={() => setopensidebar(false)}
                    />

                    <div className="fixed top-0 right-0 w-[380px] h-full bg-white shadow-xl z-50 flex flex-col">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold">Shopping Cart</h2>
                            <button
                                className="text-xl font-bold"
                                onClick={() => setopensidebar(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">

                            {cartItems.length === 0 ? (
                                <div className="text-gray-700 text-sm">
                                    <p className='font-bold mb-2'>Your cart is currently empty.</p>
                                </div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div key={index} className="mb-6 flex gap-4">
                                        <img src={item.img.image1} alt={item.name} className="w-20 h-20 border" />
                                        <div className="flex flex-col flex-1">
                                            <h3 className="font-semibold text-sm">{item.name}</h3>
                                            <p className="text-xs text-gray-500">Weight: {item.weight}</p>
                                            <p className="text-sm font-semibold mt-1">₹ {item.price}</p>

                                            <div className="flex items-center gap-3 mt-2">
                                                <button
                                                    onClick={() => updateQty(item.id, item.qty - 1)}
                                                    className="border px-2"
                                                >−</button>

                                                <span>{item.qty}</span>

                                                <button
                                                    onClick={() => updateQty(item.id, item.qty + 1)}
                                                    className="border px-2"
                                                >+</button>

                                                <button
                                                    className="text-xs underline ml-3"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            )}
                            <div className="flex items-center gap-2 text-xs mt-2">
                                <img src={cartsvg} alt="delivery" className="w-4" />
                                <span>Delivered fresh in 2–3 days</span>
                            </div>

                        </div>

                        {cartItems.length !== 0 && (
                            <div className="border-t p-6 bg-white">
                                <div className="flex justify-between text-sm font-bold mb-4">
                                    <span>Subtotal</span>
                                    <span>₹ {subtotal}</span>
                                </div>

                                <button className="w-full py-3 bg-[#c19b5a] text-white rounded-md font-medium">
                                    Check out
                                </button>

                                <Link to="/cart"><button className="w-full text-sm underline mt-2" onClick={() => setopensidebar(false)}>
                                    View Cart
                                </button>
                                </Link>
                            </div>
                        )}

                    </div>
                </>
            )}
        </>
    )
}

export default Cartsidebar
