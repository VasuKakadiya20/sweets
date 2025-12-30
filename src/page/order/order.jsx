// import React from 'react'
// import { fetchDataFromApi } from '../../api';
// import { useState } from 'react';
// import { useEffect } from 'react';

// function AllOrderList() {
//   const userid = localStorage.getItem("username");
//   const [order, setorder] = useState([])
//   useEffect(() => {
//     fetchDataFromApi(`/order/User/${userid}`).then((res) => {
//       setorder(res)
//       console.log("this is order", res)
//     })
//   }, [])
//   return (
//     <>
//       <div className="contact-banner slideUp">
//         <div className="overlay"></div>
//         <div className="wave-top"></div>
//         <div className="content">
//           <h1>My orders</h1>

//           <div className="breadcrumb">
//             <a href="/" className="text-[#E09F40] font-bold text-sm">Home</a>
//             <span className='font-bold text-sm text-white'>//</span>
//             <span className='font-bold text-sm text-white'>MY ORDERS</span>
//           </div>
//         </div>
//       </div>

//       <div className='bg-[#F4F1EA]'>
//         <div className="max-w-5xl mx-auto p-6 font-sans ">
//           <h2 className="text-2xl font-bold mb-6 text-[#713722] border-l-4 border-[#713722] pl-3">
//             My Orders
//           </h2>

//           {order.length === 0 ? (
//             <p className="text-gray-500 text-center">No past orders found.</p>
//           ) : (
//             <div className="space-y-5">
//               {
//                 order.sort((a, b) => new Date(b.Date) - new Date(a.Date)).map((item) => (
//                   <div
//                     key={item._id}
//                     className="bg-white rounded-2xl shadow-md border p-5"
//                   >

//                     <div className="flex justify-between items-center">
//                       <p className="font-semibold">
//                         Order ID : <span className="text-gray-600">{item.OrderID}</span>
//                       </p>

//                       <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700">
//                         {item.Status || "pending"}
//                       </span>
//                     </div>

//                      <div className="mt-2 flex justify-between text-sm text-gray-600">
//                       <p>Date : {item.Date}</p>
//                       <p>Payment Method : <span className="font-bold text-black">{item.Payment_method || "UPI"}</span></p>
//                       <p>Total : <span className="font-bold text-black">₹ {item.Total}</span></p>
//                     </div>

//                      {/* <div className='mt-2 flex justify-end text-sm text-gray-600'>
//                       <p>Shpping Charge : <span className='font-bold text-black'>₹ 100</span></p>
//                     </div> */}

//                     <hr className="my-3" />

//                     <div className="space-y-4">
//                       {item.items?.map((item) => (
//                         <div
//                           key={item.productId}
//                           className="flex justify-between items-center"
//                         >
//                           <div className="flex items-center gap-3">
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="w-20 h-20 rounded-full object-cover"
//                             />
//                             <div>
//                               <p className="font-medium">{item.name}</p>
//                               <p className="text-sm text-gray-500">
//                                 Qty: {item.qty}
//                               </p>
//                             </div>
//                           </div>

//                           <p className="font-semibold">₹ {item.subtotal}</p>
//                         </div>
//                       ))}
//                     </div>
//                     {/* <hr className="my-3" />

//                     <div className='mt-2 flex justify-end text-sm text-gray-600'>
//                       <p>Shpping Charge : <span className='font-bold text-black'>₹ 100</span></p>
//                     </div>

//                   <div className="mt-2 flex justify-between text-sm text-gray-600">
//                       <p>Date : {item.Date}</p>
//                       <p>Payment Method : <span className="font-bold text-black">{item.Payment_method || "UPI"}</span></p>
//                       <p>Total : <span className="font-bold text-black">₹ {item.Total}</span></p>
//                     </div> 

//                      <div className="flex justify-between items-center mt-2">
//                       <p className="font-semibold">
//                         Order ID : <span className="text-gray-600">{item.OrderID}</span>
//                       </p>

//                       <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700">
//                         {item.Status || "pending"}
//                       </span>
//                     </div> */}
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllOrderList

import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../api";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider
} from "@mui/material";

function AllOrderList() {

  const userid = localStorage.getItem("username");
  const [order, setOrder] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchDataFromApi(`/order/User/${userid}`).then((res) => {
      setOrder(res);
    });
  }, []);

  const handleOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

  return (
    <>
      <div className="contact-banner slideUp">
        <div className="overlay"></div>
        <div className="wave-top"></div>
        <div className="content">
          <h1>My Orders</h1>

          <div className="breadcrumb">
            <a href="/" className="text-[#E09F40] font-bold text-sm">Home</a>
            <span className='font-bold text-sm text-white'>//</span>
            <span className='font-bold text-sm text-white'>My Orders</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#713722] border-l-4 border-[#713722] pl-3">
            My Orders
          </h2>

          <div className="space-y-5">
            {order
              .sort((a, b) => new Date(b.OrderID) - new Date(a.OrderID))
              .map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md border p-4 sm:p-5"
                >
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="font-bold text-sm sm:text-base">
                      Order Id :
                      <span className="font-semibold text-gray-600 ml-1">
                        {item.OrderID}
                      </span>
                    </p>

                    <span className="px-3 py-1 text-xs sm:text-sm rounded-lg bg-green-100 text-green-700 font-semibold self-start sm:self-auto">
                      {item.Status || "Pending"}
                    </span>
                  </div>

                  {/* Order Meta */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <p className="font-bold">
                      Date :
                      <span className="font-semibold text-gray-600 ml-1">
                        {item.Date}
                      </span>
                    </p>

                    <p className="font-bold">
                      Payment :
                      <span className="font-semibold text-gray-600 ml-1">
                        {item.Payment_method}
                      </span>
                    </p>

                    <p className="font-bold">
                      Total :
                      <span className="font-semibold text-gray-600 ml-1">
                        ₹ {item.Total}
                      </span>
                    </p>
                  </div>

                  {/* Button */}
                  <div className="text-right mt-4">
                    <button
                      className="theme-btn w-full sm:w-auto"
                      onClick={() => handleOpen(item)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>


      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between text-[18px]">
            <p>Order Details : <span className="text-md text-gray-600">{selectedOrder?.OrderID}</span></p>
            <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 font-semibold">{selectedOrder?.Status}</span>
          </div>
        </DialogTitle>

        <DialogContent dividers className="space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <p><b>Date :</b> {selectedOrder?.Date}</p>
            <p><b>Payment :</b> {selectedOrder?.Payment_method || "UPI"}</p>
          </div>

          <Divider />

          <h4 className="font-bold text-base">Shipping Address</h4>

          <div className="text-sm space-y-1">
            <p>{selectedOrder?.Firstname} {selectedOrder?.Lastname}</p>
            <p>{selectedOrder?.Landmark}</p>
            <p>{selectedOrder?.City}, {selectedOrder?.State} — {selectedOrder?.Pin_code}</p>
            <p>Phone : {selectedOrder?.Phonenumber}</p>
          </div>

          <Divider />

          <h4 className="font-bold text-base">Items</h4>

          <div className="space-y-3">
            {selectedOrder?.items?.map((p) => (
              <div
                key={p.productId}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.image}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-gray-500">Qty: {p.qty}</p>
                  </div>
                </div>

                <p className="font-semibold">₹ {p.subtotal}</p>
              </div>
            ))}
          </div>

          <p className="text-right font-semibold text-sm">
            Shipping Charge : ₹ 100
          </p>

          <p className="text-right font-bold text-base">
            Total : ₹ {selectedOrder?.Total}
          </p>
        </DialogContent>


        <DialogActions>
          <button className="theme-btn" onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>

    </>
  );
}

export default AllOrderList;
