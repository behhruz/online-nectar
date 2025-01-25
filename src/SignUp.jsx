import React, { useState } from "react";
import { useUserContext } from "./UserContext"; // Import the context
import { useNavigate } from "react-router-dom"; // For navigation

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUserData } = useUserContext(); // Access the context to set user data
  const navigate = useNavigate(); // Initialize navigation

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form default submission
    if (!username || !email || !password) {
      alert("Please fill out all fields!");
      return;
    }
    setUserData({ username, email, password }); // Save user data to context
    navigate("/login"); // Redirect to Login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <span role="img" aria-label="carrot">
              🥕
            </span>
          </div>
          <h1 className="text-2xl font-bold mt-4">Sign Up</h1>
          <p className="text-gray-500 text-sm">Enter your credentials to continue</p>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-green-500 focus:border-green-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-green-500 focus:border-green-500"
                placeholder="yourname@example.com"
              />
              {email && (
                <span className="absolute inset-y-0 right-4 flex items-center text-green-500">
                  ✔️
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 text-gray-500 focus:outline-none"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            By continuing you agree to our{" "}
            <a href="#" className="text-green-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-500 hover:underline">
              Privacy Policy
            </a>.
          </p>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
