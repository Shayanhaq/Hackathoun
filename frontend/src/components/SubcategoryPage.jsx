import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanRequestForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    cnic: "",
    loanReason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call or add your API logic here
      console.log("Form Submitted", formData);

      // Show success message
      window.alert("Your password has been sent to your email. Go collect the password and register.");

      // Redirect to the landing page
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Loan Request Form</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">CNIC</label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Reason for Loan</label>
          <textarea
            name="loanReason"
            value={formData.loanReason}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoanRequestForm;
