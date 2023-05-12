import TabelaSeriaA from '@/components/listas/TabelaSeriaA'
import React from 'react'
import { IconBallFootball } from '@tabler/icons-react'

const PaginaListaBasico = () => {
  const times   = ["Botafogo" , "Palmeiras", "Fluminense",
                "Athletico-PR", "Cruzeiro","Fortaleza",
                "São Paulo","Atlético-MG", "Santos" ,"Grêmio"
  ]
  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
    `}>
      <h1 className="flex items-center gap-2 text-5xl font-black">
        <IconBallFootball size={50} stroke={1} className="text-green-500"/>
        Tabela Séria A
      </h1>
      <TabelaSeriaA times = {times} />
    </div>
  )
}

export default PaginaListaBasico