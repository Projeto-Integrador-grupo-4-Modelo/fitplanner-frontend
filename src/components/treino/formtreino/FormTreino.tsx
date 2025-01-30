import { useState, useEffect, useContext, ChangeEvent } from "react";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../context/AuthContext";
import Exercicio from "../../../models/Exercicio";
import Usuario from "../../../models/Usuario";
import Treino from "../../../models/Treino";
import { useNavigate } from "react-router-dom";
import ListarTreinos from "../listartreino/ListarTreino";

function FormTreinos() {
  const navigate = useNavigate();

  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState<number | null>(
    null
  );
  const [treino, setTreino] = useState<Treino>({
    id: 0,
    nomeTreino: "",
    descricao: "",
    duracaoMin: "",
    categoria: "",
    exercicio: null,
    usuario: null,
  });

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token != "") {
      const carregarDados = async () => {
        await buscar("/usuarios/all", setUsuarios, {
          headers: { Authorization: token },
        });
        await buscar("/exercicios", setExercicios, {
          headers: { Authorization: token },
        });
      };
      carregarDados();
    } else {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!treino.usuario || !treino.usuario.id) {
      alert("Selecione um aluno antes de cadastrar o treino.");
      return;
    }

    console.log(treino);

    if (treinoSelecionado !== null) {
      await atualizar(`/treinos/${treinoSelecionado}`, treino, setTreinos, {});
    } else {
      await cadastrar("/treinos", treino, setTreinos, {
        headers: { Authorization: token },
      });
    }
    setTreinoSelecionado(null);
  };

  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTreino({
      ...treino,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className="max-w-2xl mx-auto  p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-[#f5c518]">
          {treinoSelecionado ? "Editar Treino" : "Cadastrar Novo Treino"}
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block ">Selecione o Aluno</label>
          <select
            name="usuario"
            value={treino.usuario?.id || ""}
            onChange={(e) =>
              setTreino({
                ...treino,
                usuario:
                  usuarios.find((u) => u.id === Number(e.target.value)) || null,
              })
            }
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione um Aluno</option>
            {usuarios.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nome}
              </option>
            ))}
          </select>

          <label className="block ">Nome do Treino</label>
          <input
            type="text"
            name="nomeTreino"
            value={treino.nomeTreino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="w-full p-2 border rounded"
            required
          />
          <label className="block ">descrição</label>
          <input
            type="text"
            name="descricao"
            value={treino.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block ">Duração (min)</label>
          <input
            type="text"
            name="duracaoMin"
            value={treino.duracaoMin}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block ">Categoria</label>
          <input
            type="text"
            name="categoria"
            value={treino.categoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block ">Exercicio</label>
          <select
            name="exercicio"
            value={treino.exercicio?.id || ""}
            onChange={(e) =>
              setTreino({
                ...treino,
                exercicio:
                  exercicios.find((ex) => ex.id === Number(e.target.value)) ||
                  null,
              })
            }
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione um Exercício</option>
            {exercicios.map((exercicio) => (
              <option key={exercicio.id} value={exercicio.id}>
                {exercicio.nomeExercicio}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 mt-4 rounded"
          >
            {treinoSelecionado ? "Atualizar Treino" : "Salvar Treino"}
          </button>
        </form>
      </div>
      <ListarTreinos />
    </>
  );
}

export default FormTreinos;
