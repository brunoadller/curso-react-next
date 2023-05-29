import { useCallback, useState } from 'react'

export default function useProcessando(){
  const [processando, setProcessando] = useState<Boolean>(false)

  const iniciarProcessamento = useCallback(() => {
    setProcessando(true)
  }, [])
  const finalizarProcessamento = useCallback(() => {
    setProcessando(false)
  }, [])
  return {
    processando,
    iniciarProcessamento,
    finalizarProcessamento
  }
}