import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("/");

  const navItems = [
    { label: "Shop", path: "/", imgSrc: "/public/shop.png" },
    { label: "Explore", path: "/explore", imgSrc: "/public/explore.png" },
    { label: "Cart", path: "/cart", imgSrc: "/public/cart.png" },
    { label: "Favourite", path: "/favourite", imgSrc: "/public/favourite.png" },
    { label: "Account", path: "/account", imgSrc: "/public/account.png" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg">
      <div className="flex justify-between px-4 py-2 h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setActiveTab(item.path)}
            className={`flex flex-col items-center text-sm ${
              activeTab === item.path ? "text-green-500" : "text-gray-500"
            }`}
          >
            <img src={item.imgSrc} alt={item.label} className="w-6 h-6 mb-1" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
