import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=' mx-auto '>
      
       <Header />

        <Homepage />

       <Footer />
    </div>
  )
}
