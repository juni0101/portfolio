//인풋창으로 변수값 돌려주기 (pruduct 상품페이지)
import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct
  ($seller:String, $createProductInput:CreateProductInput!){
    createProduct(
      seller:$seller,
      createProductInput: $createProductInput){ 
        _id
        number
        message
      }
  }
`

export default function GraphqlMutationProductPage(){
  const [상품페이지] = useMutation(CREATE_PRODUCT)
  const [seller, setSeller] = useState()
  const [name, setName] = useState()
  const [detail, setDetail] = useState()
  const [price, setPrice] = useState()

  const onClickProduct =async()=>{
    const result = await 상품페이지({
      variables:{
        seller:seller,
        createProductInput:{
          name:name,
          detail: detail,
          price: parseInt(price),
        }
      }
    })
    console.log(result)
  }

  const onChangeSeller =(event)=>{
    setSeller(event.target.value)
  }
  const onChangeName =(event)=>{
    setName(event.target.value)
  }
  const onChangeDetail =(event)=>{
    setDetail(event.target.value)
  }
  const onChangePrice =(event)=>{
    setPrice(event.target.value)
  }

  return(
    <div>
      판매자:<input type='text' onChange={onChangeSeller} />
      상품이름:<input type='text' onChange={onChangeName} />
      상품설명:<input type='text' onChange={onChangeDetail} />
      상품가격:<input type='text' onChange={onChangePrice} />
      <button onClick={onClickProduct}>그래프큐엘 요청하기</button>
    </div>
  )
}