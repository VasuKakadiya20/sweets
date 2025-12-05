import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Addreviewfrom from "./addreviewfrom";


function Reviewsection() {

  const [rating, setRating] = useState(0);
  const [showfrom, setshowfrom] = useState(false)
  const [clientreview, setclientreview] = useState([
    {
      id: 1,
      rating: 3,
      date: "11/21/2025",
      name: "Jayapal Kandala",
      title: "Special Boondi Laddu",
      message: "Fresh and Excellent taste"
    },
    {
      id: 2,
      rating: 3.5,
      date: "11/24/2025",
      name: "Prakhar Singh",
      title: "GOOD",
      message: "Very Good"
    },
    {
      id: 3,
      rating: 1.5,
      date: "11/19/2025",
      name: "SHAILESH",
      title: "Mysore Pak",
      message: "It was delicious."
    },
    {
      id: 4,
      rating: 4.5,
      date: "11/06/2025",
      name: "Anita Deane",
      title: "Anand Mysore pak",
      message: "It was delicious."
    },
    {
      id:5,
      rating:1,
      date:"12/04/2025",
      name:"Hitesh Nimavat",
      title:"Not good",
      message:"The packing was not good at retail store we got steel box inside which the small square cubes of sweets were wrapped in polythene bags but I received through Courrier was a plastic box and all sweets was melted and had become one big square due to heat all the square cubes were melted I am not happy with the packing of the parcel very much disappointed"
    }
  ])

  const totalReviews = clientreview.length;
  const avgRating =
    clientreview.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  const starCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };


  clientreview.forEach((r) => {
    const rounded = Math.ceil(r.rating);
    starCounts[rounded] += 1;
  });


  const starData = [5, 4, 3, 2, 1].map((star) => {
    const count = starCounts[star];
    const percent = totalReviews ? (count / totalReviews) * 100 : 0;

    return { star, count, percent: Math.round(percent) };
  });

  return (
    <>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

        <div className="flex flex-col md:flex-row md:items-start gap-20 border-b pb-6">

          <div>
            <div className="flex items-center gap-1 text-yellow-500 text-xl">
              <Rating value={avgRating} precision={0.5} readOnly />
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Based on <span className="font-semibold">{totalReviews} Reviews</span>
            </p>
          </div>

          <div className="w-full max-w-sm">
            {starData.map((item) => (
              <div key={item.star} className="flex items-center mb-2">
                <div className="text-yellow-500 mr-2 text-sm">
                  {"★".repeat(item.star)}
                </div>

                <div className="relative w-44 h-2 bg-gray-200 rounded mr-3">
                  <div
                    className="absolute h-2 bg-yellow-400 rounded"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-700">{item.count}</p>
              </div>
            ))}
          </div>

          <div className="">
            {
              !showfrom && (
                <button className="px-4 py-2 rounded hover:bg-[#c19b5a] hover:text-white border-2 border-[#c19b5a]" onClick={() => { setshowfrom(true) }}>
                  Write a review 
                </button>
              )
            }
            {
              showfrom && (
                <button className="px-4 py-2 rounded hover:bg-[#c19b5a] hover:text-white border-2 border-[#c19b5a]" onClick={() => { setshowfrom(false) }}>
                  Cancel Review
                </button>
              )
            }
          </div>

        </div>
        <Addreviewfrom showfrom={showfrom} setshowfrom={setshowfrom} />

        <div className="space-y-10 mt-3">
          {clientreview.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
            <div className="border-b pb-6" key={item.id}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold"> {item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Rating name="read-only" value={item.rating} readOnly />
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      Verified
                    </span>
                    <p className="font-medium">{item.name}</p>
                  </div>
                </div>
              </div>


              <p className="mt-3 font-medium">{item.title}</p>
              <p className="text-gray-700 text-sm mt-1">{item.message}</p>
            </div>
          ))
          }
        </div>

      </div>
    </>
  )
}

export default Reviewsection
