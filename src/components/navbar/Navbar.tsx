import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X, Dumbbell, PlusCircle, Trash } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userType, logout } = useAuth();

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

          {/* Opções para Aluno */}
          {userType === "ALUNO" && (
            <>
              <Link
                to="/meus-treinos"
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                Meus Treinos
              </Link>
              <button
                onClick={logout}
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                Sair
              </button>
            </>
          )}

          {/* Opções para Professor */}
          {userType === "PROFESSOR" && (
            <>
              <Link
                to="/cadastrar-treino"
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                <PlusCircle size={20} /> Cadastrar Treino
              </Link>
              <Link
                to="/treinos"
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                <Dumbbell size={20} /> Ver Todos os Treinos
              </Link>
              <Link
                to="/deletar-treino"
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                <Trash size={20} /> Deletar Treino
              </Link>
              <button
                onClick={logout}
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                Sair
              </button>
            </>
          )}

          {/* Se não estiver logado */}
          {!userType && (
            <Link
              to="/login"
              className="bg-[#B8860B] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#9B7200] transition-all transform hover:scale-105"
            >
              <User size={20} />
              <span>Área do Aluno</span>
            </Link>
          )}
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
              className="text-white hover:bg-[#9B7200] px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-colors"
            >
              Início
            </Link>

            {userType === "ALUNO" && (
              <Link
                to="/meus-treinos"
                className="text-white hover:bg-[#9B7200] px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-colors"
              >
                Meus Treinos
              </Link>
            )}

            {userType === "PROFESSOR" && (
              <>
                <Link
                  to="/cadastrar-treino"
                  className="text-white hover:bg-[#9B7200] px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-colors"
                >
                  <PlusCircle size={20} />
                  Cadastrar Treino
                </Link>
                <Link
                  to="/ver-treinos"
                  className="text-white hover:bg-[#9B7200] px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-colors"
                >
                  <Dumbbell size={20} />
                  Ver Todos os Treinos
                </Link>
                <Link
                  to="/deletar-treino"
                  className="text-white hover:bg-[#9B7200] px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-colors"
                >
                  <Trash size={20} />
                  Deletar Treino
                </Link>
              </>
            )}

            {!userType && (
              <Link
                to="/login"
                className="bg-[#B8860B] text-white px-6 py-2 rounded-full flex items-center gap-2 justify-center hover:bg-[#9B7200] transition-colors"
              >
                <User size={20} />
                <span>Área do Aluno</span>
              </Link>
            )}

            {/* Logout Button in Mobile Menu */}
            {userType && (
              <button
                onClick={logout}
                className="text-white hover:text-[#B8860B] transition-colors"
              >
                Sair
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAuth(): { userType: any; logout: any } {
  throw new Error("Function not implemented.");
}
