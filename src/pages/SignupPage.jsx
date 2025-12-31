import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupPage() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pwd) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return strongRegex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 📱 Mobile number validation
    if (!/^\d{10}$/.test(phone)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    // 🔐 Password validation
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    setError("");
    // ✅ Navigate to Login page after successful signup
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350px] h-[720px]">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
          Create your <span className="text-[#6C63FF]">PopX</span> account
        </h2>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number *
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10 digit number"
              required
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email address *
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Company name *
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">
              Are you an Agency? *
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                  className="accent-[#6C63FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#6C63FF]"
                />
                No
              </label>
            </div>
          </div>

          {/* ❗ Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#6C63FF] text-black font-medium py-2 rounded-lg hover:bg-[#5b54e0]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
