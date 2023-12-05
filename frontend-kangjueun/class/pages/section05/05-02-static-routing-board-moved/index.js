//라우팅으로 해당주소이동
import { useRouter } from "next/router"

export default function StaticRountingPage() { 

  const router = useRouter()
  const onClickMove =()=>{
    // 해당페이지 이동코드
    router.push("/section05/05-01-static-routing-moved")
  }

  return(
    <button onClick={onClickMove}>페이지이동하기</button>
  )
 }