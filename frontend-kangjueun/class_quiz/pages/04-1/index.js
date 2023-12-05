//rest api로 데이터get가져오는법
//하 깃허브왜 업로드안돼 아 진짜짜증난다..adf asdf asd fads fasdf
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