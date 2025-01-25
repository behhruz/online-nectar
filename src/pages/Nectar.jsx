// import React, { useEffect, useState } from "react";
// import "./index.css";
// import logo from "../src/assets/images/Group (5).svg";
// import man from "../src/assets/images/man.png"

// // Splash Screen Component
// const SplashScreen = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen"
//       style={{ backgroundColor: "#53B175" }}
//     >
//       <div className="flex items-center space-x-2">
//         <div>
//           <img src={logo} alt="Logo" />
//         </div>
//         <div>
//           <h1 className="text-white text-4xl font-bold">nectar</h1>
//           <p className="text-white text-sm">Online Groceries</p>
//         </div>
//       </div>
    
//     </div>
//   );
// };

// // Welcome Screen Component
// const WelcomeScreen = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen text-white"
//       style={{
//         backgroundColor: "#53B175",
//         backgroundImage:
//           "url('https://new-retail.ru/upload/iblock/f76/f76b7038ee0b1e3992a9c0fc241f06c3.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className=" text-center ">
//         <img className="m-auto" src={logo} alt="Logo" />
//         <h2 className="text-3xl font-semibold">Welcome to our store</h2>
//         <p className="mt-2 text-base text-gray-100">
//           Get your groceries delivered in as fast as one hour
//         </p>
//       </div>
//       <button className="mt-8 px-8 py-4 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300 ease-in-out">
//         Get Started
//       </button>
//     </div>
//   );
// };





// // Main Nectar Component
// function Nectar() {
//   const [currentScreen, setCurrentScreen] = useState("splash");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentScreen("welcome");
//     }, 5000); // 5 seconds for splash screen

//     return () => clearTimeout(timer); // Cleanup
//   }, []);

//   return (
//     <div>
//       {currentScreen === "splash" && <SplashScreen />}
//       {currentScreen === "welcome" && <WelcomeScreen />}
//     </div>
//   );
// }

// export default Nectar;