import { createContext, ReactNode, useState } from "react";
<<<<<<< HEAD

import { login } from "../service/Service";
import UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isAluno: boolean;
  isProfessor: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

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

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      alert("Usuário foi autenticado com sucesso!");
    } catch (error) {
      alert("Os dados do Usuário estão inconsistentes!");
    }
  }

  function handleLogout() {
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
      value={{ usuario, handleLogin, handleLogout, isAluno, isProfessor }}
=======
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../service/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      alert("Usuário foi autenticado com sucesso!");
    } catch (error) {
      alert("Os dados do Usuário estão inconsistentes!");
    }
    setIsLoading(false);
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
>>>>>>> 18b734b1d9fce7e8e69177ea188ba791e6784c91
    >
      {children}
    </AuthContext.Provider>
  );
}
