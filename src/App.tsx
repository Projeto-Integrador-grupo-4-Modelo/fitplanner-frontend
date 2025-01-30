import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import FormTreinos from "./components/treino/formtreino/FormTreino";
import CardExercicios from "./components/exercicios/cardexercicios/CardExercicios";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      {/* <FormTreinos /> */}
      <CardExercicios />
    </>
  );
}

export default App;
