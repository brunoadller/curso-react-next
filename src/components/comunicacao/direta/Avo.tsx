import React from 'react'
import Pai from './Pai'

interface AvoProps{
  nome: string
  sobrenome: string
}
const Avo = (props: AvoProps) => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-md
    bg-purple-500 text-white border border-white
    ">
      <div className="flex justify-center items-center gap-2 text-2xl">
        <span className="font-black">Avô</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5">
        <Pai nome = "Juliano" sobrenome={props.sobrenome}></Pai>
        <Pai nome = "Bruno" sobrenome={props.sobrenome}></Pai>
        <Pai nome = "Felipe" sobrenome={props.sobrenome}></Pai>
      </div>
    </div>
  )
}

export default Avo