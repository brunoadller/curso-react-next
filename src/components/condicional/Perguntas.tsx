import If from './If'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface PerguntaProps {
  indice: number
  pergunta: string
  resposta: string
  aberto: boolean
  alternarVisibilidade: (indice: number) => void
}
const Perguntas = (props: PerguntaProps) => {

  return (
    <div className={`
      border border-zinc-600 rounded-md overflow-hidden
    `}>
      <div className=
        {`
          flex justify-between items-center
         bg-zinc-800 p-5 cursor-pointer select-none "
        `}
        onClick={() => props.alternarVisibilidade(props.indice)}
        >
          <span>{props.pergunta}</span>
          {props.aberto? <IconChevronUp/>: <IconChevronDown/> }
      </div>

      <If teste={props.aberto}>
        <div className="p-5  bg-black w-3/4 rounded-md  ">{props.resposta}</div>
      </If>
    </div>
  )
}

export default Perguntas