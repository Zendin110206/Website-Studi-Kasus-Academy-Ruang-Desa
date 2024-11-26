// frontend/components/HomeHomeContactModal.js
"use client"; // Marking as a Client Component

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const HomeHomeContactModal = ({ isOpen, closeModal }) => {
  const cancelButtonRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState({
    email: "",
    phone: "",
  });

  // Function to copy text to clipboard
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess((prev) => ({
          ...prev,
          [field]: `${field === "email" ? "Email" : "Phone"} copied!`,
        }));
        setTimeout(() => {
          setCopySuccess((prev) => ({ ...prev, [field]: "" }));
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeModal}
        initialFocus={cancelButtonRef}
      >
        {/* Background Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-70"
          leave="ease-in duration-200"
          leaveFrom="opacity-70"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" />
        </Transition.Child>

        {/* Modal Panel */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 text-left align-middle shadow-xl transition-all">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                    aria-label="Close Contact Modal"
                    ref={cancelButtonRef}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Brand Logo */}
                <div className="flex justify-center mb-4">
                  {/* Replace with your brand logo */}
                  <img
                    src="/assets/logoputih.png"
                    alt="Brand Logo"
                    className="h-16 w-auto"
                  />
                </div>

                {/* Modal Content */}
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6"
                >
                  Hubungi Kami
                </Dialog.Title>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-6 w-6 text-custom-yellow" />
                      <a
                        href="mailto:your-email@example.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-custom-yellow dark:hover:text-yellow-400 transition-colors text-sm sm:text-base"
                      >
                        your-email@example.com
                      </a>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard("your-email@example.com", "email")
                      }
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none"
                      data-tooltip-id="copy-email-tooltip"
                      data-tooltip-content="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      <FiCopy className="h-5 w-5" />
                    </button>
                    <Tooltip
                      id="copy-email-tooltip"
                      place="top"
                      variant="dark"
                    />
                  </div>
                  {copySuccess.email && (
                    <div className="text-green-500 text-xs">
                      {copySuccess.email}
                    </div>
                  )}

                  {/* Phone */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-6 w-6 text-custom-yellow" />
                      <a
                        href="tel:+1234567890"
                        className="text-gray-700 dark:text-gray-300 hover:text-custom-yellow dark:hover:text-yellow-400 transition-colors text-sm sm:text-base"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("+1234567890", "phone")}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none"
                      data-tooltip-id="copy-phone-tooltip"
                      data-tooltip-content="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      <FiCopy className="h-5 w-5" />
                    </button>
                    <Tooltip
                      id="copy-phone-tooltip"
                      place="top"
                      variant="dark"
                    />
                  </div>
                  {copySuccess.phone && (
                    <div className="text-green-500 text-xs">
                      {copySuccess.phone}
                    </div>
                  )}

                  {/* Social Media */}
                  <div className="flex flex-col space-y-4">
                    {/* Instagram */}
                    <div className="flex items-center space-x-3">
                      <FaInstagram className="h-6 w-6 text-custom-yellow" />
                      <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-custom-yellow dark:hover:text-yellow-400 transition-colors text-sm sm:text-base flex items-center space-x-1"
                      >
                        <span>@yourprofile</span>
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center space-x-3">
                      <FaFacebook className="h-6 w-6 text-custom-yellow" />
                      <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-custom-yellow dark:hover:text-yellow-400 transition-colors text-sm sm:text-base flex items-center space-x-1"
                      >
                        <span>/yourprofile</span>
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Twitter */}
                    <div className="flex items-center space-x-3">
                      <FaTwitter className="h-6 w-6 text-custom-yellow" />
                      <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-custom-yellow dark:hover:text-yellow-400 transition-colors text-sm sm:text-base flex items-center space-x-1"
                      >
                        <span>@yourprofile</span>
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Optional Footer */}
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  Kami siap membantu Anda! Hubungi kami melalui salah satu cara
                  di atas.
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HomeHomeContactModal;
