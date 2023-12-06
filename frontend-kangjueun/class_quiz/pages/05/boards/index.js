//입력값받아서 상품등록후 -> 상품등록페이지 넘어가기
import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
  createProduct(seller:$seller,
    createProductInput:$createProductInput){
      _id
      number
      message
    }
}
`

export default function GraphqlMutationPage(){
  const router = useRouter()
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [seller, setSeller] = useState()
  const [name, setName] = useState()
  const [detail, setDetail] = useState()
  const [price, setPrice] = useState()

  const onClickProduct =async()=>{
    try{
      const result = await createProduct({
        variables:{
          seller:seller,
          createProductInput: {
            name: name,
            detail:detail,
            price: parseInt(price),
          }
        }})
      console.log(result)
      //productId의 data를 못가져와서 계속 오류수정했었는데 원인은 createProduct에서 id데이터를 가져오지않아서였다.
      const productId = result.data.createProduct._id;
      router.push(`/05/boards-mutation?productId=${productId}`);
    }catch(error){
      alert(error.message)
    }
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
    판매자: <input type="text" onChange={onChangeSeller}/>
    상품이름: <input type="text" onChange={onChangeName}/>
    상품설명: <input type="text" onChange={onChangeDetail}/>
    상품가격: <input type="text" onChange={onChangePrice}/>
    <button onClick={onClickProduct}>그래프큐엘 요청하기</button>
    </div>
  )
}