import React, { useState, useEffect } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Ma'lumotlarni olish
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Slayder komponenti
  const Slider = ({ items }) => {
    const handleNext = () => {
      document.getElementById("slider").scrollLeft += 200;
    };

    const handlePrev = () => {
      document.getElementById("slider").scrollLeft -= 200;
    };

    return (
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black px-2 py-1 rounded-full z-10"
        >
          &lt;
        </button>
        <div id="slider" className="flex gap-4 overflow-hidden scrollbar-hide">
          {items.map((item) => (
            <div key={item.id} className="min-w-[200px] flex-shrink-0">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black px-2 py-1 rounded-full z-10"
        >
          &gt;
        </button>
      </div>
    );
  };

  // Mahsulotlar kartochkasi
  const ProductCard = ({ product }) => (
    <div className="border rounded-lg shadow-md p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500">{product.weight}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600">
        +
      </button>
    </div>
  );

  // Bo'limlarni tashkil qilish
  const exclusiveOffer = products.filter(
    (product) => product.category === "Exclusive Offer"
  );
  const bestSelling = products.filter(
    (product) => product.category === "Best Selling"
  );
  const groceries = products.filter(
    (product) => product.category === "Groceries"
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>      {/* Exclusive Offer bo'limi */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Exclusive Offer</h2>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => console.log("View All Exclusive Offers")}
          >
            See All
          </button>
        </div>
        <Slider items={exclusiveOffer} />
      </section>

      {/* Best Selling bo'limi */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Best Selling</h2>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => console.log("View All Best Selling")}
          >
            See All
          </button>
        </div>
        <Slider items={bestSelling} />
      </section>

      {/* Groceries bo'limi */}

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Groceries</h2>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => console.log("View All Groceries")}
          >
            See All
          </button>
        </div>
        <Slider items={groceries} />
      </section>
    </div>
  );
}

export default Dashboard;