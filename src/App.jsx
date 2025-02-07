/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Footer from "./components/footer";
import Auth from "./authentication/auth";
import ForgotPassword from "./authentication/forget-password";
import CardDetailsPack from './pages/single-card'



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login-signup" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/card-details-pack/:id" element={<CardDetailsPack />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
