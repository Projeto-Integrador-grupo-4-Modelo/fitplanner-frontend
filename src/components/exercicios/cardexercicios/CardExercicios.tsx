import { Edit2, Trash2 } from "lucide-react";
import Exercicio from "../../../models/Exercicio";

interface CardExerciciosProps {
  exercicio: Exercicio;
  onEdit: (exercicio: Exercicio) => void;
  onDelete: (id: number) => void;
}

import { useNavigate } from "react-router-dom";

function CardExercicios({ exercicio, onDelete }: CardExerciciosProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border w-80">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-[#f5c518] text-xl">💪</span>
          <h3 className="text-lg font-semibold text-gray-900">
            {exercicio.nomeExercicio}
          </h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() =>
              navigate("/editar-exercicio", { state: { exercicio } })
            }
            className="p-2 text-[#f5c518] hover:bg-gray-100 rounded-full"
          >
            <Edit2 size={20} />
          </button>

          <button
            onClick={() => onDelete(exercicio.id)}
            className="p-2 text-red-500 hover:bg-gray-100 rounded-full"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="border-t mt-2 pt-2">
        <p className="text-gray-700 font-medium">{exercicio.instrucao}</p>
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <p>
            <strong>Séries:</strong> {exercicio.series}
          </p>
          <p>
            <strong>Repetições:</strong> {exercicio.repeticoes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardExercicios;
