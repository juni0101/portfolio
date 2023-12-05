//데이터가져오는법 
import axios from "axios"
import 나만의페이지 from '../../section01/01-01-example'

export default function RestGetPage(){

  function onClickAsync() { 
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result) //promise
   }

  //  async function onClickSync() {                                       => 함수중복선언문제
  //    const result = await axios.get("https://koreanjson.com/posts/1")
  //    console.log(result) //제대로된결과 
  //    console.log(result.data.title)
  //   }
    const onClickSync = async()=>{ 
      const result = await axios.get("https://koreanjson.com/posts/1")
      console.log(result) //제대로된결과 
      console.log(result.data.title)
     }

  return(
    <div>

      <button onClick={onClickAsync}>Rest-API(비동기) 요청</button>
      <button onClick={onClickSync}>REST-API(동기) 요청</button>
      <나만의페이지 />
    </div>
  )
}