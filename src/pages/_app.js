import "@/styles/globals.css";
import Header from "./Header";
import Footer from "./footer";


export default function App({ Component, pageProps }) {
  return<>
  <Header></Header>
  <Component {...pageProps}/>
  <Footer/>
  </>
}
