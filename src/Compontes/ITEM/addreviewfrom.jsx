import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import toast, { Toaster } from 'react-hot-toast';

function Addreviewfrom({ showfrom }) {
    const [rating, setRating] = useState(4);
    //   const Addreview = () => {
    //     toast.success("Succesfully Add Review !")
    // }

    return (
        <>
         <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {showfrom && (
                <form className="w-full border-t pt-6 pb-3 border-b-2" >
                    <label className="block font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name (public)"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email (private)"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Rating</label>
                    <Rating
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        size="large"
                    />

                    <label className="block font-medium mt-5 mb-1">Review Title</label>
                    <input
                        type="text"
                        placeholder="Give your review a title"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Review</label>
                    <textarea
                        rows="5"
                        placeholder="Write your comments here"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    ></textarea>

                    <button type="submit" className="mt-6 bg-[#c19b5a] text-white px-5 py-2 rounded">{/*onClick={()=> Addreview()} */}
                        Submit Review
                    </button>
                </form>
            )
            }
        </>
    )
}

export default Addreviewfrom
