import { Redinput, BlueButton} from "./Board-right-styles"

export default function BoardWriteUI(props){
    return(
      <div>
      <div>########여기는 프레젠터입니다#####</div>
      <div> 
        작성자: <Redinput type='text' onChange={props.bbb} />
        제목: <Redinput type='text' onChange={props.ccc}/>
        내용: <Redinput type='text' onChange={props.ddd}/>
        <BlueButton onClick={props.aaa}>그래프큐엘 요청</BlueButton>
      </div>
            <div>########여기는 프레젠터입니다#####</div>
      </div>

    )
}