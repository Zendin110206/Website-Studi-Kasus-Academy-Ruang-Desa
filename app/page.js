// app/page.js
"use client"; // Add this line to mark as a Client Component

import { useState } from "react"; // Import useState
import Image from "next/image";
import Header from "../components/Header";
import Head from "next/head";
import ClientVillageSlider from "../components/clientVillageSlider";
import ContactModal from "../components/ContactModal"; // Import ContactModal
import Link from "next/link";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false); // State for Contact Modal

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white font-poppins">
        <Header openContactModal={openContactModal} />{" "}
        {/* Pass open function */}
        
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/assets/village profile.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex flex-col justify-center h-full text-left text-white px-8 md:px-16">
            <h1 className="text-4xl md:text-6xl font-bold">
              Selamat datang di
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mt-2 text-shadow-custom">
              Ruang Desa
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Pusat informasi dan sumber daya untuk kemajuan desa kita
            </p>
            <Link
              href="/signin"
              className="mt-6 bg-custom-yellow shadow-custom rounded-[40px] px-8 py-4 text-white font-bold text-xl md:text-2xl leading-tight text-shadow-custom inline-block text-center"
            >
              Jelajahi
            </Link>
          </div>
        </section>
        
        {/* Tentang Section */}
        <section className="bg-dark-blue text-white py-12">
          <div className="container mx-auto px-6 md:px-16">
            <div className="md:flex md:flex-row md:items-center">
              {/* Slider */}
              <div className="md:w-1/2">
                <ClientVillageSlider />
              </div>
              {/* Text Content */}
              <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h3 className="text-4xl md:text-6xl font-bold text-shadow-custom">
                  Cirendeu
                </h3>
                <p className="mt-4 text-lg md:text-xl">
                  Cireundeu berasal dari nama “pohon reundeu”, karena sebelumnya
                  di kampung ini banyak sekali populasi pohon reundeu. Pohon
                  reundeu itu sendiri ialah pohon untuk bahan obat herbal. Maka
                  dari itu kampung ini disebut Kampung Cireundeu. Kampung Adat
                  Cireundeu terletak di Kelurahan Leuwigajah, Kecamatan Cimahi
                  Selatan.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="bg-dark-blue text-white py-12">
          <div className="container mx-auto px-6 md:px-16">
            <h2 className="text-4xl md:text-6xl font-bold text-shadow-custom mb-4">
              Terkait
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-8">Tim</h3>

            {/* Team Members */}
            <div className="flex flex-wrap justify-between">
              {/* Member 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white bg-opacity-10 p-6 rounded-[20px] text-center">
                  <Image
                    src="/assets/teamMember1.png"
                    alt="Team Member Aulia"
                    width={256}
                    height={256}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Aulia Rahma | AUL</h3>
                  <p className="font-semibold">UI/UX</p>
                </div>
              </div>
              {/* Member 2 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white bg-opacity-10 p-6 rounded-[20px] text-center">
                  <Image
                    src="/assets/teamMember2.png"
                    alt="Team Member Geraldi"
                    width={256}
                    height={256}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    Geraldi Ridwan | ALD
                  </h3>
                  <p className="font-semibold">Front End</p>
                </div>
              </div>
              {/* Member 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white bg-opacity-10 p-6 rounded-[20px] text-center">
                  <Image
                    src="/assets/teamMember3.png"
                    alt="Team Member Zaidan"
                    width={256}
                    height={256}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Zaidan | DUN</h3>
                  <p className="font-semibold">Front End</p>
                </div>
              </div>
              {/* Member 4 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white bg-opacity-10 p-6 rounded-[20px] text-center">
                  <Image
                    src="/assets/teamMember4.png"
                    alt="Team Member Zaenal"
                    width={256}
                    height={256}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    Zaenal Abidin | ZEN
                  </h3>
                  <p className="font-semibold">Back End</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <section
          className="relative bg-cover bg-center py-12"
          style={{ backgroundImage: "url('/assets/VillageFooter.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-16">
            {/* Logo and Lines */}
            <div className="flex items-center mb-8">
              <div className="w-32 border-t border-white"></div>
              <Image
                src="/assets/logoputih.png"
                alt="Logo"
                width={200}
                height={64}
                className="mx-4"
              />
              <div className="w-32 border-t border-white"></div>
            </div>
            {/* Subscription Form */}
            <div className="bg-white bg-opacity-20 p-8 rounded-lg max-w-md w-full">
              <h2 className="text-lg">Dapatkan informasi</h2>
              <h1 className="text-5xl font-bold">Terkini</h1>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Masukan Email Terkini"
                  className="p-4 rounded-l-lg w-full text-black"
                />
                <button
                  className="bg-custom-yellow text-white p-4 rounded-r-lg"
                >
                  Kirim
                </button>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8">
              <h2 className="text-lg">Ikuti kami :</h2>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                  <i className="fas fa-headphones"></i>
                </a>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="mt-8 flex space-x-8">
              <button
                onClick={openContactModal} // Open Contact Modal on click
                className="text-white text-lg"
              >
                Kontak
              </button>
              <a href="#" className="text-white text-lg">
                Tentang
              </a>
              <a href="#" className="text-white text-lg">
                Terkait
              </a>
            </div>
            {/* Footer Text */}
            <div className="mt-8">
              <p>2024. Hak Cipta Dilindungi | © Ruang Desa</p>
            </div>
          </div>
        </section>
        {/* Contact Modal */}
        <ContactModal isOpen={isContactOpen} closeModal={closeContactModal} />
      </main>
    </>
  );
}
