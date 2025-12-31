import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProfilePage() {
  const location = useLocation();
  const { email } = location.state || { email: "marry@gmail.com" };

  // Derive name from email (before @), capitalize first letter
  const nameFromEmail =
    email && email.includes("@")
      ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Account Settings
          </h1>

          {/* Profile Section */}
          <div className="flex items-start gap-5 mb-8">
            {/* Profile Picture with Edit Badge */}
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="upload-profile-pic"
                className="hidden"
              />

              {/* Purple Pencil Edit Button */}
              <label
                htmlFor="upload-profile-pic"
                className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-white flex items-center justify-center cursor-pointer shadow-md hover:bg-purple-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </label>
            </div>

            {/* Name and Email */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {nameFromEmail}
              </h2>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>

          {/* Exact Lorem Ipsum Text from Image */}
          <p className="text-gray-600 leading-relaxed text-base">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat. Sed Diam
          </p>

        </div>
      </div>
    </div>
  );
}
