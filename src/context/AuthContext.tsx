import { createContext, ReactNode, useState } from "react";
import { login } from "../service/Service";
import UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  logout(): void;
  userType: string | null;
  isAluno: boolean;
  isProfessor: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
    role: "",
  });

  const isAluno = usuario.role === "ALUNO";
  const isProfessor = usuario.role === "PROFESSOR";
  const userType = usuario.role || null;

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    try {
      await login("/usuarios/logar", usuarioLogin, setUsuario);
      alert("Usuário autenticado com sucesso!");
    } catch (error) {
      alert("Os dados do usuário estão inconsistentes!");
    }
  }

  function logout() {
    setUsuario({
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
      role: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, logout, userType, isAluno, isProfessor }}
    >
      {children}
    </AuthContext.Provider>
  );
}
