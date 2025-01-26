import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanRequestForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    cnic: "",
    loanReason: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call or add your API logic here
      console.log("Form Submitted", formData);

      // Open the modal on successful form submission
      setIsModalOpen(true);

      // Redirect to the landing page after a short delay (for demonstration)
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("There was an error submitting your form. Please try again.");
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
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

      {/* Modal for success message */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-center text-green-600 mb-4">
              Your request has been submitted!
            </h3>
            <p className="text-center mb-4">Your password has been sent to your email. Go collect the password and register.</p>
            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanRequestForm;
