// app/admin/page.js

import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminDashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <AdminHeader />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 py-12">
        <h2 className="mt-28 text-4xl font-bold text-center text-[#0C1E28] mb-12">
          Admin Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Users */}
          <div className="bg-[#DCCC3D] rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#0C1E28] mb-4">Total Users</h3>
            <p className="text-6xl font-extrabold text-[#0C1E28]">100</p>
          </div>
          {/* Total Reports */}
          <div className="bg-[#DC673D] rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Pending Reports</h3>
            <p className="text-6xl font-extrabold text-white">5</p>
          </div>
          {/* Other Statistics */}
          <div className="bg-[#0C1E28] rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Other Stats</h3>
            <p className="text-6xl font-extrabold text-white">N/A</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
