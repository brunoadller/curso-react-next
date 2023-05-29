import ItemCarrinho from '@/model/ItemCarrinho'
import React from 'react'
import { Moeda } from '@/utils/Moeda'


const CarrinhoItem = (props: ItemCarrinho) => {
 
  return (
    <div className="flex gap-2 items-center rounded-full bg-blue-500">
      <span className="
        flex justify-center items-center
        w-7 h-7 rounded-full
        p-2
         bg-blue-700 
         ">{props.quantidade}
      </span>
      <span >
        {props.produto.nome}
      </span>
      <span className="pr-5">
        
      {Moeda.formatar(props.produto.preco * props.quantidade)}
      </span>
    </div>
  )
}

export default CarrinhoItem