import '../styles/globals.css'
import  '../styles/style.css'
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}



export default wrapper.withRedux(MyApp)
