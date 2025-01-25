import React from "react";


const Order = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="rounded-full bg-green-100 flex items-center justify-center">
        <img
          src="/img4.svg"
          alt="Order Accepted"
          className="w-[250px] h-[240px]"
        />
      </div>

      <h1 className="mt-6 text-lg font-semibold text-gray-800">
        Your Order has been accepted
      </h1>

      <p className="mt-2 text-sm text-gray-500 text-center w-4/5">
        Your items have been placed and are on their way to being processed
      </p>

      <button className="mt-6 w-3/4 max-w-xs py-3 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
        Track Order
      </button>

      <button className="mt-4 text-sm text-green-500 hover:underline">
        Back to home
      </button>
    </div>
  );
};

export default Order;