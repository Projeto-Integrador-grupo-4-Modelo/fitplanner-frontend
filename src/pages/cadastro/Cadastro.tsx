import { Dumbbell } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    imc: "",
    altura: 0,
    peso: 0,
    treino: null,
    tipo: "",
  });

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  useEffect(() => {
    if (formData.id !== 0) {
      retornar();
    }
  }, [formData]);

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === formData.senha && formData.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, formData, setFormData);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setFormData({ ...formData, senha: "" });
      setConfirmaSenha("");
    }

    retornar();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://ik.imagekit.io/viclaraa/download%20(2).png?updatedAt=1738181915415"
            alt=""
            className="h-20"
          />
          <h1 className="text-3xl font-bold text-[#1a1a1a] flex flex-col items-center">
            <div>
              <span className="text-[#f5c518] ">FIT</span> PLANNER
            </div>
            Cadastro
          </h1>
        </div>

        <form onSubmit={cadastrarNovoUsuario} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="usuario"
              value={formData.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Confirmar Senha</label>
            <input
              type="password"
              name="confirmaSenha"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Foto</label>
            <input
              type="text"
              name="foto"
              value={formData.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Função</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                atualizarEstado(e)
              }
              className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
            >
              <option value="student">Aluno</option>
              <option value="trainer">Professor</option>
            </select>
          </div>
          <>
            <div className="flex flex-row gap-2">
              <div>
                <label className="block text-gray-700 mb-2">Altura (cm)</label>
                <input
                  type="number"
                  name="altura"
                  value={formData.altura}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                  className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Peso (kg)</label>
                <input
                  type="number"
                  name="peso"
                  value={formData.peso}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                  className="w-full p-2 border rounded focus:ring-[#f5c518] focus:border-[#f5c518] border-black"
                />
              </div>
            </div>
          </>

          <button
            type="submit"
            className="w-full bg-[#f5c518] text-[#1a1a1a] py-2 rounded font-semibold hover:bg-[#e3b616] transition-colors"
          >
            Cadastrar
          </button>

          <p className="text-center text-gray-600 mt-4">
            Já tem uma conta?{" "}
            <Link to="/" className="text-[#f5c518] hover:underline">
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
