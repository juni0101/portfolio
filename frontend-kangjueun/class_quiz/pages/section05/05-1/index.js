//버튼클릭시 글자바뀌기
import { useState } from "react"

export default function hello() { 

  const [btn, setBtn] = useState("안녕하세요")
  const onClickEvent =()=>{
    setBtn('반갑습니다.')
    
  }

  return(
    <div>
      <button onClick={onClickEvent}>{btn}</button>
    </div>
  )
 }