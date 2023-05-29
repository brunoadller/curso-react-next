import React, { useCallback, useEffect, useState } from 'react'
import useProcessando from './useProcessando'

const useStarWars = () => {
  const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
  const [personagens, setPersonagens] = useState<any[]>([])
  const [personagem, setPersonagem] = useState<any>([])
  const [filmes, setFilmes] = useState<any>([])

  const selecionarPersonagem = (personagem: any) => {
    setPersonagem(personagem)
    console.log(personagem.films)
  }

  const obterFilmes = useCallback(async function (personagem: any){
    if(!personagem?.films?.length) return
    
    try{
      console.log('obterfilmes...')
      iniciarProcessamento()
      //esta fazendo requisição das promisses que são os links de cada filme participado
    const reqs = personagem.films.map(async (film: string) => {
      const resp = await fetch(film)
      return await resp.json()
    })
    //ele irá esperar todas as promessas paralelas ou seja
    //irá pegar todos os filmes
    const filmes = await Promise.all(reqs)
    setFilmes(filmes)
    console.log(filmes)
    }finally{
      finalizarProcessamento()
    }
  }, [iniciarProcessamento, finalizarProcessamento])
    
    //se personagem não está presente e também não possui os filmes
    //se o tamanho dos filmes não for valido
  
  
 const obterPersonagens = useCallback(async () => {
    try{
      iniciarProcessamento()
      const resp = await fetch('https://swapi.dev/api/people')
      const dados = await resp.json()
      setPersonagens(dados.results)
    } finally{
      finalizarProcessamento()
    }
  }, [iniciarProcessamento, finalizarProcessamento])

  useEffect(() => {
    obterPersonagens()
  }, [obterPersonagens])
  //Se chamar essa função no useEffect toda hora ele vai ficar chamando e rearmazenando a função
  
  const voltar = () => {
    setPersonagem(null)
    setFilmes([])
  }
  useEffect(() => {
    obterFilmes(personagem)
  }, [personagem, obterFilmes])
  return {
    personagens,
    filmes,
    voltar,
    processando,
    selecionarPersonagem
  }
    
  
}

export default useStarWars