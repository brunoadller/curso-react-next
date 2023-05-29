import ItemCarrinho from '@/model/ItemCarrinho'
import React from 'react'
import CarrinhoItem from './CarrinhoItem'
import { IconCircleX } from '@tabler/icons-react'
import CarrinhoVazio from './CarrinhoVazio'
import { Moeda } from '@/utils/Moeda'

interface CarrinhoProps{
  itens: ItemCarrinho[]
}

const Carrinho = (props: CarrinhoProps) => {
  const total = props.itens.reduce((soma, item) =>{
    return soma + item.quantidade * item.produto.preco
  },0)
  return (
    <div className="flex flex-col  border border-white rounded-md overflow-hidden w-4/5">
      <div className="flex justify-between items-center bg-zinc-800 text-3xl p-3">
        <span>Carrinho</span>
        <span>Total: {Moeda.formatar(total)}</span>
      </div>
      <div className="flex gap-5 p-5">
        {props.itens.length === 0 ? 
        (
          <CarrinhoVazio />
        )
        :
        (
          props.itens.map((item, i) => {
            return (
              <CarrinhoItem key = {item.produto.id} {...item}/>
          
            )
          })
        )
        }
      </div>
    </div>
  )
}

export default Carrinho