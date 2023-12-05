//동적라우팅 : board번호없이 변수(번호)로 서버가져오기
import { useRouter } from "next/router"

export default function StaticRountingPage() { 
  const router = useRouter()

  const onClickMove1 =()=>{
    // 해당페이지 이동코드
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1")
  }
  const onClickMove2 =()=>{
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2")  }
  const onClickMove3 =()=>{
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3")  }

  return(
    <div>
    <button onClick={onClickMove1}>1번게시글 이동하기</button>
    <button onClick={onClickMove2}>2번게시글 이동하기</button>
    <button onClick={onClickMove3}>3번게시글 이동하기</button>
    </div>
  )
 }