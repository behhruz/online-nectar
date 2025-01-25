import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import Account from "./pages/Account";
import Nectar from "./Nectar";
import Login from "./Login";
import SignUp from "./SignUp";
import Order from "./Order";
import Dashboard from "./Dashboard"; // Dashboard component
import NotFoundPage from "./NotFound"; // Renaming import to avoid conflict
import { UserContextProvider } from './UserContext'; // Import UserContextProvider

const App = () => {
  return (
    <UserContextProvider>
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto bg-gray-50">
          <Routes>
            {/* Default route to Nectar */}
            <Route path="/" element={<Nectar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/explore" element={<ExploreWithProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/order" element={<Order />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </UserContextProvider>
  );
};

const ExploreWithProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Explore Page</h1>
      <p className="text-gray-500">Discover content on the Explore page!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 text-center">
            <img
              src={product.image || "https://via.placeholder.com/150"} // Default image
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.weight}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
