import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes></Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
