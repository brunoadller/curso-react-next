import ProdutoItem from '@/components/listas/ProdutoItem'
import { IconBallFootball } from '@tabler/icons-react'
import React, { useState } from 'react'
import { produtos } from '@/constantes/Produtos'
import ListaProdutos from '@/components/listas/ListaProdutos'
import ItemCarrinho from '@/model/ItemCarrinho'
import Produto from '@/model/Produto'
import Carrinho from '@/components/listas/Carrinho'

//PRODUTOS RECEBE A AÇÃO VINDO DE PRODUTOSITEM A COM SEU ESTADO CONSEGUE ALTERAR O COMPONETE CARRINHO E AS VARIAVEIS QUE ESTÃO NELE
const PaginaProdutos = () => {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  const adicionarProduto = (produto:Produto) => {
    //FUNÇÃO FIND FAZ UMA BUSCA NO ITEM DE PRODUTOS
    //pega o item atual se não tiver, geral um item zerado
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto}
    //clonando o item e adicionando a quantidade
    const novoItem = {...itemAtual,quantidade: itemAtual.quantidade + 1}
    //pega os outros itens e seta eles para atualizar
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
    setItens([...outrosItens, novoItem])
    
  }
  return (
    <div className={`
      flex flex-col gap-10 justify-center items-center h-fit
    `}>
      <Carrinho itens = {itens}/>
      <ListaProdutos produtos={produtos} comprar = {adicionarProduto}/>
    </div>
  )
}

export default PaginaProdutos