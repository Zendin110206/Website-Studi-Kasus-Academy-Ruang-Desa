// app/users/forum/[id]/page.js

import UserHeader from "../../../../components/UserHeader";
import Footer from "../../../../components/Footer";
import ForumDetail from "../../../../components/ForumDetail";

const ForumDetailPage = ({ params }) => {
  const { id } = params; // Get the forum ID from the URL

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <UserHeader />

      {/* Content */}
      <ForumDetail id={id} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForumDetailPage;
