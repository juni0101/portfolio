import { useState } from "react";
import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Write,
  Password,
  Subject,
  Contects,
  ZipcodeWrapper,
  Zipcode,
  ZipcodeBtn,
  Address,
  Youtube,
  ImageWrapper,
  IamgeBtn,
  OptionWrapper,
  RadioBtn,
  RadioLabel,
  ButtonWrapper,
  SubmitBtn,
  RadioWrap,
  Error,
} from "../../../styles/boardsNew";


export default function mypage(){

  const [write, setWrite] = useState('')
  const [password, setPassword] = useState('')
  const [subject, setSubject] = useState('')
  const [contects, setContects] = useState('')

  const [writeError, setWriteError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [subjectError, setSubjectError] = useState('')
  const [contectsError, setContectsError] = useState('')

  function onChangeWrite(event) { 
    setWrite(event.target.value)
    if(write !== ''){
      setWriteError('')
    }else{
    }
    }
  function onChangePassword(event) { 
    setPassword(event.target.value)
    if(password !== ''){
      setPasswordError('')
    }
   }
  function onChangeSubject(event) { 
    setSubject(event.target.value)
    if(subject !== ''){
      setSubjectError('')
    }
   }
  function onChangeContects(event) { 
    setContects(event.target.value)
    if(contects !== ''){
      setContectsError('')
    }
   }
  
  function onClickSignup(){
    // console.log(write,password,subject,contects)
      if(!write){
        setWriteError('작성자를 입력해주세요.')
      }
      if(!password){
        setPasswordError('비밀번호를 입력해주세요.')
      }
      if(!subject){
        setSubjectError('제목을 입력해주세요.')
      }
      if(!contects){
        setContectsError('내용을 입력해주세요.')
      }
      if(write && password && subject && contects){
        alert('성공')
      }
  }

  return(
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Write type="text" onChange={onChangeWrite} placeholder='이름을 적어주세요'/>
          <Error>{writeError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={onChangePassword} placeholder='비밀번호를 적어주세요'/>
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" onChange={onChangeSubject} placeholder='제목을 적어주세요'/>
        <Error>{subjectError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contects type="text" onChange={onChangeContects}  placeholder='내용을 적어주세요'/>
        <Error>{contectsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode type="text" placeholder='07250'/>
          <ZipcodeBtn>우편번호 검색</ZipcodeBtn>
        </ZipcodeWrapper>
        <Address/>
        <Address/>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube type="text" placeholder='링크를 복사해주세요.'/>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <IamgeBtn>+</IamgeBtn>
        <IamgeBtn>+</IamgeBtn>
        <IamgeBtn>+</IamgeBtn>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioWrap>
          <RadioBtn type="radio" name="radio" id="youtube"></RadioBtn>
          <RadioLabel >유투브</RadioLabel>
          <RadioBtn type="radio" name="radio" id="photo"></RadioBtn>
          <RadioLabel>사진</RadioLabel>
        </RadioWrap>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitBtn onClick={onClickSignup}>등록하기</SubmitBtn>
      </ButtonWrapper>
    </Wrapper>
  )
}

