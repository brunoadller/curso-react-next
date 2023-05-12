import Evento from '@/components/basicos/Evento'
import React from 'react'

const PaginaEventos = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-wrap gap-5 ">
      <Evento></Evento>
      <Evento></Evento>
      <Evento></Evento>
    </div>
  )
}

export default PaginaEventos