import React from 'react'

interface DisplayProps{
  valor: number
}
const Display = (props: DisplayProps) => {
  return (
    <div className={`
      flex justify-center items-center flex-1
    bg-zinc-800 rounded-md p-5 text-5xl font-black`}>
      {props.valor}
    </div>
  )
}

export default Display