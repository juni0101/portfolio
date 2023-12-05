//인풋창으로 변수값 돌려주기 (보드)

// 아폴로패키지에서 gql과 useMutation불러오기
import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

// mutation쿼리를 gql을 이용하여 작성한다
// createBoard 뮤테이션은 세 개의 변수 ($writer, $title, $contents)를 받아 새로운 게시글을 생성하고, 
//생성된 게시글의 정보 중 일부를 반환한다.
const 그래프큐엘셋팅 = gql`
  mutation createBoard($writer:String, $title:String, $contents:String){
          createBoard(
            writer:$writer,
            title: $title,
            contents: $contents){
            _id
            number
            message
          }
      }
`

//useMutation 훅을 이용하여 GraphQL mutation을 실행할 수 있는 함수 마이함수를 생성한다.
//또한, 각각 writer, title, contents 상태를 초기화한다.
export default function GraphqlMutationPagePractice(){
  const [마이함수] = useMutation(그래프큐엘셋팅)
  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()


  // 게시글 작성 버튼이 클릭되면, 마이함수를 실행하여 GraphQL mutation을 호출하고, 
  //입력된 작성자, 제목, 내용을 변수로 전달한다.
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

  // 각각의 인풋 필드에 대한 입력값이 변경될 때마다, 
  // 해당 값을 각각의 상태 변수에 업데이트하는 이벤트 핸들러 함수를 정의한다.
  const onChangeWriter =(event)=>{
      setWriter(event.target.value)
  }
  const onChangeTitle =(event)=>{
    setTitle(event.target.value)
  }
  const onChangeContents =(event)=>{
    setContents(event.target.value)
  }

  // 사용자에게 입력을 받을 수 있는 세 개의 인풋 필드와 게시글 작성 버튼이 있는 간단한 폼을 렌더링한다.
  // 이렇게 구성된 코드는 사용자로부터 입력을 받아 GraphQL mutation을 통해 
  // 새로운 게시글을 생성하는 간단한 React 컴포넌트이다.
  return(
    <div>
      작성자: <input type='text' onChange={onChangeWriter} />
      제목: <input type='text' onChange={onChangeTitle}/>
      내용: <input type='text' onChange={onChangeContents}/>
      <button onClick={onClickSubmitPractice}>그래프큐엘 요청</button>
    </div>
  )
}