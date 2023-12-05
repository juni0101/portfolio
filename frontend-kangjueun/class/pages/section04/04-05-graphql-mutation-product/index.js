//인풋창값을 받아서 변수전달 방법 
import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
      mutation createProduct
      ($seller: String ,$createProductInput: CreateProductInput!) {
        createProduct(
          seller:$seller,
          createProductInput:$createProductInput){ 
          _id
          number
          message
        }
      }
`


export default function GraphqlMutationPage() { 
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit =async()=>{
    const result = await createProduct({
      variables:{     /* variables이게 $역할을함  */
      seller:"훈이",
      createProductInput: {
        name: "마우스",
        detail: "정말좋은 마우스",
        price: 3000
      }
        
      }
    })
    console.log(result)
  }

  const onChangeWriter =(event)=>{
    setWriter(event.target.value)

  }
  
  const onChangeTitle =(event)=>{
    setTitle(event.target.value)
  }
  const onChangeContents =(event)=>{
    setContents(event.target.value)
  }


  return(
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  )
 }