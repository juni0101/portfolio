//게시글을 등록 후 바로 게시글상세보기
import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

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
  const router = useRouter()
  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit =async()=>{

    // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든줄들을 무시하고
    //catch에있는 내용이 실행됨 
  try{
      const result = await 나의함수({
        variables:{     /* variables이게 $역할을함  */
          writer:"훈이",
          title: "안녕하세요!!",
          contents: "반갑습니다!!"
        }
      })
      console.log(result)
      // 내가 보드 생성했을때 바로 생기는 넘버
      console.log(result.data.createBoard.number)
      // 보드생성하자마자 게시글상세페이지로 이동
      router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/ ${result.data.createBoard.number}`)
  }
  catch(error){
    //이 에러는 백엔드에서 주는에러임 
    alert(error.message)
  }
  }

  return(
    //한줄일때는 ()필요없음 
    <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
  )
 }