import React from "react";


function Footer() {
  return <div></div>;
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-9 items-center">
        <div className="flex justify-center items-center mb-4">
          <img
            src="https://ik.imagekit.io/2ttuouket/Imagem_do_WhatsApp_de_2025-01-29_%C3%A0_s__15.14.24_83ecec4c-removebg-preview.png?updatedAt=1738176824431"
            alt="Primeira Imagem"
            className="w-64 h-auto"
          />
        </div>
        <div className="border-t border-white-500 mb-8"></div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"> 
            <div className="flex flex-col items-start"> 
              <h3 className="text-lg font-semibold text-white mb-4">
                Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contato@fitplanner.com</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start"> 
              <h3 className="text-lg font-semibold text-white mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    to="/"
                    className="hover:text-yellow-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cadastro"
                    className="hover:text-yellow-300 transition-colors">
                    Cadastro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-yellow-300 transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div > 
              <h3 className="text-lg font-semibold text-white mb-4">
                Redes Sociais
              </h3>
              <a href="https://ik.imagekit.io/2ttuouket/pngegg.png?updatedAt=1738173712341" className="text-white hover:text-yellow-300 transition-colors">
                <Github className="h-10 w-8 " /> 
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-white">
          <p>&copy; 2025 Fit Planner. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
