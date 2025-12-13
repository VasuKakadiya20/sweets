import React, { useState,useEffect,useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi, updatedata } from "../../../api";
import { FaSignOutAlt } from "react-icons/fa";
import { mycontext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Userinfocheck() {
    const [editing, setEditing] = useState(false);
    const context = useContext(mycontext)
    const Navigate = useNavigate()
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
    const id = localStorage.getItem("username")
    console.log("id",id)

    useEffect(() => {
        fetchDataFromApi(`/client/${id}`).then((data) => {
            setForm(data)
        })
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="max-w-7xl mx-auto bg-white p-10 rounded-3xl mt-10 mb-10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4">Delivery Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">First Name *</label>
                        <input
                            type="text"
                            name="Firstname"
                            value={form.Firstname}
                            onChange={handleChange}
                            placeholder="First Name"
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Last Name *</label>
                        <input
                            type="text"
                            name="Lastname"
                            value={form.Lastname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Phone Number *</label>
                        <input
                            type="text"
                            name="phonenumber"
                            value={form.phonenumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Email *</label>
                        <input
                            type="text"
                            name="Email"
                            value={form.Email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Street address *</label>
                        <input
                            type="text"
                            name="Landmark"
                            value={form.Landmark}
                            onChange={handleChange}
                            placeholder="Landmark"
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
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
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
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
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
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
                            className={`
        w-full px-4 py-3 rounded-full border bg-gray-100
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
      required
                        />
                    </div>

                </div>
            </div>
            
        </>
    );
}



