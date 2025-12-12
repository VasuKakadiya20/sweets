import React, { useEffect, useState, useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { fetchDataFromApi, Deletedata } from "../../../api";
import { mycontext } from "../../App";

export default function CheckoutPage() {
  const context = useContext(mycontext);

  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    Firstname: "",
    Lastname: "",
    phonenumber: "",
    Email: "",
    Landmark: "",
    Pin_Code: "",
    City: "",
    State: "",
    password: "*******",
  });

  const userid = localStorage.getItem("username");

  useEffect(() => {
    fetchDataFromApi(`/Cart/`).then((res) => {
      setItems(res);
    });
  }, []);

  useEffect(() => {
    fetchDataFromApi(`/client/${userid}`).then((data) => {
      setForm(data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const userCartItems = items.filter((item) => item.userid === userid);
  const subtotal = userCartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
  const shippingCharge = 100;
  const total = subtotal + shippingCharge;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4 mb-6">
            Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm mb-1 block">
                First Name *
              </label>
              <input
                type="text"
                name="Firstname"
                value={form.Firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">
                Last Name *
              </label>
              <input
                type="text"
                name="Lastname"
                value={form.Lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">
                Phone Number *
              </label>
              <input
                type="text"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">
                Email *
              </label>
              <input
                type="text"
                name="Email"
                value={form.Email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-600 text-sm mb-1 block">
                Street address *
              </label>
              <input
                type="text"
                name="Landmark"
                value={form.Landmark}
                onChange={handleChange}
                placeholder="Street Address"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">Pin Code *</label>
              <input
                type="text"
                name="Pin_Code"
                value={form.Pin_Code}
                onChange={handleChange}
                placeholder="Pin Code"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">City *</label>
              <input
                type="text"
                name="City"
                value={form.City}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-1 block">State *</label>
              <input
                type="text"
                name="State"
                value={form.State}
                onChange={handleChange}
                placeholder="State"
                className="w-full px-4 py-3 rounded-full border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a] outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4 mb-6">
            Order Summary
          </h2>

          {userCartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.itemimg}
                  alt={item.producttitle}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium">{item.producttitle}</p>
                  <p className="text-sm text-gray-500">₹ {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <button
                  onClick={() => removeItem(item._id)}
                  className="text-sm text-red-500 underline"
                >
                  Remove
                </button> */}
                <p className="font-medium">Qty: {item.qty}</p>
              </div>
            </div>
          ))}

          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-bold">₹ {subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Shipping</p>
              <p className="font-bold">₹ {shippingCharge}</p>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-2">
              <p>Total</p>
              <p>₹ {total}</p>
            </div>
          </div>

          <button className="mt-6 w-full bg-[#C19B3B] text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
       process to pay
          </button>
        </div>
      </div>
    </>
  );
}