import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/loan-category/${category}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Saylani Welfare</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Loan Categories Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Choose Your Loan Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Wedding", "Home Construction", "Business Startup", "Education"].map((category) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <h3 className="text-xl font-semibold">{category}</h3>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
