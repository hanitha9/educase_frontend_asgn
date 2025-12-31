import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // ✅ After signup success, navigate to App.jsx (home)
    navigate("/");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350px] h-[720px]">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
          Create your <span className="text-[#6C63FF]">PopX</span> account
        </h2>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          {[
            { label: "Full Name", type: "text" },
            { label: "Phone number", type: "text" },
            { label: "Email address", type: "email" },
            { label: "Password", type: "password" },
            { label: "Company name", type: "text" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm text-gray-700 font-medium mb-1">
                {f.label} *
              </label>
              <input
                type={f.type}
                placeholder={`Enter ${f.label.toLowerCase()}`}
                required
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
              />
            </div>
          ))}

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency? *
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  defaultChecked
                  required
                  className="accent-[#6C63FF]"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-[#6C63FF]"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6C63FF] text-black font-medium py-2 rounded-lg mt-4 hover:bg-[#5b54e0] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
