import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchDataFromApi, postData } from "../../api";
import { mycontext } from "../../App";
import shape1 from "../../assets/Best_Selling.png";
import shape2 from "../../assets/Best_Selling_2.png";
import { FaShoppingBag } from "react-icons/fa";

export default function ProductPage() {
    const [quantity, setQuantity] = useState({});
    const [product, setproduct] = useState([])
    const context = useContext(mycontext)

    useEffect(() => {
        fetchDataFromApi("/Item/").then((res) => {
            setproduct(res)

        })
    }, [])

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

            {/* <div className=" min-h-screen py-12 slideUp">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                    {product.map((item) => (
                        <div
                            key={item._id}
                            className="p-5 rounded-xl overflow-hidden transition-all duration-300 border-1 border-[#c19b5a]"
                        >
                            <Link to={`/items/${item._id}`}>
                                <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                                    <img
                                        src={item.images[0]}
                                        alt={item.itemtitle}
                                        className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />
                                    <img
                                        src={item.images[1]}
                                        alt={item.itemtitle}
                                        className="absolute w-auto h-full object-contain opacity-1 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>
                                <h3 className="text-gray-900 font-medium mt-4 text-center">{item.itemtitle}</h3>
                                <p className="text-gray-700 text-sm font-semibold text-center">₹ {item.price}</p>
                            </Link>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-4">
                                <div className="flex items-center border border-gray-300 rounded-full">
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
                                <button
                                    className="bg-[#c19b5a] text-white px-6 py-3 rounded-full text-sm hover:bg-[#a48145] transition"
                                    onClick={() => Addtocart(item)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

              <section className="bg-[#F4F1EA] py-24 relative">
                    <div className="max-w-8xl mx-auto px-6">
                      <img
                        src={shape1}
                        alt="shape"
                        className="floating-shape float-updown hidden md:block"
                      />
                      <img
                        src={shape2}
                        alt="shape"
                        className="floating-shape2 float-updown hidden md:block"
                      />
                      <div className="text-center mb-14">
                        <div className="text-[#E09F40] font-bold tracking-widest mb-2 text-[16px]">
                          POPULAR DISHES
                        </div>
                        <h2 className="text-[40px] font-bold text-[#713722] mb-5 leading-tight max-lg:text-[32px]">
                          Our Most Popular Dishes
                        </h2>
                      </div>
            
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 ">
                        {product.map((item, i) => (
                          <div className="relative rounded-2xl overflow-hidden sellingcar pt-4">
                            <button
                              onClick={() => Addtocart(item)}
                              className="add-to-cart-btn"
                            >
                              <FaShoppingBag />
                            </button>
                            
                              <Link to={`/items/${item._id}`}>
                            <div className="relative z-20 p-6 flex justify-center">
                              <img
                                src={item.images[0]}
                                alt={item.title}
                                className="product-img"
                              />
                            </div>
                             </Link>
            
                            <div className="relative z-20 text-center pb-6 px-4">
                              <h3 className="text-lg font-bold mb-1 text-[#713722] group-hover:text-white">{item.itemtitle}</h3>
                              <span className="font-bold text-lg text-[#E09F40] ">₹ {item.price}</span>
                              {/* <div className="flex items-center border-1 border-gray-300 rounded-full px-4 text-center">
                                <button
                                  className="px-3 py-2 text-lg hover:text-[#E09F40] transition-colors add"
                                  onClick={() => updateQty(item._id, -1)}
                                >
                                  − 
                                </button>
                                <span className="px-4 py-2">{quantity[item._id] || 1}</span>
                                <button
                                  className="px-3 py-2 text-lg hover:text-[#E09F40] transition-colors add"
                                  onClick={() => updateQty(item._id, 1)}
                                >
                                  +
                                </button>
                              </div> */}
                              <div
  className="
    mt-4
    mx-auto
    flex
    items-center
    justify-between
    w-full
    max-w-[220px]
    sm:max-w-[260px]
    border
    border-gray-300
    rounded-full
    px-4
    py-2
    text-center
  "
>
  <button
    className="
      w-8 h-8
      flex items-center justify-center
      text-lg
      text-gray-700
      hover:text-[#E09F40]
      transition-colors
      add
    "
    onClick={() => updateQty(item._id, -1)}
  >
    −
  </button>

  <span
    className="
      min-w-[32px]
      text-center
      font-semibold
      text-gray-800
      text-sm
      sm:text-base
    "
  >
    {quantity[item._id] || 1}
  </span>

  <button
    className="
      w-8 h-8
      flex items-center justify-center
      text-lg
      text-gray-700
      hover:text-[#E09F40]
      transition-colors
      add
    "
    onClick={() => updateQty(item._id, 1)}
  >
    +
  </button>
</div>

                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
        </>
    );
}
