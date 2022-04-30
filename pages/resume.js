import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function resume() {
  return (
    <div className=' mx-auto '>
      
    <Header />

    <main className='flex flex-col bg-purpler text-white '>
        <h2 className='flex justify-center'>Resume</h2>
        <img src="/MykellDevResume.pdf" alt="" />

      <button>Download</button>
    </main>

    <Footer />
 </div>
  )
}

export default resume