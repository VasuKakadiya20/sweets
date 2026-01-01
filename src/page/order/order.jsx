import React from 'react'
import { fetchDataFromApi } from "../../api";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';

function ALLOrderlist() {
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
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#713722] border-l-4 border-[#713722] pl-3">
            My Orders
          </h2>
          <div className="space-y-5">
            {order.sort((a, b) => new Date(b.OrderID) - new Date(a.OrderID)).map((item) => (

              <div key={item._id} className="bg-white rounded-2xl shadow-md border p-5">
                <div className="flex justify-between">
                  <p className="font-bold">
                    Order Id : <span className="font-semibold text-gray-600 text-sm">{item.OrderID}</span>
                  </p>

                  <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 font-semibold">
                    {item.Status || "pending"}
                  </span>
                </div>

                <div className="mt-2 text-sm flex justify-between">
                  <p className="font-bold">Date : <span className="font-semibold text-gray-600">{item.Date}</span></p>
                  <p className="font-bold">Payment Method : <span className="font-semibold text-gray-600">{item.Payment_method}</span> </p>
                  <p className="font-bold">Total : <span className="font-semibold text-gray-600">₹ {item.Total}</span></p>
                </div>

                <div className="text-right mt-3">
                  <button
                    className="theme-btn ml-2"
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
            <p className='font-bold'>Order Details : <span className="font-semibold text-md text-gray-600">{selectedOrder?.OrderID}</span></p>
            <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 font-semibold">{selectedOrder?.Status}</span>
          </div>
        </DialogTitle>

        <DialogContent dividers>

          <div className="flex justify-between">
            {/* <p><b>Status :</b> <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700">{selectedOrder?.Status}</span></p> */}
            <p><b>Date :</b> {selectedOrder?.Date}</p>
            <p><b>Payment Method :</b> {selectedOrder?.Payment_method || "UPI"}</p>
          </div>

          <Divider sx={{ my: 2 }} />

          <h4 className="font-bold mb-2">Shipping Address</h4>
          <p>{selectedOrder?.Firstname} {selectedOrder?.Lastname}</p>
          <p>{selectedOrder?.Landmark}</p>
          <p>{selectedOrder?.City}, {selectedOrder?.State} — {selectedOrder?.Pin_code}</p>
          <p>Phone : {selectedOrder?.Phonenumber}</p>

          <Divider sx={{ my: 2 }} />

          <h4 className="font-bold mb-2">Order Items</h4>

          <div className="space-y-4">
            {selectedOrder?.items?.map((p) => (
              <div key={p.productId} className="flex justify-between mb-2">
                <div className="flex gap-3">
                  <img src={p.image} className="w-15 h-15 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-gray-500">Qty: {p.qty}</p>
                  </div>
                </div>
                <p className="font-semibold">₹ {p.subtotal}</p>
              </div>
            ))}
          </div>
          <p className="text-end font-bold">shipping Charge : ₹ {selectedOrder?.shipping_Charge}</p>
          <p className="mt-2 text-end font-bold">Total : ₹ {selectedOrder?.Total}</p>

        </DialogContent>

        <DialogActions>
          <button className='theme-btn ml-2' onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ALLOrderlist