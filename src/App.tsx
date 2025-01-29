import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Routes></Routes>
      </div>
      <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;

