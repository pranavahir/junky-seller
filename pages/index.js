import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from './components/HomePage/auth'
export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        
      </Head>
      <Auth/>
      {/* <ProductsSection/>
      <Footer/> */}
    </div>
  )
}
