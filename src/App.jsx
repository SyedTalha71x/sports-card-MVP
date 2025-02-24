/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Footer from "./components/footer";
import Auth from "./authentication/auth";
import ForgotPassword from "./authentication/forget-password";
import CardDetailsPack from "./pages/single-card";
import CheckoutPage from "./pages/checkout";
import FAQPage from "./partials/faqs";
import PrivacyPolicy from "./partials/privacy-policy";
import AddPaymentMethod from "./pages/add-payment-method";

import DashboardLayout from "./layout/dashboard-layout";
import DashboardHome from "./partials/dashboard";
import AccountDetails from "./partials/account-details";
import MyOrders from "./partials/my-orders";
import Rewards from "./partials/my-rewards";
import BillingSection from "./partials/billing-section";

import ScrollToTop from "./layout/Scroll-to-top"; // Import the component

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
      <ScrollToTop /> {/* Add this line to handle scrolling */}
      {!isCheckoutPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/card-details-pack/:id" element={<CardDetailsPack />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/add-payment-method" element={<AddPaymentMethod />} />

        <Route path="user-profile" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-rewards" element={<Rewards />} />
          <Route path="billing" element={<BillingSection />} />
        </Route>
      </Routes>
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default App;
