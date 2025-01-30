import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar } from "../../../service/Service";
import Treino from "../../../models/Treino";
import CardTreino from "../cardtreino/CardTreino";

function ListarTreinos() {

  const navigate = useNavigate();
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTreinos() {
      try {
          await buscar('/treinos', setTreinos, {
              headers: {
                  Authorization: token,
              },
          })

      } catch (error: any) {
          if (error.toString().includes('403')) {
              handleLogout()
          }
      }
  }

  useEffect(() => {
      if (token === '') {
          alert('Você precisa estar logado')
          navigate('/');
      }
  }, [token])

  useEffect(() => {
      buscarTreinos()
  }, [treinos.length])

  return (
      <>
          {treinos.length === 0 && (
              
          )}
          <div className='container mx-auto my-4 
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          >
              {treinos.map((treino) => (
                  <CardTreino key={treino.id} treino={treino} />
              ))}

          </div>
      </>
  );
}

export default ListarTreinos;
