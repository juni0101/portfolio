import {
  Main,
  Container,
  Header,
  Ssearch,
  HeaderWrap,
  H1,
  HeaderRight,
  Profile,
  H3,

  Nav,
  NavUl,
  NavLi,

  Contents,
  ContentsUl,
  ContentsLi,
  Text,
  QSpan,
  Span,
  Arrow,

  Footer,
  FooterUl,
  FooterLi,
  Home,
} from "../../styles/section04/style";


export default function myPage() {
  return (
      <Main>
        <Container>
          <Header>
            <Ssearch src="/search.png" width='23px' height='23px' />
            <HeaderWrap>
              <H1>마이</H1>
              <HeaderRight>
                <Profile src="/profile.png"/>
                <H3>임정아</H3>
              </HeaderRight>
            </HeaderWrap>
          </Header>

          <Nav>
            <NavUl>
              <NavLi>공지사항</NavLi>
              <NavLi>이벤트</NavLi>
              <NavLi>FAQ</NavLi>
              <NavLi>Q&A</NavLi>
            </NavUl>
          </Nav>

          <Contents>
            <ContentsUl>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 01</QSpan>
                  <Span>리뷰 작성은 어떻게 하나요?</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 02</QSpan>
                  <Span>리뷰 수정/삭제는 어떻게 하나요?</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 03</QSpan>
                  <Span>아이디/비밀번호를 잊어버렸어요</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 04</QSpan>
                  <Span>회원탈퇴를 하고싶어요.</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 05</QSpan>
                  <Span>출발지 설정은 어떻게 하나요?</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
              <ContentsLi>
                <Text>
                  <QSpan>Q. 06</QSpan>
                  <Span>비밀번호를 변경하고 싶어요</Span>
                </Text>
                <Arrow src="/arrow.png"></Arrow>
              </ContentsLi>
            </ContentsUl>
            <Footer>
              <FooterUl>
                <FooterLi>
                  <Home src='/Vector.png' ></Home> 
                  <Span>홈</Span>
                </FooterLi> 
                <FooterLi>
                  <Home src='/Vector1.png' ></Home> 
                  <Span>잇츠로드</Span>
                </FooterLi> 
                <FooterLi>
                  <Home src='/Vector2.png' ></Home> 
                  <Span>마이찜</Span>
                </FooterLi> 
                <FooterLi>
                  <Home src='/Vector3.png' ></Home> 
                  <Span>마이</Span>
                </FooterLi> 
           

              </FooterUl>
            </Footer>
          </Contents>
        </Container>
      </Main>
  )
}
