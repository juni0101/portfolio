import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { 그래프큐엘셋팅 } from "./BoardWrite.querys"



export default function BoardWrite(){
  const [마이함수] =useMutation(그래프큐엘셋팅) 
  const [writer, setWriter] = useState() 
  const [title, setTitle] = useState() 
  const [contents, setContents] = useState() 

  const onClickSubmitPractice =async()=>{
    const result = await 마이함수({
      variables:{
        writer:writer,
        title:title,
        contents:contents,
      }
    })
    console.log(result)
  }

  const onChangeWriter =(event)=>{
      setWriter(event.target.value)
  }
  const onChangeTitle =(event)=>{
    setTitle(event.target.value)
  }
  const onChangeContents =(event)=>{
    setContents(event.target.value)
  }

  return(
    <div>
    <div>########여기는 컨테이너입니다#####</div>
    <BoardWriteUI 
    aaa={onClickSubmitPractice}
    bbb={onChangeWriter}
    ccc={onChangeTitle}
    ddd={onChangeContents}/>
    <div>########여기는 페이지입니다#####</div>
    </div>
  )
}