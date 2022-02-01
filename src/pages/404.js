import  * as React from "react"
import Seo from "../components/seo"
import { navigate } from "@reach/router"  

const NotFoundPage = () => {
  React.useEffect(() => {
    setTimeout(() => {
    navigate('/')
  }, 3000)
}, [])

  return (

  <>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist</p>
    <p>Back to </p>
  </>
  )
}

export default NotFoundPage
