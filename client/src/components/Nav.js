import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };
  const signUpPage = () => {
    navigate("/register");
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-[#536162] p-4 pb-4 z-10 mb-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">
              TekMoney
            </a>
          </div>
          <div className="hidden md:flex ">
            <a href="/" className="text-white mx-4">
              Home
            </a>
            <a href="/" className="text-white mx-4">
              Articles
            </a>
            <a href="/" className="text-white mx-4">
              Calculators
            </a>
            <a href="/" className="text-white mx-4">
              About
            </a>
          </div>
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                <GiHamburgerMenu className="text-white text-2xl" />
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={loginPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] px-4  py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={signUpPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#536162] mt-2">
            <a href="/" className="block text-white py-2 px-6">
              Home
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Articles
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Calculators
            </a>
            <a href="/" className="block text-white py-2 px-6">
              About
            </a>

            <div className="flex flex-col justify-left mt-4">
              <button
                onClick={loginPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] pl-4 py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={signUpPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] pl-4 py-2 rounded-full mt-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
