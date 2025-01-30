import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../service/Service";
import Treino from "../../../models/Treino";
import CardTreino from "../cardtreino/CardTreino";
import { useAuth } from "../../../context/useAuth";

function ListarTreinos() {
  const navigate = useNavigate();
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const { usuario, handleLogout } = useAuth();
  const token = usuario.token;

  async function buscarTreinos() {
    try {
      await buscar("/treinos", setTreinos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTreinos();
  }, [treinos.length]);

  return (
    <>
      <div
        className=" mx-2 
              flex flex-row flex-wrap gap-2 w-full mb-2"
      >
        {treinos.map((treino) => (
          <CardTreino key={treino.id} treino={treino} />
        ))}
      </div>
    </>
  );
}

export default ListarTreinos;
