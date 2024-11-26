import AdminHeader from "../../../components/AdminHeader";
import AdminUserList from "../../../components/AdminUserList";
import AdminFooter from "../../../components/AdminFooter";

const AdminUserManagementPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <AdminHeader />

      {/* Main Content */}
      <main className="flex-1">
        <AdminUserList />
      </main>

      {/* AdminFooter */}
      <AdminFooter />
    </div>
  );
};

export default AdminUserManagementPage;
