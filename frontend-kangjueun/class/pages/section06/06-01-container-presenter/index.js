//container/present로 폴더정리
//보여지는페이지는 이페이지이므로 컴포넌트, 프레젠털을 여기로 가져와야함 
import BoardWrite from "@/src/components/units/board/write/BoardWrite.container"

export default function GraphqlMutationPagePractice(){ 
return(
  <div>
    <div>########여기는 페이지입니다#####</div>
    <BoardWrite />
    <div>########여기는 페이지입니다#####</div>
  </div>
)
}