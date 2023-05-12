import React, { useState } from 'react'
import Display from './Display'
import Botoes from './Botoes'

const Contador = () => {
  const [num, setNum] = useState<number>(0)

  const incrementar = (valor: number) => {
    setNum(num + valor)
  }
  const decrementar = (valor: number) => {
    setNum(num - valor)
  }
  return (
    <div className={`
      text-center w-72 h-72
      flex flex-col gap-2 p-2
      border border-zinc-400 rounded-lg
    `}>
      <Display valor= {num}/>
      {
      //para poder paoder passar a funcao para os botoes tera que criar uma interface no componente botao
    }
      <Botoes inc = {incrementar} dec = {decrementar}/>
    </div>
  )
}

export default Contador