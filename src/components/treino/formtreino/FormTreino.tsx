import { useState, useEffect } from "react";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { Trash2, Edit2, Plus } from "lucide-react";

interface Exercicio {
  id?: number;
  nomeExercicio: string;
  repeticoes: string;
  series: string;
  instrucao: string;
}

interface Treino {
  id?: number;
  nomeTreino: {
    descricao: string;
    duracaoMin: string;
    categoria: string;
  };
  exercicios: Exercicio[];
  userId?: number;
}

const FormTreinos = () => {
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [usuarios, setUsuarios] = useState<{ id: number; nome: string }[]>([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState<number | null>(
    null
  );
  const [mostrarExercicios, setMostrarExercicios] = useState(false);
  const [novoTreino, setNovoTreino] = useState<Treino>({
    nomeTreino: { descricao: "", duracaoMin: "", categoria: "" },
    exercicios: [],
    userId: undefined,
  });

  useEffect(() => {
    const carregarDados = async () => {
      await buscar("/treinos", setTreinos, {});
      await buscar("/usuarios", setUsuarios, {});
    };
    carregarDados();
  }, []);

  // Carregar treino para edição
  const editarTreino = (treino: Treino) => {
    setTreinoSelecionado(treino.id ?? null);
    setNovoTreino(treino);
    setMostrarExercicios(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNovoTreino({
      ...novoTreino,
      nomeTreino: {
        ...novoTreino.nomeTreino,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNovoTreino({ ...novoTreino, userId: Number(e.target.value) });
  };

  const handleExercicioChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const novosExercicios = [...novoTreino.exercicios];
    novosExercicios[index] = {
      ...novosExercicios[index],
      [e.target.name]: e.target.value,
    };
    setNovoTreino({ ...novoTreino, exercicios: novosExercicios });
  };

  const adicionarExercicio = () => {
    setMostrarExercicios(true);
    setNovoTreino({
      ...novoTreino,
      exercicios: [
        ...novoTreino.exercicios,
        { nomeExercicio: "", repeticoes: "", series: "", instrucao: "" },
      ],
    });
  };

  const removerExercicio = (index: number) => {
    const novosExercicios = novoTreino.exercicios.filter((_, i) => i !== index);
    setNovoTreino({ ...novoTreino, exercicios: novosExercicios });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTreino.userId) {
      alert("Selecione um aluno antes de cadastrar o treino.");
      return;
    }

    if (treinoSelecionado !== null) {
      // Atualizar treino existente
      await atualizar(
        `/treinos/${treinoSelecionado}`,
        novoTreino,
        setTreinos,
        {}
      );
    } else {
      // Cadastrar novo treino
      await cadastrar("/cadastrartreinos", novoTreino, setTreinos, {});
    }

    setNovoTreino({
      nomeTreino: { descricao: "", duracaoMin: "", categoria: "" },
      exercicios: [],
      userId: undefined,
    });
    setTreinoSelecionado(null);
    setMostrarExercicios(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {treinoSelecionado ? "Editar Treino" : "Cadastrar Novo Treino"}
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700">Selecione o Aluno</label>
        <select
          name="userId"
          value={novoTreino.userId || ""}
          onChange={handleUserChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value=""> Selecione um Aluno </option>
          {usuarios.map((user) => (
            <option key={user.id} value={user.id}>
              {user.nome}
            </option>
          ))}
        </select>

        <label className="block text-gray-700">Nome do Treino</label>
        <input
          type="text"
          name="descricao"
          value={novoTreino.nomeTreino.descricao}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <label className="block text-gray-700">Duração (min)</label>
        <input
          type="text"
          name="duracaoMin"
          value={novoTreino.nomeTreino.duracaoMin}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <label className="block text-gray-700">Categoria</label>
        <input
          type="text"
          name="categoria"
          value={novoTreino.nomeTreino.categoria}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <h3 className="font-bold mt-4">Exercícios</h3>
        {mostrarExercicios &&
          novoTreino.exercicios.map((exercicio, index) => (
            <div key={index} className="border p-4 mb-2 rounded-lg relative">
              <label className="block text-gray-700">Nome do Exercício</label>
              <input
                type="text"
                name="nomeExercicio"
                value={exercicio.nomeExercicio}
                onChange={(e) => handleExercicioChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />

              <label className="block text-gray-700">Repetições</label>
              <input
                type="text"
                name="repeticoes"
                value={exercicio.repeticoes}
                onChange={(e) => handleExercicioChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />

              <label className="block text-gray-700">Séries</label>
              <input
                type="text"
                name="series"
                value={exercicio.series}
                onChange={(e) => handleExercicioChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />

              <label className="block text-gray-700">Instrução</label>
              <input
                type="text"
                name="instrucao"
                value={exercicio.instrucao}
                onChange={(e) => handleExercicioChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />

              <button
                type="button"
                onClick={() => removerExercicio(index)}
                className="absolute top-2 right-2 text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

        <button
          type="button"
          onClick={adicionarExercicio}
          className="text-yellow-600 mt-2 flex items-center gap-2"
        >
          <Plus size={20} /> Adicionar Exercício
        </button>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 mt-4 rounded"
        >
          {treinoSelecionado ? "Atualizar Treino" : "Salvar Treino"}
        </button>
      </form>

      <h3 className="font-bold mt-6">Treinos Cadastrados</h3>
      {treinos.map((treino) => (
        <div
          key={treino.id}
          className="p-2 border rounded mt-2 flex justify-between items-center"
        >
          <span>{treino.nomeTreino.descricao}</span>
          <button
            onClick={() => editarTreino(treino)}
            className="text-blue-600"
          >
            <Edit2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FormTreinos;
