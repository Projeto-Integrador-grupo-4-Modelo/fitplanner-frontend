import Exercicio from "./Exercicio";
import Usuario from "./Usuario";

export default interface Treino {
  id: number;
  nomeTreino: string;
  descricao: string;
  duracaoMin: string;
  categoria: string;
  exercicio: Exercicio[];
  usuario: Usuario | null;
}
