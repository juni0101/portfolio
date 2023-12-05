//버튼클릭 카운트증가
import { useState } from "react"

export default function count(){

  const [span, setSpan] = useState('0')
  const [button, setButton] = useState('카운트증가')
  const clickButtonEvent =()=>{
    setSpan(Number(span) + 1)
  }

  return(
    <div>
      <span>{span}</span>
      <button onClick={clickButtonEvent}>{button}</button>
    </div>
  )
}