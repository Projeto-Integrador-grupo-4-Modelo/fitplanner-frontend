export default interface UsuarioLogin {
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  token: string;
  role: "ALUNO" | "PROFESSOR" | "";
}
