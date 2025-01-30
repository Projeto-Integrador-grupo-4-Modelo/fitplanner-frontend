import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ListarTreinos from "../../components/treino/listartreino/ListarTreino";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { buscar } from "../../service/Service";

function Dashboard() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { usuario } = context;
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

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    } else {
      const carregarDados = async () => {
        await buscar(`/usuarios/${usuario.id}`, setFormData, {
          headers: { Authorization: usuario.token },
        });
      };
      carregarDados();
    }
  }, [usuario.token]);

  return (
    <>
      <div className="p-8 bg-gray-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold">Bem-vindo, {formData.nome}!</h1>

        <div className="mt-4 flex items-center gap-4">
          <img
            src={
              usuario.foto ||
              "https://ik.imagekit.io/viclaraa/USUARIOOO.jpg?updatedAt=1738258237914"
            }
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-2 border-yellow-500"
          />

          <div>
            <p>
              <strong>Email:</strong> {formData.usuario}
            </p>
            <p>
              <strong>Função:</strong> {formData.tipo}
            </p>
            <p>
              <strong>IMC:</strong> {formData.imc}
            </p>
          </div>
        </div>
      </div>
      <ListarTreinos />
    </>
  );
}

export default Dashboard;
