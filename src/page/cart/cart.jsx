// import React from 'react'

// function Cart() {
//   return (
//   <>
//     <div>
//       <h1 className='font-bold text-3xl text-center mt-5 mb-5'>Cart page</h1>
//     </div>
//     </>
//   )
// }

// export default Cart
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Special Doodh Peda",
      price: 260,
      qty: 2,
      img: {
        image1: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png",
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

  const updateQty = (id, type) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
            ...item,
            qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
          }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="hidden md:grid grid-cols-4 font-medium text-gray-600 pb-4 border-b">
        <p>Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-2 md:grid-cols-4 py-6 border-b gap-4 md:items-center"
        >
          <div className="flex gap-4 items-start">
            <img
              src={item.img.image1}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <button
                onClick={() => removeItem(item.id)}
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
            <div className="flex items-center gap-4 border px-4 py-2 rounded-md bg-gray-100">
              <button
                className="text-gray-700"
                onClick={() => updateQty(item.id, "dec")}
              >
                <FaMinus size={12} />
              </button>
              <span>{item.qty}</span>
              <button
                className="text-gray-700"
                onClick={() => updateQty(item.id, "inc")}
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          <p className="font-medium text-gray-800 md:text-right">
            ₹ {item.qty * item.price}
          </p>
        </div>
      ))}

      <div className="mt-10 w-full flex justify-end">
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-800">Subtotal</p>
            <p className="text-lg font-semibold text-gray-800">₹ {subtotal}</p>
          </div>

          <p className="text-sm text-gray-500 mt-1 font-bold">
            Tax included. Shipping calculated at checkout.
          </p>

          <button className="mt-6 bg-[#C19B3B] text-white w-full py-3 rounded-md font-semibold transition hover:opacity-90">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
