import Produto from '@/model/Produto'
import React from 'react'
import ProdutoItem from './ProdutoItem'

interface ListaProdutosProps{
  produtos: Produto[]
}
const ListaProdutos = (props: ListaProdutosProps) => {
  return (
    <div className="flex flex-wrap gap-5">
      {props.produtos.map(produto => {
        return (
          <ProdutoItem key={produto.id} produto = {produto} />
        )
      })}
    </div>
  )
}

export default ListaProdutos