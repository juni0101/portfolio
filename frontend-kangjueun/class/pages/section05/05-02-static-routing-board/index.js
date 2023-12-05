//(정적라우팅) 라우팅으로 해당주소이동
import { useRouter } from "next/router"

export default function StaticRountingPage() { 
  const router = useRouter()

  const onClickMove1 =()=>{
    // 해당페이지 이동코드
    router.push("/section05/05-02-static-routing-board-moved/1")
  }
  const onClickMove2 =()=>{
    router.push("/section05/05-02-static-routing-board-moved/2")  }
  const onClickMove3 =()=>{
    router.push("/section05/05-02-static-routing-board-moved/3")  }

  return(
    <div>
    <button onClick={onClickMove1}>1번게시글 이동하기</button>
    <button onClick={onClickMove2}>2번게시글 이동하기</button>
    <button onClick={onClickMove3}>3번게시글 이동하기</button>
    </div>
  )
 }