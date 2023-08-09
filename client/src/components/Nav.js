import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-[#536162] p-4 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">
              TekMoney
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white mx-4">
              Home
            </a>
            <a href="/" className="text-white mx-4">
              About
            </a>
            <a href="/" className="text-white mx-4">
              Services
            </a>
            <a href="/" className="text-white mx-4">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                <GiHamburgerMenu className="text-white text-2xl" />
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full">
                Login
              </button>
              <button className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full">
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
              About
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Services
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Contact
            </a>
            <div className="flex flex-col justify-left mt-4">
              <button className="bg-[#424642] text-white hover:bg-[#C06014] pl-4 py-2 rounded-full">
                Login
              </button>
              <button className="bg-[#424642] text-white hover:bg-[#C06014] pl-4 py-2 rounded-full mt-2">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
