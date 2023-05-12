import Avo from '@/components/comunicacao/direta/Avo'
import Contador from '@/components/comunicacao/indireta/Contador'
import React from 'react'

const PaginaIndireta = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1
      className="text-5xl mb-10"
      >Comunicação Indireta</h1>
      <div className="flex gap-5">
        <Contador />
        <Contador />
        <Contador />
      </div>

    </div>
  )
}

export default PaginaIndireta