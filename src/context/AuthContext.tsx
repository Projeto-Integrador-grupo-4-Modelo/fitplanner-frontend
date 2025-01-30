import { createContext, ReactNode, useState } from "react";
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
    tipo: "",
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
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
      tipo: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
