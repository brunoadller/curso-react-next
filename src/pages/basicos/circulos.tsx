import Circulo from '@/components/basicos/Circulo'
import React from 'react'


const Paginascirculos = () => {
  let texto = ""
  return (
    <div className="flex
    justify-around h-[500px] items-center h-screen">
      <Circulo texto = "Circ #1"></Circulo>
      <Circulo texto = "Circ #2" quasePerfeito = {true}></Circulo>
      <Circulo texto = "Circ #3"></Circulo>
      
    </div>
  )
}

export default Paginascirculos