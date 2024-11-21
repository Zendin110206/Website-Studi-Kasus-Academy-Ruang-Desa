// app/admin/users/[id]/page.js

import AdminHeader from "../../../../components/AdminHeader";
import AdminUserDetail from "../../../../components/AdminUserDetail";
import Footer from "../../../../components/Footer";

const AdminUserDetailPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="bg-white min-h-screen">
      <AdminHeader />
      <AdminUserDetail userId={id} />
      <Footer />
    </div>
  );
};

export default AdminUserDetailPage;
