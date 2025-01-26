import React, { useState } from "react";

const Dashboard = () => {
  const [witness1, setWitness1] = useState({
    fullName: "",
    cnic: "",
    email: "",
    contact: "",
  });
  const [witness2, setWitness2] = useState({
    fullName: "",
    cnic: "",
    email: "",
    contact: "",
  });

  const handleWitnessChange = (e, witness) => {
    const { name, value } = e.target;
    if (witness === 1) {
      setWitness1({ ...witness1, [name]: value });
    } else {
      setWitness2({ ...witness2, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Witness 1 Data:", witness1);
    console.log("Witness 2 Data:", witness2);
    // You can send the data to your backend here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-indigo-200 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-red-900 mb-6">
          Witness Registration
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Witness 1 Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Witness 1</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={witness1.fullName}
                  onChange={(e) => handleWitnessChange(e, 1)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  value={witness1.cnic}
                  onChange={(e) => handleWitnessChange(e, 1)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={witness1.email}
                  onChange={(e) => handleWitnessChange(e, 1)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={witness1.contact}
                  onChange={(e) => handleWitnessChange(e, 1)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Witness 2 Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Witness 2</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={witness2.fullName}
                  onChange={(e) => handleWitnessChange(e, 2)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  value={witness2.cnic}
                  onChange={(e) => handleWitnessChange(e, 2)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={witness2.email}
                  onChange={(e) => handleWitnessChange(e, 2)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={witness2.contact}
                  onChange={(e) => handleWitnessChange(e, 2)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-6 bg-red-900 text-white rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
            >
              Submit Witness Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
