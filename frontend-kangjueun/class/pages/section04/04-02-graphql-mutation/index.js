//
import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
      mutation{
        createBoard(
          writer:"철수",
          title:"안녕하세요",
          contents:"반갑습니다"){
          _id
          number
          message
        }
      }
`


export default function GraphqlMutationPage() { 
  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit =async()=>{
    const result = await 나의함수()
    console.log(result)
  }

  return(
    //한줄일때는 ()필요없음 
    <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
  )
 }