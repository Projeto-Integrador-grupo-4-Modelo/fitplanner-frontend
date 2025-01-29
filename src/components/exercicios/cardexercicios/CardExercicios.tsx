import { Link } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";
import { Edit2, Trash2 } from "lucide-react";

// interface CardExerciciosProps {
//   exercicio: Exercicio;
//   onEdit: (exercicio: Exercicio) => void;
//   onDelete: (id: number) => void;
// }

function CardExercicios() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <header className="text-xl font-semibold text-gray-900">Exercício</header>
      <p className="text-gray-900">nome exercicio</p>
      <p className="text-gray-600"> séries</p>
      <p className="text-gray-600"> repetições</p>

      <p className="text-sm italic text-gray-600">instruções</p>

      <div className="flex space-x-2 mt-4">
        {/* <Link to="/editar-exercicio"> */}
        <button className="p-2 text-[#f5c518] hover:bg-gray-100 rounded-full">
          <Edit2 size={20} />
        </button>
        {/* </Link> */}

        {/* <Link to="/deletar-exercicio"> */}
        <button className="p-2 text-red-500 hover:bg-gray-100 rounded-full">
          <Trash2 size={20} />
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default CardExercicios;
