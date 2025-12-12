import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Deletedata, fetchDataFromApi, updatedata } from "../../../api";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const CartPage = () => {
  const [items, setItems] = useState([]);

  const userid = localStorage.getItem('username')
  useEffect(() => {
    fetchDataFromApi(`/Cart/`).then((res) => {
      console.log("this is a cart data:-", res)
      setItems(res)
    })
  }, [])

  const updateQty = async (_id, type) => {
    const updatedItems = items.map((item) =>
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
    setItems(updatedItems);
    const updatedItem = updatedItems.find((i) => i._id === _id);
    try {
      const updatecart = {
        qty: updatedItem.qty,
        price: updatedItem.price,
        totalprice: updatedItem.qty * updatedItem.price,
      }
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
      fetchDataFromApi(`/Cart/${userid}`).then((res) => {
        console.log("this is a cart data:-", res)
        setItems(res)
      })
    })
  };

  const userCartItems = items.filter(item => item.userid === userid);

  const subtotal = userCartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
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
              <div className="flex items-center gap-4 border px-4 py-2 rounded-md bg-gray-100">
                <button
                  className="text-gray-700"
                  onClick={() => updateQty(item._id, "dec")}
                >
                  <FaMinus size={12} />
                </button>
                <span>{item.qty}</span>
                <button
                  className="text-gray-700"
                  onClick={() => updateQty(item._id, "inc")}
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
            <Link to='/checkout'>
              <button className="mt-6 bg-[#C19B3B] text-white w-full py-3 rounded-full font-semibold transition hover:opacity-90">
                CHECK OUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
