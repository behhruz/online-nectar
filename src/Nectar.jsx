import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./index.css";
import logo from "../public/Group (5).svg";

// Splash Screen Component
const SplashScreen = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundColor: "#53B175" }}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-white text-4xl font-bold">nectar</h1>
        <p className="text-white text-sm">Online Groceries</p>
      </div>
    </div>
  );
};

// Welcome Screen Component
const WelcomeScreen = ({ onGetStarted }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white"
      style={{
        backgroundColor: "#53B175",
        backgroundImage:
          "url('https://new-retail.ru/upload/iblock/f76/f76b7038ee0b1e3992a9c0fc241f06c3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <img className="m-auto w-24 h-24 mb-4" src={logo} alt="Logo" />
        <h2 className="text-3xl font-semibold">Welcome to our store</h2>
        <p className="mt-2 text-base text-gray-100">
          Get your groceries delivered in as fast as one hour
        </p>
      </div>
      <button
        className="mt-8 px-8 py-4 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300 ease-in-out"
        onClick={onGetStarted} // Call the onGetStarted function on button click
      >
        Get Started
      </button>
    </div>
  );
};

// Main Nectar Component
function Nectar() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("welcome");
    }, 5000); // 5 seconds for splash screen

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleGetStarted = () => {
    // Redirect to the login page
    navigate("/login"); // Change to "/login"
  };

  return (
    <div>
      {currentScreen === "splash" && <SplashScreen />}
      {currentScreen === "welcome" && <WelcomeScreen onGetStarted={handleGetStarted} />}
    </div>
  );
}

export default Nectar;
