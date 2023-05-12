import Image from 'next/image'
import React, { useState } from 'react'
const url = 'https://source.unsplash.com/featured/'

const ImagemAleatoria = () => {
  const [pesquisa,alterarPesquisa] = useState<string>('abstract');
  const [tamanho, setTamanho] = useState<number>(300);

  const urlImagem = () => {
    return `${url}${tamanho}x${tamanho}?${pesquisa}`
  }
  const renderizarBotao = (valor: string) => {
    return(
      <button className="bg-blue-500 px-4 py-2 rounded-md"
      onClick={() => {
        alterarPesquisa(valor)
        console.log(pesquisa)
      }}>
        {valor}
      </button>
    )
  }
 
  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <div className="flex justify-center gap-7 m-5">
        <span>{pesquisa}</span>
        <span>{tamanho}x{tamanho}</span>
      </div>
      <Image
      className="rounded-2xl shadow-md shadow-blue-500 "
      src={urlImagem()} height={300} width={300} alt='Imagem'/>

      <div className="flex justify-between flex gap-5">
        {renderizarBotao('abstract')}
        {renderizarBotao('city')}
        {renderizarBotao('person')}
      </div>
      <div>
        <input className="bg-zinc-800 p-2 w-full
        rounded-md outline-none" type="number" value={tamanho} 
        onChange={(e) => {
          setTamanho(+e.target.value)
        }}/>
      </div>
    </div>
  )
}

export default ImagemAleatoria