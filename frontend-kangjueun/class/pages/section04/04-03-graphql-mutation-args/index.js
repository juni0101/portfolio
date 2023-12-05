//argument =인자 
//데이터를 입력값받아오는게아니라(하드코딩x) 변수전달하기 
import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
      mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(
          writer:$writer,
          title:$title,
          contents:$contents){
          _id
          number
          message
        }
      }
`


export default function GraphqlMutationPage() { 
  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit =async()=>{
    const result = await 나의함수({
      variables:{     /* variables이게 $역할을함  */
        writer:"훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다!!"
      }
    })
    console.log(result)
  }

  return(
    //한줄일때는 ()필요없음 
    <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
  )
 }