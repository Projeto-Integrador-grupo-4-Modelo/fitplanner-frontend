import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/base/dashboard");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://ik.imagekit.io/viclaraa/download%20(2).png?updatedAt=1738181915415"
            alt=""
            className="h-20"
          />
          <h1 className="text-3xl font-bold text-[#1a1a1a]">
            <span className="text-[#f5c518]">FIT</span> PLANNER
          </h1>
        </div>
        <form onSubmit={login} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="usuario"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              name="senha"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f5c518] text-[#1a1a1a] py-2 rounded font-semibold hover:bg-[#e3b616] transition-colors"
          >
            Entrar
          </button>
          <p className="text-center text-gray-600 mt-4">
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#f5c518] hover:underline font-bold"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
