import { createContext, ReactNode, useState } from "react";


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
    });
  }

  return (

    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}

    >

    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout }}>

      {children}
    </AuthContext.Provider>
  );
}
