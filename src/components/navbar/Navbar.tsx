import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-gray-900 py-2 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-gray-900 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center h-16">
          <img
            src="./src/assets/logofit.png"
            alt="FitPlanner Logo"
            className="h-auto w-44"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-white hover:text-[#B8860B] transition-colors"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="bg-[#B8860B] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#9B7200] transition-all transform hover:scale-105"
          >
            <User size={20} />
            <span>Área do Aluno</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link
              to="/"
              className="text-white hover:text-white transition-colors px-6 py-2 rounded-full flex items-center gap-2 justify-center hover:bg-[#9B7200] transition-colors"
            >
              Início
            </Link>

            <Link
              to="/login"
              className="bg-[#B8860B] text-white px-6 py-2 rounded-full flex items-center gap-2 justify-center hover:bg-[#9B7200] transition-colors"
            >
              <User size={20} />
              <span>Área do Aluno</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
