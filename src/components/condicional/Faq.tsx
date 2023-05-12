import React, { useState } from 'react'
import Perguntas from './Perguntas'

const Faq = () => {
  const [ativo, setAtivo] = useState<number>(0)

  const alternarVisibilidade = (indice: number) => {
    if(indice === ativo){
      setAtivo(-1)
    }else{
      setAtivo(indice)
    }
  }
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
      <Perguntas
        indice = {0}
        aberto = {ativo === 0}
        alternarVisibilidade = {alternarVisibilidade}
        pergunta="Quem descobriu o brasil?" 
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim enim, tincidunt ut dui a, facilisis tempor nulla. Pellentesque non ante nec urna aliquam porttitor. Proin vitae malesuada quam. Etiam lacinia et nunc sed egestas."/>
      <Perguntas
        indice = {1}
        aberto = {ativo === 1}
        alternarVisibilidade = {alternarVisibilidade} 
        pergunta="O que é Typescript?" 
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim enim, tincidunt ut dui a, facilisis tempor nulla. Pellentesque non ante nec urna aliquam porttitor. Proin vitae malesuada quam. Etiam lacinia et nunc sed egestas."/>
      <Perguntas
        indice = {2}
        aberto = {ativo === 2}
        alternarVisibilidade = {alternarVisibilidade} 
        pergunta="React é um framework?" 
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim enim, tincidunt ut dui a, facilisis tempor nulla. Pellentesque non ante nec urna aliquam porttitor. Proin vitae malesuada quam. Etiam lacinia et nunc sed egestas."/>
      <Perguntas
        indice = {3}
        aberto = {ativo === 3}
        alternarVisibilidade = {alternarVisibilidade} 
        pergunta='Quais as principais funcionalidades do next?' 
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim enim, tincidunt ut dui a, facilisis tempor nulla. Pellentesque non ante nec urna aliquam porttitor. Proin vitae malesuada quam. Etiam lacinia et nunc sed egestas."/>
    </div>
  )
}

export default Faq