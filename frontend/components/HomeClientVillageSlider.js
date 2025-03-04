// frontend/components/HomeClientVillageSlider.js

"use client"; // Menandai ini sebagai Client Component

import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeVillageSlider = dynamic(() => import("./HomeVillageSlider"), {
  ssr: false,
  loading: () => (
    <div className="max-w-2xl mx-auto">
      <Skeleton height={400} borderRadius={20} />
    </div>
  ),
});

export default function HomeClientVillageSlider() {
  return <HomeVillageSlider />;
}
