// app/edit-profile/page.js

import UserHeader from "../../components/UserHeader";
import Footer from "../../components/Footer";
import EditProfileForm from "../../components/EditProfileForm";

const EditProfilePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <UserHeader />
      <EditProfileForm />
      <Footer />
    </div>
  );
};

export default EditProfilePage;
