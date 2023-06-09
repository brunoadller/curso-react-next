import Background from '@/components/starwars/Background'
import Filmes from '@/components/starwars/Filmes'
import Personagens from '@/components/starwars/Personagens'
import useStarWars from '@/data/hooks/useStarWars'
import React from 'react'



const PaginaStarWars = () => {
  const {processando, personagens, filmes, voltar, selecionarPersonagem } = useStarWars()

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen relative'>
      <Background />
      {
        processando ? (
          <div>Processando...</div>
        ) : filmes.length > 0 ?
            (
              <Filmes filmes={filmes} voltar = {voltar}/>
            )

            : personagens.length > 0 ? 
            (
              <Personagens personagens = {personagens} selecionar={selecionarPersonagem}/>      
            )
            :
            (
               <h1>Dados não encontrados</h1>
            )
            
        
      }

    </div>
  )
}

export default PaginaStarWars