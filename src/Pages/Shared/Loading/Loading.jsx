import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        {/* Loading Text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
