import Produto from '@/model/Produto'
import React from 'react'
import ProdutoItem from './ProdutoItem'

interface ListaProdutosProps{
  produtos: Produto[]
  comprar: (produto:Produto) => void
}
const ListaProdutos = (props: ListaProdutosProps) => {
  //LISTAPRODUTOS PEGA ESSA VARIÁVEL COMPRAR QUE ETSA VINDO DE PRODUTO ITEM E MANDA A AÇÃO PARA
  //PRODUTOS
  return (
    <div className="flex flex-wrap gap-5">
      {props.produtos.map(produto => {
        return (
          <ProdutoItem key={produto.id} produto = {produto} comprar = {props.comprar} />
        )
      })}
    </div>
  )
}

export default ListaProdutos