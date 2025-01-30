import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    handleLogout();
    navigate("/");
  }
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://ik.imagekit.io/viclaraa/download%20(1).png?updatedAt=1738257115184"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/base/dashboard"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#E4B61A] hover:bg-[#E4B61A] hover:text-black transition-all duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/base/treino"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#E4B61A] hover:bg-[#E4B61A] hover:text-black transition-all duration-300"
            >
              Treino
            </Link>
            <Link
              to="/"
              onClick={logout}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#fd2c2c] hover:bg-[#ff3333] hover:text-black transition-all duration-300"
            >
              Sair
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E4B61A] hover:text-[#E4B61A] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/base/treino"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#E4B61A] hover:bg-[#E4B61A] hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Treino
              </Link>
              <Link
                to="/base/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#E4B61A] hover:bg-[#E4B61A] hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                onClick={logout}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#fd2c2c] hover:bg-[#ff3333] hover:text-black transition-all duration-300"
                to="/"
              >
                Sair
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
