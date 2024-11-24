// frontend/app/users/forum/[id]/page.js

import UserHeader from "../../../../components/UserHeader";
import Footer from "../../../../components/Footer";
import ForumDetail from "../../../../components/ForumDetail";

const ForumDetailPage = ({ params }) => {
  const { id } = params; // Get the forum ID from the URL

  return (
    <div className="relative bg-white w-full overflow-x-hidden">
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
