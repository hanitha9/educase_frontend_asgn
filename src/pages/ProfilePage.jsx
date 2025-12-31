import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation();
  const passedData = location.state || {};

  // State for profile data
  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  );
  const [name, setName] = useState(passedData.name || "Marry Doe");
  const [email, setEmail] = useState(passedData.email || "marry@gmail.com");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(name);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save name edit
  const saveName = () => {
    setName(tempName);
    setIsEditingName(false);
  };

  // Cancel name edit
  const cancelNameEdit = () => {
    setTempName(name);
    setIsEditingName(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h1>

          {/* Profile Header */}
          <div className="flex items-start gap-5 mb-8">
            {/* Profile Picture with Upload */}
            <div className="relative group">
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="profile-upload"
              />

              {/* Clickable Purple Edit Badge */}
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-white flex items-center justify-center cursor-pointer shadow-md hover:bg-purple-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </label>

              {/* Optional hover overlay */}
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-xs font-medium">Change</span>
              </div>
            </div>

            {/* Name & Email */}
            <div className="flex-1">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="text-xl font-semibold text-gray-900 border-b-2 border-purple-600 focus:outline-none px-1 py-1"
                    autoFocus
                  />
                  <button onClick={saveName} className="text-green-600 text-lg">✓</button>
                  <button onClick={cancelNameEdit} className="text-red-600 text-lg">✕</button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              )}
              <p className="text-gray-600 mt-1">{email}</p>
            </div>
          </div>

          {/* Description (Lorem Ipsum as in design) */}
          <p className="text-gray-600 leading-relaxed text-base">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat. Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
