// components/AddMessageForm.js
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
        <h4 className="text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
        <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
          Tambah Pesan
        </h2>
      </div>

      {/* Message Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg">
          {/* Username */}
          <div className="mb-6">
            <input
              type="text"
              value="@YourUsername" // Replace with actual username
              readOnly
              className="w-full bg-white rounded-2xl py-4 px-6 text-[#0C1E28] text-2xl font-bold placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className="w-full h-64 bg-white rounded-2xl py-4 px-6 text-[#0C1E28] text-xl placeholder-gray-400 focus:outline-none"
              placeholder="Pesan"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-xl px-8 py-3 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300"
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
