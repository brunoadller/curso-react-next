import React from 'react'
interface FilhoProps{
  nome: string
  sobrenome: string
}
const Filho = (props: FilhoProps) => {
  return (
    <div className="
      flex justify-center items-center 
      bg-green-500 rounded-md p-5
    border border-white">
      <div className="flex gap-2 justify-center text-xl">
        <span>Filho: </span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
    </div>
  )
}

export default Filho