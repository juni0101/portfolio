//라우팅 이동완료
import { useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId:ID){
    fetchProduct(productId:$productId){
      _id
      seller
      name
      detail
      price
    }
  }
`

export default function GraphqlMutation (){
  const router = useRouter()
  console.log(router)

  const {data} = useQuery(FETCH_PRODUCT, {
    variables:{
      
      productId: router.query.productId,
    }
  })
  console.log(data)
  console.log(router.query.productId)

  return(
    <div>
      <div>번 상품등록이 되었습니다</div>
      <div>판매자:{data? data.fetchProduct.seller : ""}</div>
      <div>상품이름:{data? data.fetchProduct.name : ""}</div>
      <div>상품설명:{data? data.fetchProduct.detail : ""}</div>
      <div>상품가격:{data? data.fetchProduct.price : ""}</div>
    </div>
  )
}