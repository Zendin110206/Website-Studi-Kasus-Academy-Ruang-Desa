// components/ForumDetail.js
"use client";

import { useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"; // Pastikan Anda mengimpor ikon yang dibutuhkan

const ForumDetail = ({ id }) => {
  // Sample data based on forum ID
  const forumData = {
    '1': {
      title: "Pemilihan Ketua RT",
      messages: [
        {
          id: 1,
          username: "@siti12345",
          content:
            "Buat pemilihan RT baru baiknya diadakan di rumah saya aja, nanti saya buatkan pisang goreng.",
          replies: [],
        },
        {
          id: 2,
          username: "@agussutisna",
          content: "NDAK BISA! MASA DI RUMAH IBU, moh, di balai desa saja.",
          replies: [],
        },
      ],
    },
    '2': {
      title: "Fasilitas Umum",
      messages: [
        // Add messages for forum 2
      ],
    },
    '3': {
      title: "Keamanan Lingkungan",
      messages: [
        // Add messages for forum 3
      ],
    },
  };

  const forum = forumData[id];

  const [messages, setMessages] = useState(forum?.messages || []);
  const [newMessage, setNewMessage] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(null);

  const handleAddMessage = () => {
    if (newMessage.trim() === "") return; // Prevent adding empty messages

    // Add new message to the list
    const newId = messages.length + 1;
    const newMsg = {
      id: newId,
      username: "@YourUsername", // Replace with actual username from backend
      content: newMessage,
      replies: [],
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const handleReply = (messageId) => {
    if (replyMessage.trim() === "") return; // Prevent adding empty replies

    // Add reply to the message
    const updatedMessages = messages.map((msg) => {
      if (msg.id === messageId) {
        return {
          ...msg,
          replies: [
            ...msg.replies,
            {
              id: msg.replies.length + 1,
              username: "@YourUsername", // Replace with actual username from backend
              content: replyMessage,
            },
          ],
        };
      }
      return msg;
    });
    setMessages(updatedMessages);
    setReplyMessage("");
    setShowReplyInput(null);
  };

  const handleReport = (messageId) => {
    // Handle report functionality
    alert(`Pesan dengan ID ${messageId} telah dilaporkan.`);
  };

  if (!forum) {
    return (
      <main className="container mx-auto px-6 md:px-12 py-24">
        <p className="text-center text-2xl font-bold text-red-600">
          Forum tidak ditemukan.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 md:px-12 py-24">
      {/* Forum Title */}
      <div className="text-center mb-12">
        <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
        <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
          Forum
        </h2>
      </div>

      {/* Forum Topic */}
      <div className="bg-[#0C1E28] rounded-2xl p-6 mb-12">
        <div className="flex items-center">
          <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
          <h3 className="text-3xl font-bold text-white ml-6">
            {forum.title}
          </h3>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-8">
        {messages.map((message) => (
          <div key={message.id} className="bg-white rounded-2xl p-6 shadow-md">
            {/* Username */}
            <p className="text-xl font-bold text-gray-600 mb-2">
              {message.username}
            </p>
            {/* Message Content */}
            <p className="text-gray-800 mb-4">{message.content}</p>
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowReplyInput(
                    showReplyInput === message.id ? null : message.id
                  );
                }}
                className="text-[#0C1E28] font-bold text-xl hover:underline"
                aria-label="Reply to message"
              >
                Reply
              </button>
              <button
                onClick={() => handleReport(message.id)}
                className="text-red-600 font-bold text-xl hover:underline"
                aria-label="Report message"
              >
                Report
              </button>
            </div>

            {/* Replies */}
            {message.replies.length > 0 && (
              <div className="mt-6 ml-8 border-l-2 border-gray-300 pl-4">
                {message.replies.map((reply) => (
                  <div key={reply.id} className="mb-4">
                    <p className="text-lg font-bold text-gray-600 mb-1">
                      {reply.username}
                    </p>
                    <p className="text-gray-800">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Input */}
            {showReplyInput === message.id && (
              <div className="mt-4">
                <textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6CF35] text-gray-800"
                  placeholder="Tulis balasan Anda..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleReply(message.id)}
                    className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-xl px-6 py-2 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300"
                  >
                    Kirim Balasan
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Message */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Tambah Pesan</h3>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6CF35] text-gray-800"
          placeholder="Tulis pesan Anda..."
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleAddMessage}
            className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-xl px-8 py-3 rounded-full shadow-lg hover:bg-[#CBB736] transition duration-300"
          >
            Kirim
          </button>
        </div>
      </div>
    </main>
  );
};

export default ForumDetail;
