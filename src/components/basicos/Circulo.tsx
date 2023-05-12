import React from 'react'

interface CirculoProps {
  texto: string
  //interrogação refere que essa propriedade é opcional
  quasePerfeito?: boolean
}
const Circulo = (props: CirculoProps) => {
  return (
    <div className={`
      flex justify-center items-center
      h-64 w-64 bg-cyan-500 
      text-black font-black text-3xl
      ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
    `}>
      {props.texto}
    </div>
  )
}

export default Circulo