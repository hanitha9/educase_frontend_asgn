import { useLocation } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation();
  const { email } = location.state || { email: "N/A" };

  // Extract name from email before '@' (example: adarsh@gmail.com → Adarsh)
  const namePart = email && email.includes("@")
    ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    : "User";

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 shadow-xl w-[350px] h-[720px] flex flex-col gap-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Account Settings</h2>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold">{namePart}</h3>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-1">About Me</h3>
          <p className="text-gray-700">
            I am a passionate and motivated web developer with a strong interest in
            building modern, responsive applications.
          </p>
        </div>
      </div>
    </div>
  );
}
