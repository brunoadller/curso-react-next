import { IconCircleX } from '@tabler/icons-react'
import React from 'react'

const CarrinhoVazio = () => {
  return (
    <div className="flex gap-3 justify-center text-xinc-500">
      <IconCircleX />
      <span>Nenhum item no carrinho</span>
    </div>
  )
}

export default CarrinhoVazio