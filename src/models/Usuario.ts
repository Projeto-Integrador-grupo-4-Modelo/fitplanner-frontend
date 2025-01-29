import Treino from "./Treino";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  imc: string;
  altura: number;
  peso: number;
  treino: Treino | null;
}
