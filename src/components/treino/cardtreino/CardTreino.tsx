import { Edit2, Trash2 } from "lucide-react";
import Treino from "../../../models/Treino";
import { Link } from "react-router-dom";
import { deletar } from "../../../service/Service";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
interface CardTreinosProps {
  treino: Treino;
}

function CardTreino({ treino }: CardTreinosProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function deletarTreino() {
    try {
      await deletar(`/treinos/${treino.id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Treino apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o treino.");
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border w-80">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#f5c518] text-lg">🏋️‍♂️</span>
          <h3 className="text-lg font-semibold text-gray-900">
            {treino.nomeTreino}
          </h3>
        </div>

        <div className="flex space-x-1">
          <button className="p-1 text-[#f5c518] hover:bg-gray-100 rounded-full">
            <Edit2 size={18} />
          </button>
          <button
            className="p-1 text-red-500 hover:bg-gray-100 rounded-full"
            onClick={deletarTreino}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <hr className="my-2" />

      <p className="text-gray-900 text-sm">{treino.descricao}</p>

      <div className="flex justify-between text-gray-700 text-sm mt-2">
        <p>
          <span className="font-semibold">Duração:</span> {treino.duracaoMin}
          min
        </p>
        <p>
          <span className="font-semibold">Categoria:</span> {treino.categoria}
        </p>
      </div>

      {treino.exercicio && treino.exercicio.length > 0 && (
        <div className="mt-3 bg-gray-50 p-2 rounded-lg">
          <h4 className="text-gray-800 font-semibold mb-2">Exercícios:</h4>
          <ul className="space-y-2">
            {treino.exercicio.map((exercicio) => (
              <li
                key={exercicio.id}
                className="text-sm text-gray-700 border-b pb-1 last:border-b-0"
              >
                <span className="font-medium">{exercicio.nomeExercicio}</span> -{" "}
                {exercicio.series}x{exercicio.repeticoes}
                <p className="text-xs text-gray-500">{exercicio.instrucao}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardTreino;
