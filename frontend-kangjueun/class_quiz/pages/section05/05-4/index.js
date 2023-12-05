import { useState } from "react"
import styles from "../../../styles/section05/style.module.css"

export default function signupPage(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const [emailerror, setEmailerror] = useState('')
  const [passworderror, setPassworderror] = useState('')
  const [passwordCheckerror, setPasswordCheckerror] = useState('')

  const onChangeEmail =(event)=>{
    setEmail(event.target.value)
    if(event.target.value !== ''){
      setEmailerror('')
    }
  }
  const onChangePassword =(event)=>{
    setPassword(event.target.value)
    if(event.target.value !== ''){
      setPassworderror('')
    }
  }
  const onChangePasswordCheck =(event)=>{
    setPasswordCheck(event.target.value)
    if(event.target.value !== ''){
      setPasswordCheckerror('')
    }
  }

  const onClickEvent =(event)=>{
    if(!email){
      setEmailerror('이메일을 입력하세요.')
    }
    if(!password){
      setPassworderror('비밀번호를 입력하세요.')
    }
    if(!passwordCheck){
      setPasswordCheckerror('비밀번호를 입력하세요.')
    }
    if(email.includes('@') == false){
      setEmailerror('이메일 형식에 맞지 않습니다.')
    }
    if(password !== passwordCheck){
      setPasswordCheckerror('비밀번호가 틀립니다.')
    }
  }

  return(
    <div>
      <span>이메일: </span>
      <input type="text" onChange={onChangeEmail} /><br></br>
      <div className={styles.errorColor}>{emailerror}</div>
      <span>비밀번호: </span>
      <input type="password" onChange={onChangePassword} /><br></br>
      <div className={styles.errorColor}>{passworderror}</div>
      <span>비밀번호 확인 </span>
      <input type="password" onChange={onChangePasswordCheck}/><br></br>
      <div className={styles.errorColor}>{passwordCheckerror}</div>
      <button onClick={onClickEvent}>가입하기</button>
    </div>
  )
}