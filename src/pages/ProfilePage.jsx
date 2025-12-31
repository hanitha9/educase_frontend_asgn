import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProfilePage() {
  const location = useLocation();
  const { email } = location.state || { email: "marry@gmail.com" };

  // Derive name from email
  const nameFromEmail =
    email && email.includes("@")
      ? email.split("@")[0].charAt(0).toUpperCase() +
        email.split("@")[0].split("").slice(1).join("")
      : "Marry Doe";

  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  );

  // Handle profile picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="bg-white w-full max-w-sm min-h-screen">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">
            Account Settings
          </h1>
        </div>

        {/* Content */}
        <div className="px-6 py-5">

          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-5">
            
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="upload-profile-pic"
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
            <div>
              <h2 className="text-base font-medium text-gray-900">
                {nameFromEmail}
              </h2>
              <p className="text-sm text-gray-500">
                {email}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-dashed border-gray-300 mb-5"></div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat.
            Sed Diam
          </p>

        </div>
      </div>
    </div>
  );
}
