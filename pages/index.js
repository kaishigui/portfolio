import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset == 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])



  return (
    <main className=' flex flex-col mx-auto bg-purpler z-0 '>
      
       <Header scroll={scrollToBottom}/>

        <Homepage />

       <Footer />
    </main>
  )
}
