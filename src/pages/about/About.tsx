import { Target, Heart, Award } from "lucide-react";

import ModalBianca from "./ModalBianca";
import ModalKemilly from "./ModalKemilly";
import ModalPriscila from "./ModalPriscila";
import ModalBruna from "./ModalBruna";
import ModalVitor from "./ModalVitor";
import ModalRubio from "./ModalRubio";
import ModalGuilherme from "./ModalGuilherme";
import ModalVictoria from "./ModalVictoria";

function About() {
  return (
    <div>
      <section className="relative bg-[#1A1A1A] py-20">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://i.imgur.com/BaH0pXm.jpg"
            alt="Personal Trainer"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center p-12">
          <h1 className="text-4xl font-bold text-[#F5C518] mb-6">Sobre Nós</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Nossa plataforma revoluciona a forma como academias e personal
            trainers gerenciam treinos e acompanham o desempenho dos alunos.
          </p>
        </div>

        <div className="py-24"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-white hover:scale-105 hover:shadow-xl">
          <div>
            <Target className="h-12 w-12 text-[#F5C518] mx-auto mb-4 " />
            <h3 className="text-xl font-semibold mb-3 ">Missão</h3>
            <p className="text-white">
              Potencializar o desempenho de personal trainers e academias,
              oferecendo tecnologia intuitiva e eficiente para gestão de
              treinos.
            </p>
          </div>
          <div>
            <Heart className="h-12 w-12 text-[#F5C518] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p className="text-white">
              Compromisso com a inovação, excelência e a evolução contínua do
              mercado fitness.
            </p>
          </div>
          <div>
            <Award className="h-12 w-12 text-[#F5C518] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Visão</h3>
            <p className="text-white">
              Ser a plataforma mais confiável e eficiente para personal trainers
              e academias, promovendo saúde e performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#F5C518] mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <ModalBianca />
              <h3 className="text-xl font-semibold">Bianca Jesus</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalKemilly />
              <h3 className="text-xl font-semibold">Kemilly Fagundes</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalPriscila />
              <h3 className="text-xl font-semibold">Priscila Santos</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalBruna />
              <h3 className="text-xl font-semibold">Bruna Bosco</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalVitor />
              <h3 className="text-xl font-semibold">Vitor Cavalcante</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalRubio />
              <h3 className="text-xl font-semibold">Rubio Dainton</h3>
              <p className="text-gray-400">Product Owner</p>
            </div>
            <div className="text-center text-white">
              <ModalGuilherme />
              <h3 className="text-xl font-semibold">Guilherme Lima</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center text-white">
              <ModalVictoria />
              <h3 className="text-xl font-semibold">Victória Lara</h3>
              <p className="text-gray-400">Tester</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
