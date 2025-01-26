import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/loan-category/${category}`);
  };

  const goToLoanCalculator = () => {
    navigate("/loan-calculator");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-900 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-lg font-bold uppercase">Microfinance App</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-medium transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white text-lg font-medium transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105 hover:underline"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="text-white text-lg font-medium transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105 hover:underline"
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

      {/* Loan Categories Section */}
      <section className="bg-gray-100 py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8">Choose Your Loan Category</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {["Wedding", "Home Construction", "Business Startup", "Education"].map((category) => (
        <div
          key={category}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer transition duration-300 ease-in-out transform"
          onClick={() => handleCategoryClick(category)}
        >
          <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
          <button className="mt-4 px-4 py-2 bg-red-900 text-white rounded hover:bg-red-800 transition duration-300 ease-in-out">
            Select
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Calculate Loan Button Section */}
<section className="text-center py-8">
  <button
    onClick={goToLoanCalculator}
    className="px-6 py-3 bg-red-900 text-white rounded-lg shadow-lg hover:bg-red-800 transform hover:scale-105 transition duration-300 ease-in-out"
  >
    Calculate Your Loan
  </button>
</section>


      {/* Footer */}
      <footer className="bg-red-900 text-white py-4 mt-auto">
  <div className="container mx-auto text-center">
    <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default LandingPage;
