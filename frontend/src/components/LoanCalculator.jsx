import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanCalculator = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanCategory, setLoanCategory] = useState("wedding");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [interestRate, setInterestRate] = useState(5); // Assuming a fixed interest rate of 5%
  const [error, setError] = useState("");
  const exchangeRate = 280; // Example exchange rate (1 USD = 280 PKR)

  const calculateLoan = () => {
    // Reset error message
    setError("");

    // Validate input: Ensure all fields are filled
    if (!loanAmount || !deposit || !loanPeriod) {
      setError("Please fill in all fields.");
      return;
    }

    // Convert values to numbers
    const loanAmountNum = parseFloat(loanAmount);
    const depositNum = parseFloat(deposit);
    const loanPeriodNum = parseInt(loanPeriod, 10);

    // Check if values are valid numbers
    if (isNaN(loanAmountNum) || isNaN(depositNum) || isNaN(loanPeriodNum)) {
      setError("Please enter valid numbers.");
      return;
    }

    // Calculate loan amount after deposit
    const loanAmountAfterDeposit = loanAmountNum - depositNum;

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate number of months for the loan
    const loanMonths = loanPeriodNum * 12;

    // Calculate monthly payment using the formula for a fixed-rate loan
    const monthlyPaymentCalc =
      (loanAmountAfterDeposit *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanMonths) - 1);

    // Calculate total repayment
    const totalRepaymentCalc = monthlyPaymentCalc * loanMonths;

    // Convert results to PKR
    const monthlyPaymentPKR = (monthlyPaymentCalc * exchangeRate).toFixed(2);
    const totalRepaymentPKR = (totalRepaymentCalc * exchangeRate).toFixed(2);

    // Set the results
    setMonthlyPayment(monthlyPaymentPKR);
    setTotalRepayment(totalRepaymentPKR);
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex flex-col py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Loan Calculator</h2>
      <div className="container mx-auto max-w-md">
        <form>
          <div className="mb-6">
            <label htmlFor="loanCategory" className="block text-lg font-semibold">Loan Category</label>
            <select
              id="loanCategory"
              className="w-full p-2 border rounded"
              value={loanCategory}
              onChange={(e) => setLoanCategory(e.target.value)}
            >
              <option value="wedding">Wedding</option>
              <option value="home">Home Construction</option>
              <option value="business">Business Startup</option>
              <option value="education">Education</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="loanPeriod" className="block text-lg font-semibold">Loan Period</label>
            <select
              id="loanPeriod"
              className="w-full p-2 border rounded"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
            >
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
              <option value="7">7 Years</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="loanAmount" className="block text-lg font-semibold">Loan Amount</label>
            <input
              id="loanAmount"
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="deposit" className="block text-lg font-semibold">Initial Deposit</label>
            <input
              id="deposit"
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Enter your deposit amount"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>} {/* Display error message */}

          <button
            type="button"
            onClick={calculateLoan}
            className="px-6 py-3 bg-red-900 text-white rounded-lg shadow-lg"
          >
            Calculate Loan
          </button>
        </form>

        {/* Display loan calculation result */}
        {monthlyPayment && totalRepayment && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Loan Calculation Results</h3>
            <p>Monthly Payment: <strong>₨ {monthlyPayment}</strong></p>
            <p>Total Repayment: <strong>₨ {totalRepayment}</strong></p>

            {/* Register Button */}
            <div className="mt-6">
              <button
                onClick={goToRegister}
                className="px-6 py-3 bg-red-900 text-white rounded-lg shadow-lg hover:bg-red-800 transition duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
