import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProfilePage() {
  const location = useLocation();
  const { email } = location.state || { email: "N/A" };

  // Extract name from email
  const namePart =
    email && email.includes("@")
      ? email.split("@")[0].charAt(0).toUpperCase() +
        email.split("@")[0].slice(1)
      : "User";

  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  );

  // Handle profile picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      
      {/* Mobile Card */}
      <div className="bg-white p-8 shadow-xl w-[350px] h-[720px] rounded-2xl flex flex-col">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Account Settings
        </h2>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 mb-6">

          {/* Profile Image */}
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              id="upload-profile-pic"
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Edit Icon */}
            <label
              htmlFor="upload-profile-pic"
              className="absolute bottom-0 right-0 w-7 h-7 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </label>
          </div>

          {/* Name & Email */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">{namePart}</h3>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-dashed border-gray-300 mb-5"></div>

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat.
            Sed Diam
          </p>
        </div>

      </div>
    </div>
  );
}
