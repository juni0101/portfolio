import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

export default function App({ Component, pageProps }) {

  // 그래프큐엘 세팅
  const client = new ApolloClient({
    uri:"http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() //컴퓨터의 메모리에다가 백엔드에서받아온 데이터 임시로저장해놓기  =>나중에 더자세히 알아보기
    
  })

  return (
    <div>
    <div>########여기는 app.js입니다#####</div>
    // 이 그래프큐엘셋팅 쓸수있도록 제공해줄게 라는뜻
    <ApolloProvider client={client}>
      <Component {...pageProps} />   {/* 위에코드가있어야 이게 그래프큐엘쓸수있음  */}
    </ApolloProvider>
    <div>########여기는 app.js입니다#####</div>
    </div>

  )
}
