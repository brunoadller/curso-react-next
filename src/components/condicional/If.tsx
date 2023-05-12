import React from 'react'
interface IfProps{
  teste: boolean
  children: any
}
const If = (props: IfProps) => {
  if(props.teste){
    return props.children
  }else{
    return null
  }
 
}

export default If