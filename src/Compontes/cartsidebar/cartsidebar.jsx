import React, { useEffect, useState } from 'react'
import cartsvg from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { Deletedata, fetchDataFromApi, updatedata } from '../../../api';
import toast, { Toaster } from 'react-hot-toast';

function Cartsidebar({ opensidebar, setopensidebar, }) {
    const [cartItems, setCartItems] = useState([]);
    const userid = localStorage.getItem('username')
    useEffect(() => {
        fetchDataFromApi(`/Cart/`).then((res) => {
            // console.log("this is a cart data:-", res)
            setCartItems(res)
        })
    }, [])

    const updateQty = async (_id, type) => {
        const updatedItems = cartItems.map((item) =>
            item._id === _id
                ? {
                    ...item,
                    qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
                    totalprice:
                        (type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1)) *
                        item.price,
                }
                : item
        );

        setCartItems(updatedItems);

        const updatedItem = updatedItems.find((i) => i._id === _id);

        try {
            const updatecart = {
                qty: updatedItem.qty,
                price: updatedItem.price,
                totalprice: updatedItem.qty * updatedItem.price,
            };

            await updatedata(`/Cart/${_id}`, updatecart);
            toast.success("Quantity updated!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update quantity");
        }
    };

    const removeItem = (_id) => {
        Deletedata(`/Cart/${_id}`).then((res) => {
            toast.success("Item Remove to Cart !")
            fetchDataFromApi(`/Cart/${id}`).then((res) => {
                console.log("this is a cart data:-", res)
                setCartItems(res)
            })
        })
    };

    const userCartItems = cartItems.filter(item => item.userid === userid);


    const subtotal = userCartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
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

                            {userCartItems.length === 0 ? (
                                <div className="text-gray-700 text-sm">
                                    <p className='font-bold mb-2'>Your cart is currently empty.</p>
                                </div>
                            ) : (
                                userCartItems.map((item, index) => (
                                    <div key={index} className="mb-6 flex gap-4">
                                        <Link to={`/items/${item.itemid}`}>
                                            <img src={item.itemimg} alt={item.producttitle} className="w-20 h-20 border" />
                                        </Link>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="font-semibold text-sm">{item.producttitle}</h3>
                                            <p className="text-sm font-semibold mt-1">₹ {item.price}</p>

                                            <div className="flex items-center gap-3 mt-2">
                                                <button
                                                    onClick={() => updateQty(item._id, "dec")}
                                                    className="border px-2"
                                                >−</button>

                                                <span>{item.qty}</span>

                                                <button
                                                    onClick={() => updateQty(item._id, "inc")}
                                                    className="border px-2"
                                                >+</button>

                                                <button
                                                    className="text-xs underline ml-3"
                                                    onClick={() => removeItem(item._id)}
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

                        {userCartItems.length !== 0 && (
                            <div className="border-t p-6 bg-white">
                                <div className="flex justify-between text-sm font-bold mb-4">
                                    <span>Subtotal</span>
                                    <span>₹ {subtotal}</span>
                                </div>
                                <Link to="/checkoutsecond">
                                    <button className="w-full py-3 bg-[#c19b5a] text-white rounded-md font-medium" onClick={() => setopensidebar(false)}>
                                        Check out
                                    </button>
                                </Link>

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
