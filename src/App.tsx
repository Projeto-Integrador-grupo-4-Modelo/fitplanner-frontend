import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import PaginaBase from "./pages/paginabase/PaginaBase";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import FormTreinos from "./components/treino/formtreino/FormTreino";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/base" element={<PaginaBase />}>
              <Route path="sobre" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="treino" element={<FormTreinos />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
