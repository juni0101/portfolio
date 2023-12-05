//잇츠로드 과제
import styled from "@emotion/styled"
import { useState } from "react"

const Wrapper = styled.div`
  background: url(/section05/bg.png);
  width: 640px;
  height: 1138px;
  color: white;
`
const Header = styled.div`
  width: 30%;
  margin: 0 auto;
  text-align: center;
  padding-top: 30%;
`
const LocationImg = styled.img`
`
const H1 = styled.h1`
font-size: 40px;
`
const Login = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 90px;
`
const Input = styled.input`
  width: 100%;
  background: rgba( 255, 255, 255, 0 );
  border: none;
  border-bottom: 1px solid white;
  padding: 10px;
  margin-top: 60px;
  color: white;
`
const Div = styled.div`
`
const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  background: pink;
  border: none;
  margin: 50px 0;
`
const Search = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
`
const Span = styled.span`
`
const KakaoImg = styled.img`
  padding-right: 30px;
`
const ButtonWrap = styled.div`
  width: 100%;
  text-align: center;

`
const KakaoButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 50px;
  background: rgba( 255, 255, 255, 0 );
  border: none;
  border: 1px solid yellow;
  color: white;
`



export default function itsloadPage() { 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onChangeEamil =(event)=>{
    setEmail(event.target.value)
    if(email.includes('@') ==  false){
      setEmailError('이메일주소를 다시확인해주세요')
    }else{
      setEmailError('')
    }
  }
  const onChangePassword =(event)=>{
    setPassword(event.target.value)
    if(password.length >=8 && password.length <=16){
      setPasswordError('')
    }else{
      setPasswordError('8~16자의 영문,숫자,특수 문자만 사용 가능합니다.')
    }
  }

  const onClickEvent =()=>{
    if(emailError == '' && passwordError == ''){
      alert('환영합니다')
    }

  }

  return(
    <Wrapper>
      <Header>
        <LocationImg src="/section05/location.png"/>
        <H1>잇츠로드</H1>
      </Header>
      <Login>
        <Input type="text" onChange={onChangeEamil} placeholder="이메일을 입력하세요"/>
        <Div>{emailError}</Div>
        <Input type="password" onChange={onChangePassword} placeholder="비밀번호를 입력하세요"/>
        <Div>{passwordError}</Div>
        <Button onClick={onClickEvent}>로그인</Button>
      </Login>
      <Search>
        <Span>이메일찾기</Span>
        <Span>비밀번호찾기</Span>
        <Span>회원가입</Span>
      </Search>
        <ButtonWrap>
          <KakaoButton><KakaoImg src="/section05/kakao.png"/>카카오톡 로그인</KakaoButton>
        </ButtonWrap>

    </Wrapper>
  )
 }