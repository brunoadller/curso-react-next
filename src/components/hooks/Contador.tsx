import React, { useEffect, useState, useCallback } from 'react'
//OBS: O USE CALLBACK, GERALMENTE SE USA QUANDO SE USA UMA FUNÇÃO DENTRO DO USEEFFECT
//PARA A FUNÇÃO NÃO SER RECRIADA VARIAS VEZES
const Contador = () => {
  const [delta, setDelta] = useState(1)
  const [valor, setValor] = useState(0);
  const [multi10, setMulti10] = useState(0)
//useCalback mantem a função armazenada de uma forma que só será
  //chamada novamente se o estado determinado for utilizado
  //o useCallback será chamado uma única vez quando o componente for montado
 const calcularValorMulti10 = useCallback((valor: number) => {
  return valor * 10
 }, [valor])//essa função não precisa ser modificada por conta do estado, pois esta com
 //um parametro respectivo ao valor, mas se o estado estivesse sendo alterado diretamente na função
 //teria que colocar no segundo parametro
 /*
 *o useCalback armazena e a funcao só e chamada quando for executado o que estiver no useEffect
 * e so será alterado se o valor modificar aí sim a e chamado o useCallbak
 */
 /**
  * Como o useCalback foi memorizado pelo react se eu mexer no pomponente de input para atualizar o estado de delta
  * ele nao será alterado
  */
  //é executada sempre que um componente é renderizado
  //executa a função mais ou menos uma vez enquanto ele é montado e o outro parametro é 
  useEffect(() => {
    console.log("executando o useEffect...")
    const multi10 = calcularValorMulti10(valor)
    setMulti10(multi10)
  }, [valor, calcularValorMulti10])//rede de dependencia do useEffect Para ser executado, somente quando ocorrer mudancas nestas dependencias
  
  
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <span className="text-5xl">{valor}</span>
      <span className="text-xl text-zinc-500">{multi10}</span>
      <span className="text-sm text-zinc-500">{delta}</span>

      <div className="flex gap-5">
        <button 
        onClick={() => setValor(valor - delta)}
        className="botao">
          Decrementar -1
        </button>
        <button 
        onClick={() => setValor(valorAtual => valorAtual + delta)}
        className="botao">
          Incrementar +1
          </button>
      </div>
      <input 
        className="bg-zinc-900 p-3 outline-none rounded-md"
        type="number" 
        value={delta} 
        onChange={e => 
        setDelta(parseInt(e.target.value))} />
    </div>
  )
}

export default Contador