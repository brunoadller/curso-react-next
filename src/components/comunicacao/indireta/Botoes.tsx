import React from 'react'

interface BotoesProps{
  inc: (valor: number) => void
  dec: (valor: number) => void
}
const Botoes= (props: BotoesProps) => {
  return (
    <div className="flex justify-between gap-2 ">
   
     <button className="botao flex-1" onClick={() => props.dec(10)}>
        Dec
     </button>
     <button className="botao flex-1" onClick={() => props.inc(20)}>
        Inc
     </button>
    </div>
  )
}

export default Botoes
