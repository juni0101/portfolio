import { useState, useTransition } from "react"

export default function SignupStatePage() { 
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  function onChangeEmail(event){
    console.log(event) //나의행동
    console.log(event.target) //작동된태그
    console.log(event.target.value) //작동된태그의 입력된값
    setEmail(event.target.value)
  }

  function onChangePassword(event) { 
    setPassword(event.target.value)
   }

  function onClickSignup() { 
    console.log(email) //진짜포장이 잘됐는지 확인해보기
    console.log(password)
    //1. 검증하기
    if(email.includes('@') === false){
      // document.getElementById('myerror').textContent = '이메일형식 올바르지않음'
      // document.getElementById('myerror').style.color = 'red'
      setEmailError('에러')
    }else{
      //2. 백엔드컴퓨터에 보내주기( 백엔드 개발자가 만든함수 , 즉 API) => 나중에
      //3. 성공알람 보여주기
      alert('회원가입을 축하합니다')

    }
   }

  return(
    <div>
      이메일:<input type="text" onChange={onChangeEmail} />
      {/* <div id="myerror"></div>  ==> 옛날방식*/}
      <div>{emailError}</div>
      비밀번호:<input type="password" onChange={onChangePassword}/>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
 }