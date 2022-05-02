import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function resume() {
  return (
    <div className=' mx-auto '>
      
    <Header />

    <main className='flex flex-col bg-purpler text-white h-screen'>
        <h2 className='flex justify-center my-10 text-3xl'>Resume</h2>
        <div className='flex mx-20 py-10'>
          <img 
          className='flex shadow-black'
          src="/0001.jpg" alt="" />
        </div>
        <div className='flex justify-center my-10 '>
        <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
        px-20 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>Download CV</button>
      </div>
    </main>

    <Footer />
 </div>
  )
}

export default resume