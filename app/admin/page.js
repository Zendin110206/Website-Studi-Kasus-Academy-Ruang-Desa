// frontend/app/admin/page.js

import AdminHeader from "../../components/AdminHeader";
import AdminFooter from "../../components/AdminFooter";

const stats = [
  {
    title: "Total Users",
    value: "100",
    bgColor: "bg-yellow-400",
    textColor: "text-gray-900",
  },
  {
    title: "Pending Reports",
    value: "5",
    bgColor: "bg-red-500",
    textColor: "text-white",
  },
  {
    title: "Other Stats",
    value: "N/A",
    bgColor: "bg-blue-800",
    textColor: "text-white",
  },
];

const AdminDashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white relative w-full overflow-x-hidden">
      {/* Header */}
      <AdminHeader />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mt-28 sm:mt-48 text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Admin Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105`}
            >
              <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${stat.textColor}`}>
                {stat.title}
              </h3>
              <p className={`text-4xl sm:text-6xl font-extrabold ${stat.textColor}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminDashboardPage;
