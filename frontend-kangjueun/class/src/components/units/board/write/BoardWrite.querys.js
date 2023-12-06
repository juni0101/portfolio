import { gql } from "@apollo/client"

export const 그래프큐엘셋팅 = gql`
  mutation createBoard($writer:String, $title:String, $contents:String){
          createBoard(
            writer:$writer,
            title: $title,
            contents: $contents){
            _id
            number
            message
          }
      }
`