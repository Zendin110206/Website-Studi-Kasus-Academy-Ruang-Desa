// frontend/app/users/forum/[id]/page.js

"use client";

import UserHeader from "../../../../components/UserHeader";
import Footer from "../../../../components/Footer";
import UserForumDetail from "../../../../components/UserForumDetail";

const UserForumDetailPage = ({ params }) => {
  const { id } = params; // Get the forum ID from the URL

  return (
    <div className="relative bg-white w-full overflow-x-hidden min-h-screen">
      {/* Header */}
      <UserHeader />

      {/* Content */}
      <main className="pt-24 px-4 sm:px-6 lg:px-12">
        {/* Forum Detail */}
        <div className="container mx-auto">
          <UserForumDetail id={id} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserForumDetailPage;
