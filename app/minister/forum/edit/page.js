"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const EditForumPage = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const forums = [
    {
      id: 1,
      title: "Pemilihan Ketua RT",
      description:
        "Forum diskusi ini dapat menjadi kesempatan bagi kita untuk saling mengenal dan mendukung calon Ketua RT baru yang siap memimpin dengan penuh tanggung jawab.",
    },
    {
      id: 2,
      title: "Fasilitas Umum",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
    {
      id: 3,
      title: "Keamanan Lingkungan",
      description:
        "Diskusi ini sekaligus menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
  ];

  const handleForumChange = (e) => {
    const forumId = parseInt(e.target.value);
    const forum = forums.find((f) => f.id === forumId);
    setSelectedForum(forum);
    setTitle(forum.title);
    setDescription(forum.description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update logic here
    alert("Forum berhasil diubah!");
    // Reset form fields
    setSelectedForum(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Edit Forum
          </h2>
        </div>

        {/* Select Forum to Edit */}
        <div className="mb-6">
          <select
            onChange={handleForumChange}
            className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold shadow-md focus:outline-none"
          >
            <option value="">Pilih Forum untuk Diedit</option>
            {forums.map((forum) => (
              <option key={forum.id} value={forum.id}>
                {forum.title}
              </option>
            ))}
          </select>
        </div>

        {selectedForum && (
          <form onSubmit={handleSubmit}>
            <div className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg">
              {/* Title Input */}
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
                  <input
                    type="text"
                    placeholder="Judul Forum"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 bg-white rounded-r-2xl py-4 px-6 text-[#0C1E28] text-2xl font-bold placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Description Input */}
              <div className="mb-6">
                <textarea
                  placeholder="Deskripsi"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="10"
                  className="w-full bg-white rounded-2xl p-6 text-[#0C1E28] text-2xl font-medium placeholder-gray-400 focus:outline-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:bg-[#A6CC36] transition duration-300"
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        )}
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default EditForumPage;
