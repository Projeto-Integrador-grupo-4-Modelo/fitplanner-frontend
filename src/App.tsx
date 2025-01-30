import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FormExercicios from "./components/exercicios/formexercicios/FormExercicios";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        {/* // <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes> */}
        {/* <Footer /> */}
      </BrowserRouter>  
      <FormExercicios />
    </>
  );
}
export default App;

