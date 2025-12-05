import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function UserProfile() {
    const [editing, setEditing] = useState(false);

    const [form, setForm] = useState({
        firstName: "test",
        lastName: "test",
        phone: "9876543210",
        email: "test@example.com",
        landmark: "Near City Mall",
        pincode: "380001",
        city: "Ahmedabad",
        state: "Gujarat",
        password: "test1234",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setEditing(false);
        toast.success("Profile Updated Successfully!");
    };

    const handleCancel = () => {
        setEditing(false);
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-3xl mt-10 mb-10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-[#c19b5a] border-l-4 border-[#c19b5a] pl-4">Your Profile</h2>

                    {!editing && (
                        <button
                            onClick={() => setEditing(true)}
                            className="px-5 py-2 bg-[#c19b5a] text-white rounded-full hover:bg-[#b28e4f]"
                        >
                            Edit
                        </button>
                    )}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">First Name</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Last Name</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Phone Number</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Email</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Landmark</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="landmark"
                            value={form.landmark}
                            onChange={handleChange}
                            placeholder="Landmark"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Pin Code</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="pincode"
                            value={form.pincode}
                            onChange={handleChange}
                            placeholder="Pin Code"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">City</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="City"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">State</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="State"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-gray-600 text-sm mb-1 block">Password</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="password"
                            value={editing ? form.password : "******"}
                            onChange={handleChange}
                            className={`
                            w-full px-4 py-3 rounded-full border 
                            ${editing ? "bg-white" : "bg-gray-100"} 
                            border-gray-300 text-gray-700
                            focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
                            outline-none transition-all duration-200
                        `}
                        />
                    </div>

                    {editing && (
                        <div className="flex gap-4 md:col-span-2 justify-center mt-4 ml-[50%]">
                            <button
                                onClick={handleSave}
                                className="px-8 py-3 bg-[#c19b5a] text-white rounded-full hover:bg-[#b28e4f]"
                            >
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="px-8 py-3 border-1 border-[#c19b5a] text-[#c19b5a] rounded-full "
                            >
                                Cancel{/*hover:bg-[#c19b5a] hover:text-white */}
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
