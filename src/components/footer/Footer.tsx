import React from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>contato@conectarh.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-purple-600 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/produto"
                  className="hover:text-purple-600 transition-colors"
                >
                  Produto
                </Link>
              </li>
              <li>
                <Link
                  to="/cadastro-funcionario"
                  className="hover:text-purple-600 transition-colors"
                >
                  Cadastro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Redes Sociais
            </h3>
            <a href="https://github.com/Projeto-Integrador-grupo-4-Modelo/rh-frontend" className="hover:text-blue-400 transition-colors">
              <Github className="h-10 w-8 " />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2025 Conecta RH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  