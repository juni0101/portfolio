import { useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchBoard($productId:ID){
    fetchProduct(productid:$productId){
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
      productid: router.query.productid
    }
  })
  console.log(data)

  return(
    <div>
      <div>번 상품등록이 되었습니다</div>
      <div>판매자:{data?.fetchProduct?.seller}</div>
    </div>
  )
}