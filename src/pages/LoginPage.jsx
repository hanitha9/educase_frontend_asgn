import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/ProfilePage", { state: { email } });
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px] h-[720px]">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Sign in to your <span className="text-[#6C63FF]">PopX</span> account
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-8 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C63FF] font-medium">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#6C63FF] outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C63FF] font-medium">
              Password *
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#6C63FF] outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#6C63FF] text-white font-semibold py-3 rounded-lg hover:bg-[#5a52e0] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
