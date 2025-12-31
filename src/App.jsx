import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 shadow-xl w-[350px] h-[720px] flex flex-col justify-end text-center rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to <span className="text-indigo-600">PopX</span>
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Start your journey by creating an account or logging in.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/SignupPage")}
            className="w-full border border-indigo-600 text-black py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/LoginPage")}
            className="w-full border border-indigo-600 text-black py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
