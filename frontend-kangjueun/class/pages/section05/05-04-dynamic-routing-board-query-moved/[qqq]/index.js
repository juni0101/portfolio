//라우팅으로 이동완료
import { useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($number:Int){
    fetchBoard(number:$number){
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRountingMovedPage() { 
  const router = useRouter()
  console.log(router)

  // 중괄호에는 항상 data가 들어가게됨 
  const {data} = useQuery(FETCH_BOARD, {
    variables:{
      number: Number(router.query.qqq)
    }
  })

  console.log(data)

  return(
  <div>
    <div>{router.query.qqq}번이동</div>
    {/* 데이터가있으면 그리고 없으면 그리지말라는뜻 */}
    <div>작성자: {data?.fetchBoard?.writer}</div>
    <div>제목: {data?.fetchBoard?.title}</div>
    <div>내용: {data?.fetchBoard?.contents}</div>
   </div>
  )
 } 