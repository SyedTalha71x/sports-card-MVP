/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Footer from "./components/footer";
import Auth from "./authentication/auth";
import ForgotPassword from "./authentication/forget-password";
import CardDetailsPack from "./pages/single-card";
import CheckoutPage from "./pages/checkout";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  
  const isCheckoutPage = location.pathname.startsWith("/checkout");

  return (
    <>
      {!isCheckoutPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/card-details-pack/:id" element={<CardDetailsPack />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default App;
