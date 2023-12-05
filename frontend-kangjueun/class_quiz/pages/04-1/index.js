//rest api로 데이터get가져오는법
import axios from "axios";

export default function RestGetPage(){

  const onClickSync =async()=>{
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result)

  }
  return(
    <button onClick={onClickSync}>restapi 요청</button>
  )
}
