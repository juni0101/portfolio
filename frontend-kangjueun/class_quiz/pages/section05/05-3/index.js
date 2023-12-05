//랜덤 인증번호
import { useState } from "react"

export default function randomPage(){

  const [span, setSapn] = useState('000000')
  const [button, setButton] = useState('인증번호전송')
  const onClickBtn =()=>{
    const random = Math.floor(Math.random()*1000000)
    const padNumber = String(random).padStart(6, '0')
    setSapn(padNumber)
  }

  return(
    <div>
      <span>{span}</span>
      <button onClick={onClickBtn}>{button}</button>
    </div>
  )
}