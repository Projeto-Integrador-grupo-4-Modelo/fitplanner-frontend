import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  Dumbbell,
  Trash,
  User,
  Menu,
  X,
  Target,
  Clock,
  Users,
} from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userType, logout, isAluno, isProfessor } = useContext(AuthContext);

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

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/dashboard"
            className="text-white hover:text-[#B8860B] transition-colors"
          >
            Home
          </Link>
          {isAluno && (
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
          {isProfessor && (
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
    </nav>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#1A1A1A] text-white">
        <main className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://i.imgur.com/8fyn8JV.jpg"
              alt="Personal Trainer"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 max-w-3xl text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transforme sua carreira como
              <span className="text-[#F5C518]"> Personal Trainer</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Gerencie seus clientes, agende treinos e acompanhe o progresso com
              nossa plataforma completa para personal trainers.
            </p>
            <Link
              to="/"
              className="bg-[#F5C518] text-[#1A1A1A] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-90 active:scale-95"
            >
              Começar Agora
            </Link>
          </div>
        </main>

        <section className="bg-black bg-opacity-30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por que escolher o{" "}
              <span className="text-[#F5C518]">FitPlanner</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Target className="w-8 h-8 text-[#F5C518]" />}
                title="Defina Metas"
                description="Estabeleça objetivos claros e acompanhe o progresso dos seus alunos"
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-[#F5C518]" />}
                title="Gestão de Tempo"
                description="Organize sua agenda e horários de forma eficiente"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-[#F5C518]" />}
                title="Gestão de Alunos"
                description="Gerencie seus alunos e suas fichas de treino em um só lugar"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-[#F5C518] transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Home;
