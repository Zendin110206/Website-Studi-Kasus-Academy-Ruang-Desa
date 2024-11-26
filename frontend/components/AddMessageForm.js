// frontend/components/AddMessageForm.js

"use client";

import { useState } from "react";

const AddMessageForm = ({ id }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to add the message to the forum
    alert(`Pesan berhasil ditambahkan ke forum ${id}!`);
    setMessageContent("");
  };

  return (
    <main className="container mx-auto px-6 md:px-12 py-24">
      {/* Forum Title */}
      <div className="text-center mb-12">
        <h4 className="text-2xl sm:text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0C1E28] mt-2">
          Tambah Pesan
        </h2>
      </div>

      {/* Message Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 shadow-lg">
          {/* Username */}
          <div className="mb-6">
            <input
              type="text"
              value="@YourUsername" // Replace with actual username
              readOnly
              className="w-full bg-white rounded-2xl py-4 px-6 sm:px-8 text-[#0C1E28] text-xl sm:text-2xl font-bold placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className="w-full h-32 sm:h-40 p-4 sm:p-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6CF35] text-gray-800 text-base sm:text-lg md:text-xl"
              placeholder="Pesan"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg sm:text-xl px-8 sm:px-10 py-3 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300"
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AddMessageForm;
