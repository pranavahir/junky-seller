// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Component  key={router.asPath} {...pageProps} />
}

export default MyApp
