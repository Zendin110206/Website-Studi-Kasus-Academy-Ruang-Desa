// app/admin/reports/page.js

import AdminHeader from "../../../components/AdminHeader";
import AdminReportsList from "../../../components/AdminReportsList";
import Footer from "../../../components/Footer";

const AdminReportsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AdminHeader />
      <AdminReportsList />
      <Footer />
    </div>
  );
};

export default AdminReportsPage;
