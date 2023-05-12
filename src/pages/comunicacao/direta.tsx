import Avo from '@/components/comunicacao/direta/Avo'
import React from 'react'

const PaginaDireta = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1
      className="text-5xl mb-10"
      >Comunicação direta</h1>
      <Avo nome = "Mariano" sobrenome = "Silva"/>
    </div>
  )
}

export default PaginaDireta