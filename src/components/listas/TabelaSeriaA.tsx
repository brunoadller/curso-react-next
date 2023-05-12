import React from 'react'
//CRIA-SE A FLAG COM AS VARIÁVEIS TYPESCRYPT AQUI
//PARA PODER PEGAR A LISTA E PASSÁ-LA POR PARÂMETRO 
//PARA FAZER A RENDERIZAÇÃO
interface TabelaSerieAProps{
  times: string[]
}
const TabelaSeriaA = (props: TabelaSerieAProps) => {
  return (
    <ol>
      {props.times?.map((time, index) => {
        return (
          <>
            <li key={index} className={`
              text-xl list-decimal
              ${index%2 === 0?  "text-blue-500" : "text-yellow-500"}
            `} >
              {time}
            </li>
          </>
        )
      })}
    </ol>
  )
}

export default TabelaSeriaA