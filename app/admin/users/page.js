// app/admin/users/page.js

import AdminHeader from "../../../components/AdminHeader";
import AdminUserList from "../../../components/AdminUserList";
import Footer from "../../../components/Footer";

const AdminUserManagementPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <AdminHeader />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 py-0">
        {/* You can add a title or any other content here if needed */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0C1E28] dark:text-white mb-4">
          User Management
        </h2>
        <AdminUserList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminUserManagementPage;
