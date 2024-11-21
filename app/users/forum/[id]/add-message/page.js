// app/users/forum/[id]/add-message/page.js

import UserHeader from "../../../../../components/UserHeader";
import Footer from "../../../../../components/Footer";
import AddMessageForm from "../../../../../components/AddMessageForm";

const AddMessagePage = ({ params }) => {
  const { id } = params;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <UserHeader />

      {/* Content */}
      <AddMessageForm id={id} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddMessagePage;
