import { Edit2, Trash2 } from "lucide-react";

function CardTreino() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border w-80">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#f5c518] text-lg">🏋️‍♂️</span>
          <h3 className="text-lg font-semibold text-gray-900">
            Nome do Treino
          </h3>
        </div>

        <div className="flex space-x-1">
          <button className="p-1 text-[#f5c518] hover:bg-gray-100 rounded-full">
            <Edit2 size={18} />
          </button>
          <button className="p-1 text-red-500 hover:bg-gray-100 rounded-full">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <hr className="my-2" />

      <p className="text-gray-900 text-sm">Descrição do treino</p>

      <div className="flex justify-between text-gray-700 text-sm mt-2">
        <p>
          <span className="font-semibold">Duração:</span> X min
        </p>
        <p>
          <span className="font-semibold">Categoria:</span> Y
        </p>
      </div>
    </div>
  );
}

export default CardTreino;
