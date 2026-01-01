import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi, Deletedata, postData } from "../../api";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [items, setItems] = useState([]);
  const Navigate = useNavigate()
  const userid = localStorage.getItem("username");
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

  const removeItem = (_id) => {
    Deletedata(`/Cart/${_id}`).then((res) => {
      toast.success("Item Remove to Cart !")
      fetchDataFromApi(`/Cart/${userid}`).then((res) => {
        setItems(res)
      })
    })
  };

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

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        userid,
        Firstname: form.Firstname,
        Lastname: form.Lastname,
        Phonenumber: form.phonenumber,
        Email: form.Email,
        Landmark: form.Landmark,
        Pin_code: form.Pin_Code,
        City: form.City,
        State: form.State,
        Total: total,
        Date: new Date().toISOString().split("T")[0],
        Status: "Pending",
        Payment_method: "Card",
        items: userCartItems.map(item => ({
          productId: item.productid,
          name: item.producttitle,
          price: item.price,
          qty: item.qty,
          image: item.itemimg,
          subtotal: item.totalprice
        }))
      };

      const res = await postData("/order/create", orderData);
      toast.success("Order placed successfully!");
      await Deletedata(`/Cart/rcart/${userid}`);
      setTimeout(() => {
        Navigate("/Order")
      }, 2000)
    } catch (error) {
      console.error(error);
      toast.error("Order failed. Try again!");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 font-sans" onSubmit={placeOrder}>
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-[#713722] border-l-4 border-[#713722] pl-4 mb-6">
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100  focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100  focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100  focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100  focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-600 text-sm mb-1 block">
                Street address * {/*border-gray-300*/}
              </label>
              <input
                type="text"
                name="Landmark"
                value={form.Landmark}
                onChange={handleChange}
                placeholder="Street Address"
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100 focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100 focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100 focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
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
                required
                className="w-full px-4 py-3 rounded-md border bg-gray-100 focus:ring-2 focus:ring-[#E09F40] outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-[#713722] border-l-4 border-[#713722] pl-4 mb-6">
            Order Summary
          </h2>

          {userCartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-4 w-[50%]">
                <img
                  src={item.itemimg}
                  alt={item.producttitle}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium">{item.producttitle}</p>
                  <p className="text-sm text-gray-500">₹ {item.price}</p>
                  <button onClick={() => removeItem(item._id)} className="text-sm underline">Remove</button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">Qty: {item.qty}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-medium">₹ {item.totalprice}</p>
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

          <button className="mt-6 py-3 rounded-md font-semibold cart-btn" type="Submit" >
            process to pay
          </button>
        </div>
      </form>
    </>
  );
}