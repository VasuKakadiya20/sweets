import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { postData } from "../../../api";

export default function AddClient() {
  const [form, setForm] = useState({
    itemtitle: "",
    price: "",
    Description: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddImage = () => {
    if (selectedFile) {
      setImages((prev) => [...prev, selectedFile]);
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("itemtitle", form.itemtitle);
    formData.append("price", form.price);
    formData.append("Description", form.Description);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const res = await postData("/Item/create", formData);
      toast.success("Item added successfully!");
      console.log(res.data);
      setForm({ itemtitle: "", price: "", Description: "" });
      setImages([]);
    } catch (err) {
      toast.error("Error saving client");
      console.error(err);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-center text-[#c19b5a] text-3xl font-bold mb-6 ">
          Add New Item
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="font-semibold text-gray-600">Item Title *</label>
              <input
                type="text"
                name="itemtitle"
                value={form.itemtitle}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-700 text-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-600">Price *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-700 text-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-600">Description *</label>
            <textarea
              type="text"
              name="Description"
              value={form.Description}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-700 text-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-600">Upload Images *</label>
            <div className="flex gap-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 w-[80%] bg-gray-50 border border-gray-700 text-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
              />

              {selectedFile && (
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="mt-2 border-1 border-[#c19b5a] text-[#c19b5a] px-4 py-2 rounded-lg"
                >
                  Add Image{/*bg-green-600*/}
                </button>
              )}
            </div>

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="border p-2 rounded-lg">
                    <img
                      src={URL.createObjectURL(img)}
                      className="w-full h-24 object-cover rounded"
                    />
                    <p className="text-xs mt-1 text-center">{img.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#c19b5a] text-white py-3 rounded-lg text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

