import AdminHeader from "../../../components/AdminHeader";
import AdminReportsList from "../../../components/AdminReportsList";
import AdminFooter from "../../../components/AdminFooter";

const AdminReportsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AdminHeader />
      <main className="flex-1">
        <AdminReportsList />
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminReportsPage;
