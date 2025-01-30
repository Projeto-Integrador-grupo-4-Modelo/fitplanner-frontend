import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

const FormExercicios = () => {
  // Definir os estados no início do componente
  const [exercicios, setExercicios] = useState([
    { nomeExercicio: "", repeticoes: "", series: "", instrucao: "" },
  ]);
  const [mensagem, setMensagem] = useState("");

  // Função para lidar com a mudança nos campos do exercício
  const handleExercicioChange = (index, e) => {
    const novosExercicios = [...exercicios];
    novosExercicios[index] = {
      ...novosExercicios[index],
      [e.target.name]: e.target.value,
    };
    setExercicios(novosExercicios);
  };

  // Função para salvar as informações
  const handleSalvar = (e) => {
    e.preventDefault(); // Impede o envio do formulário

    setMensagem("Exercício salvo com sucesso! ✅");

    // Limpar os campos após o envio
    setExercicios([
      { nomeExercicio: "", repeticoes: "", series: "", instrucao: "" },
    ]);

    // Opcional: Remover a mensagem após alguns segundos
    setTimeout(() => setMensagem(""), 6000);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Cadastrar Exercícios</h2>
        {exercicios.map((exercicio, index) => (
          <div key={index} className="border p-4 mb-2 rounded-lg relative">
            <label className="block text-gray-700 font-bold">Nome do Exercício</label>
            <input
              type="text"
              name="nomeExercicio"
              value={exercicio.nomeExercicio}
              onChange={(e) => handleExercicioChange(index, e)}
              className="w-full p-2 border rounded"
              required
            />

            <label className="block text-gray-700 font-bold">Repetições</label>
            <input
              type="number"
              name="repeticoes"
              value={exercicio.repeticoes}
              onChange={(e) => handleExercicioChange(index, e)}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-gray-700 font-bold">Séries</label>
            <input
              type="number"
              name="series"
              value={exercicio.series}
              onChange={(e) => handleExercicioChange(index, e)}
              className="w-full p-2 border rounded"
              required
            />

            <label className="block text-gray-700 font-bold">Instrução</label>
            <input
              type="text"
              name="instrucao"
              value={exercicio.instrucao}
              onChange={(e) => handleExercicioChange(index, e)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}

        <button
          className="w-full bg-yellow-500 text-white font-bold py-2 px-6 rounded mt-4 hover:bg-yellow-400 transition"
          onClick={handleSalvar}
        >
          Salvar Exercicio
        </button>

        {mensagem && <p className="text-green-600 font-medium mt-2">{mensagem}</p>}
      </div>
    </div>
  );
};

export default FormExercicios;

