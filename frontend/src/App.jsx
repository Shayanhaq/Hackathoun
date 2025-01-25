import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoanCalculator from "./components/LoanCalculator";
import RegistrationPage from "./components/RegistrationPage";
import LoanRequestForm from "./components/LoanRequestForm";
import AdminPanel from "./components/AdminPanel";
import Dashboard from "./components/Dashboard";
import SubcategoryPage from "./components/SubcategoryPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/loan-calculator" element={<LoanCalculator />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/loan-request" element={<LoanRequestForm />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loan-category/:category" element={<SubcategoryPage />} />
    </Routes>
  );
};

export default App;

