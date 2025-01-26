import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  // State to manage users and loan requests
  const [users, setUsers] = useState([]);
  const [loanRequests, setLoanRequests] = useState([]);

  // Simulate fetching data (replace with actual API calls)
  useEffect(() => {
    // Fetch users (replace with your API endpoint)
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", cnic: "12345" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", cnic: "67890" },
    ]);

    // Fetch loan requests (replace with your API endpoint)
    setLoanRequests([
      { id: 1, category: "Wedding", amount: 50000, user: "John Doe" },
      { id: 2, category: "Home Construction", amount: 200000, user: "Jane Smith" },
    ]);
  }, []);

  // Handle loan request acceptance
  const handleAcceptLoan = (loanId) => {
    // Update the loanRequests state to reflect the accepted loan
    setLoanRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === loanId ? { ...request, status: "Accepted" } : request
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* Users Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">CNIC</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.cnic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Loan Requests Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Loan Requests</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((loanRequest) => (
              <tr key={loanRequest.id}>
                <td className="py-2 px-4 border-b">{loanRequest.category}</td>
                <td className="py-2 px-4 border-b">{loanRequest.amount}</td>
                <td className="py-2 px-4 border-b">{loanRequest.user}</td>
                <td className="py-2 px-4 border-b">
                  {loanRequest.status !== "Accepted" ? (
                    <button
                      onClick={() => handleAcceptLoan(loanRequest.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      Accept
                    </button>
                  ) : (
                    <span className="text-red-600">Accepted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Navigation */}
      <div className="mt-8 text-center">
        <Link to="/dashboard">
          <button className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
