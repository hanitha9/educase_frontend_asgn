import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl w-[350px] h-[720px] rounded-2xl relative overflow-hidden flex flex-col justify-end p-10 text-center">

        {/* 🔶 Decorative Top Circles */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="relative w-[200px] h-[200px]">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div
                key={num}
                className="absolute w-8 h-8 rounded-full bg-yellow-400 text-white text-sm font-bold flex items-center justify-center"
                style={{
                  top: `${index * 32}px`,
                  left: `${index * 24}px`,
                }}
              >
                {num}
              </div>
            ))}

            {/* Circle 6 */}
            <div className="absolute w-8 h-8 rounded-full bg-yellow-400 text-white text-sm font-bold flex items-center justify-center -top-6 left-6">
              6
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to <span className="text-[#6C63FF]">PopX</span>
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/SignupPage")}
            style={{ backgroundColor: "#6C63FF", color: "white" }}
            className="w-full bg-[#6C63FF] text-white py-3 rounded-lg font-semibold hover:bg-[#5a52e0] transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/LoginPage")}
            style={{ backgroundColor: "#6C63FF", color: "white" }}
            className="w-full bg-[#ede5ff] text-[#6C63FF] py-3 rounded-lg font-semibold hover:bg-[#e0d6ff] transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
