//라우팅으로 이동완료
import { useQuery, gql} from "@apollo/client"

const FETCH_BOARD = gql`
  query{
    fetchBoard(number:12){
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRountingMovedPage() { 
  // 중괄호에는 항상 data가 들어가게됨 
  const {data} = useQuery(FETCH_BOARD)

  console.log(data)

  return(
  <div>
    <div>1번이동</div>
    {/* 데이터가있으면 그리고 없으면 그리지말라는뜻 */}
    <div>작성자: {data && data.fetchBoard.writer}</div>
    <div>제목: {data && data.fetchBoard.title}</div>
    <div>내용: {data && data.fetchBoard.contents}</div>
   </div>
  )
 } 