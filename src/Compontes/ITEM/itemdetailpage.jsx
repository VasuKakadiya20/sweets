import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Itemdetailpage() {

  const products = [
    {
      id: 1,
      name: "Special Doodh Peda",
      price: 260,
      img: {
        image1: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713",
        image2: "https://www.anandsweets.in/cdn/shop/files/Doodh_Peda_FOP.jpg?v=1740398099&width=493",
        image3: "https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713",
      },
    },
  ];

  const images = Object.values(products[0].img);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [quantity, setQuantity] = useState({});

  const updateQty = (id, amount) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount),
    }));
  };

    const Addtocart = ()=>{
         toast.success("Succesfully Item Add to Cart!")
    }

  return (
    <>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      {products.map((item) => (
        <div key={item.id} className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <img
              src={activeImage}
              alt={item.name}
              className="w-full rounded-lg shadow-md transition-all"
            />

            <div className="flex gap-4 mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Thumb"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 object-cover cursor-pointer rounded-md border
                    ${activeImage === img ? "border-[#c19b5a] border-2" : "border-gray-300"}
                  `}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>

            <div className="text-xl font-bold text-[#c19b5a] mt-2">₹ {item.price}</div>

            <div className="flex gap-3 mt-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-2 text-lg" onClick={() => updateQty(item.id, -1)}>
                  −
                </button>
                <span className="px-4 py-2">{quantity[item.id] || 1}</span>
                <button className="px-3 py-2 text-lg" onClick={() => updateQty(item.id, 1)}>
                  +
                </button>
              </div>

              <button className="bg-[#c19b5a] text-white px-6 py-3 rounded-md text-sm hover:bg-[#a48145] transition" onClick={()=>Addtocart()}>
                Add to Cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">
                A traditional sweet made from pure ghee and gram flour, offering a melt-in-mouth experience with every bite. Perfect for gifting & celebrations.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Refund Policy</h3>
              <p className="text-gray-600">
                We do not accept returns. Refunds are provided in certain cases. Please email us at
                <span className="font-bold"> care@Dairy.net</span> with relevant information and images for assistance.
              </p>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default Itemdetailpage;
