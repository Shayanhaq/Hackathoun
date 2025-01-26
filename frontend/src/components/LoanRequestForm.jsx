// src/components/LoanRequestForm.jsx
import React, { useState } from "react";

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    cnic: "",
    address: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle loan request submission logic
    alert("Loan Request Submitted");
  };

  return (
    <div className="min-h-screen flex flex-col py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Loan Request Form</h2>
      <div className="container mx-auto max-w-md">
        <form onSubmit={handleSubmit}>
          {/* User Information */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional fields (email, phone, etc.) */}

          <button type="submit" className="px-6 py-3 bg-red-900 text-white rounded-lg shadow-lg w-full">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequestForm;
