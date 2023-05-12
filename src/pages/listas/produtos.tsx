import ProdutoItem from '@/components/listas/ProdutoItem'
import { IconBallFootball } from '@tabler/icons-react'
import React from 'react'
import { produtos } from '@/constantes/Produtos'
import ListaProdutos from '@/components/listas/ListaProdutos'

const PaginaProdutos = () => {
  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
    `}>
      <ListaProdutos produtos={produtos} />
    </div>
  )
}

export default PaginaProdutos