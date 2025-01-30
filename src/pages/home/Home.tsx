import { Clock, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
