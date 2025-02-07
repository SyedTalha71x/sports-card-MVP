/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLogo from "../../public/nav_logo.svg";
import WhiteNavLogo from "../../public/white-nav-logo.svg";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage = location.pathname.includes("login-signup") || location.pathname.includes("forgot-password") || location.pathname.includes("/card-details-pack");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${ isAuthPage ? 'shadow-2xl' : ''} z-50 transition-colors duration-300 ${
        isAuthPage ? "bg-white" : isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto ${isAuthPage ? 'p-3' : 'p-7'}`}>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src={isAuthPage ? WhiteNavLogo : NavLogo} alt="Navigation Logo" />
          </div>
          <div>
        { !isAuthPage ? (   <button className="inline-flex items-center px-4 py-2 bg-[#FFFFFF] rounded-2xl text-sm font-medium text-[#2F456C] cursor-pointer">
              My Account
            </button>)  : (
            <button className="inline-flex items-center px-4 py-2 bg-[#2F456C] rounded-2xl text-sm font-medium text-white cursor-pointer">   
                Login/Signup
            </button>)}
          </div>
        </div>
      </div>
    </nav>
  );
}
