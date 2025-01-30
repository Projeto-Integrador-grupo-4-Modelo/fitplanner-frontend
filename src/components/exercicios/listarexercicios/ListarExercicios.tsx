import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";
import { AuthContext } from "../../../context/AuthContext";
import { buscar } from "../../../service/Service";
import CardExercicios from "../cardexercicios/CardExercicios";

function ListarExercicios() {
  const navigate = useNavigate();
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarExercicios() {
    try {
      await buscar("/exercicios", setExercicios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarExercicios();
  }, [exercicios.length]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">
        Lista de Exercícios
      </h2>
      {exercicios.length > 0 ? (
        exercicios.map((exercicio) => (
          <CardExercicios key={exercicio.id} exercicio={exercicio} />
        ))
      ) : (
        <p className="text-gray-600">Nenhum exercício cadastrado.</p>
      )}
    </div>
  );
}

export default ListarExercicios;
