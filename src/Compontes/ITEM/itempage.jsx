import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchDataFromApi, postData } from "../../api";
import { mycontext } from "../../App";
import shape1 from "../../assets/Best_Selling.png";
import shape2 from "../../assets/Best_Selling_2.png";
import shape3 from "../../assets/Best_Selling_3.png";
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
          <img
            src={shape3}
            alt="shape"
            className="floating-shape3 float-updown hidden md:block"
          />
          <img
            src={shape3}
            alt="shape"
            className="floating-shape4 float-updown hidden md:block"
          />
          <div className="text-center mb-14">
            <div className="text-[#E09F40] font-bold tracking-widest mb-2 text-[16px]">
              MARVEL CRUNCH COLLECTION
            </div>
            <h2 className="text-[35px] font-bold text-[#713722] mb-5 leading-tight max-lg:text-[32px]">
              All Chikki Varieties Available
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

                <Link to={`/Chikki/${item._id}`}>
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
                  <span className="font-bold text-lg text-[#E09F40] group-hover:text-white price">₹ {item.price}</span>
                  <div className="mt-3 flex justify-center">
                    <div className="flex items-center gap-4 border border-gray-300 rounded-full px-6 sm:px-8 py-2.5  w-48 sm:w-56 ">

                      <button
                        className="px-3 text-xl font-bold hover:text-[#E09F40] transition add"
                        onClick={() => updateQty(item._id, -1)}
                      >
                        −
                      </button>

                      <span className="w-12 sm:w-18 text-center text-lg font-semibold add">
                        {quantity[item._id] || 1}
                      </span>

                      <button
                        className="px-3 text-xl font-bold hover:text-[#E09F40] transition add"
                        onClick={() => updateQty(item._id, 1)}
                      >
                        +
                      </button>

                    </div>
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