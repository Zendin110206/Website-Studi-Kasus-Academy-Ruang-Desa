// frontend/components/EditProfileForm.js
"use client";

import { useState, useEffect } from "react";

const EditProfileForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const defaultProfilePicture = "/assets/default-profile.png"; // Pastikan Anda memiliki gambar default di path ini

  // Load existing profile picture from localStorage
  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
      setPreviewImage(storedProfilePicture);
    } else {
      setPreviewImage(defaultProfilePicture);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfilePicture = () => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus gambar profil Anda?"
    );
    if (confirmDelete) {
      setProfilePicture(null);
      setPreviewImage(defaultProfilePicture);
      localStorage.removeItem("profilePicture");
      // Dispatch custom event to notify other components
      const event = new Event("profilePictureChanged");
      window.dispatchEvent(event);
      alert("Profile picture telah dihapus dan direset ke default.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile picture to localStorage
    if (profilePicture) {
      localStorage.setItem("profilePicture", profilePicture);
      // Dispatch custom event to notify other components
      const event = new Event("profilePictureChanged");
      window.dispatchEvent(event);
      alert("Profile updated successfully!");
    } else {
      alert("Silakan unggah gambar profil Anda atau reset ke default.");
    }
  };

  return (
    <main className="container mx-auto px-6 md:px-12 py-24 bg-white relative">
      
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-24"></div>

      <h2 className="text-4xl font-bold text-center text-[#0C1E28] mb-8">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.206 0 4-1.794 4-4S14.206 4 12 4 8 5.794 8 8s1.794 4 4 4z" />
                <path d="M12 14c-4.337 0-8 1.567-8 4v2h16v-2C20 15.567 16.337 14 12 14z" />
              </svg>
            </div>
          )}
          <label
            htmlFor="profilePicture"
            className="bg-[#DCCC3D] text-[#0C1E28] font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#CBB736] transition duration-300"
          >
            {previewImage && previewImage !== defaultProfilePicture
              ? "Change Profile Picture"
              : "Upload Profile Picture"}
          </label>
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {/* Hapus Profile Picture */}
          {profilePicture && profilePicture !== defaultProfilePicture && (
            <button
              type="button"
              onClick={handleDeleteProfilePicture}
              className="mt-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Delete Profile Picture
            </button>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            aria-label="Save Changes"
          >
            Save Changes
          </button>
          {/* Reset ke Default */}
          {profilePicture !== defaultProfilePicture && (
            <button
              type="button"
              onClick={handleDeleteProfilePicture}
              className="bg-gray-600 text-white font-bold px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300"
              aria-label="Reset to Default"
            >
              Reset to Default
            </button>
          )}
        </div>
      </form>

    </main>
  );
};

export default EditProfileForm;
