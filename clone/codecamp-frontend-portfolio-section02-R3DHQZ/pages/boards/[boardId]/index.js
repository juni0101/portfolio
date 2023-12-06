import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Avatar, AvatarWrapper, Body, BottomWrapper, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper, Writer } from "../../../styles/boardsDetail";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <Wrapper>
        <CardWrapper>
          <Header>
            <AvatarWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{data?.fetchBoard?.writer}</Writer>
                <CreatedAt>
                  {data?.fetchBoard?.createdAt}
                </CreatedAt>
              </Info>
            </AvatarWrapper>
          </Header>
          <Body>
            <Title>{data?.fetchBoard?.title}</Title>
            <Contents>{data?.fetchBoard?.contents}</Contents>
          </Body>
        </CardWrapper>
        <BottomWrapper>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </BottomWrapper>
      </Wrapper>
  );
}


// import {
//   Wrapper,
//   WriterInfo,
//   WriterInfoLeft,
//   Profileimg,
//   ProfileText,
//   ProfileName,
//   ProfileDate,
//   WriterInfoRight,
//   LinkImg,
//   MapImg,
//   WriterContents,
//   Title,
//   Contents,
//   LikeButton,
//   Like,
//   UnLike
// } from "../../../styles/boardsNewMutation";
// import { useRouter } from "next/router";
// import { useQuery, gql } from "@apollo/client";


// export const FETCH_BOARED = gql`
// query fetchBoard($boardId:ID!){
//   fetchBoard(boardId:$boardId){
//     _id
//     writer
//     title
//     contents
//   }
// }
// `

// export default function BoardsNewMutationPage(){
//   const router = useRouter()
//   console.log(router)

//   const {data} = useQuery(FETCH_BOARED, {
//     variables:{boardId: router.query.boardId},
//   })
//   console.log(data)



//   return(
//     <Wrapper>
//       <WriterInfo>
//         <WriterInfoLeft>
//           <Profileimg src="/Progile.png"></Profileimg>
//           <ProfileText>
//             <ProfileName>노원두</ProfileName>
//             <ProfileDate>Date: 2023.12.25</ProfileDate>
//             </ProfileText>
//         </WriterInfoLeft>
//         <WriterInfoRight>
//           <LinkImg src="/ic_link-32px.png"></LinkImg>
//           <MapImg src="/ic_location_on-32px.png"></MapImg>
//         </WriterInfoRight>
//       </WriterInfo>
//       <WriterContents>
//         <Title>게시글 제목입니다.</Title>
//         <Contents>게시글 내용입니다.</Contents>
//       </WriterContents>
//       <LikeButton>
//         <Like></Like>
//         <UnLike></UnLike>
//       </LikeButton>
//     </Wrapper>
//   )
// }

