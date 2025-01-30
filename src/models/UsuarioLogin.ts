export default interface UsuarioLogin {
  id: 0;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  token: string;
  tipo: "ALUNO" | "PROFESSOR" | "";
}
