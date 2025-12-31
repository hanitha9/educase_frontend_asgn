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

    if (!/^\d{10}$/.test(phone)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8+ chars with uppercase, lowercase, number & special character"
      );
      return;
    }

    setError("");
    navigate("/LoginPage");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350px] h-[720px]">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Create your <span className="text-[#6C63FF]">PopX</span> account
        </h2>

        <form className="space-y-5 mt-8" onSubmit={handleSubmit}>

          {/* Floating Input */}
          {[
            { label: "Full Name", type: "text" },
            { label: "Email address", type: "email" },
            { label: "Company name", type: "text" },
          ].map((f) => (
            <div key={f.label} className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C63FF] font-medium">
                {f.label} *
              </label>
              <input
                type={f.type}
                required
                placeholder={`Enter ${f.label.toLowerCase()}`}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
          ))}

          {/* Phone */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C63FF] font-medium">
              Phone number *
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10 digit number"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C63FF] font-medium">
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter strong password"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          {/* Agency */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
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

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#6C63FF] text-white font-semibold py-3 rounded-lg hover:bg-[#5a52e0] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
