import React from 'react'
import Filho from './Filho'

interface PaiProps {
  nome: string
  sobrenome: string
}
const Pai = (props: PaiProps) => {
  return (
    <div className="flex flex-col  gap-5 
    bg-blue-500 text-white border border-white
    rounded-md p-5">
      <div className="flex gap-2 justify-center text-xl">
        <span>Pai: </span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <Filho nome = "Francisco" sobrenome = {props.sobrenome}></Filho>
        <Filho nome = "Francisco" sobrenome = {props.sobrenome}></Filho>
      </div>
    </div>
  )
}

export default Pai