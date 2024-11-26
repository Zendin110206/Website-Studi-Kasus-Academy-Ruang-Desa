// frontend/app/admin/users/[id]/page.js

import AdminHeader from "../../../../components/AdminHeader";
import AdminUserDetail from "../../../../components/AdminUserDetail";
import AdminFooter from "../../../../components/AdminFooter";

const AdminUserDetailPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="relative bg-white w-full overflow-x-hidden">
      <AdminHeader />
      <AdminUserDetail userId={id} />
      <AdminFooter />
    </div>
  );
};

export default AdminUserDetailPage;
