import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { Trash, IterationCw } from 'lucide-react'
import Treino from "../../../models/Treino"
import { buscar, deletar } from "../../../service/Service"


function DeletarTreino() {

  const navigate = useNavigate()

  const [treino, setTreino] = useState<Treino>({} as Treino)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token


  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/treinos/${id}`, setTreino, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (!token) {
      alert('Você precisa estar logado')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarTreino() {
    setIsLoading(true)

    try {
      await deletar(`/treinos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      alert('Treino apagado com sucesso')

    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      } else {
        alert('Erro ao deletar o treino.')
      }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/treinos")
  }




  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-semibold text-black mb-6">
        Tem certeza que deseja deletar esse treino?
      </h2>

      <div className="bg-white rounded-lg shadow-md pt-4 pl-6 pr-6 pb-3 hover:shadow-lg transition-shadow border w-[480px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#f5c518] text-xl">🏋️‍♂️</span>
            <h3 className="text-xl font-semibold text-gray-900">
              {treino?.nomeTreino}
            </h3>
          </div>
        </div>

        <hr className="my-4" />

        <p className="text-gray-900 text-base">{treino.descricao}</p>

        <div className="flex justify-between text-gray-700 text-base mt-4">
          <p>
            <span className="font-semibold">{treino.duracaoMin}</span>min
          </p>
          <p>
            <span className="font-semibold">{treino.categoria}</span> Y
          </p>
        </div>

        <div className="flex items-center justify-around pt-2 border-t border-gray-200 mt-4">
          <button className="flex items-center text-gray-600 hover:text-green-500 transition-colors px-4 py-2 rounded-md hover:bg-green-50" onClick={retornar}>
            <IterationCw className="h-6 w-6 mr-2" />
            <span className="text-base">Manter</span>
          </button>

          <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors px-4 py-2 rounded-md hover:bg-red-50" onClick={deletarTreino}>
            <Trash className="h-6 w-6 mr-2" />
            {isLoading ? (
              <ClipLoader
                color="#FFD700"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"

              />
            ) : (
              <span className="text-base">Deletar</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTreino




