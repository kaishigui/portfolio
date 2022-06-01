import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useDownloader  from "react-use-downloader";
import FileSaver from 'file-saver';
import Image from 'next/image';

function resume() {

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + fileUrl,
      filename
    );
  }

    const fileUrl = "/MWebResume.pdf";
    const filename = "MWebResume.pdf";

  return (
    <div className=' mx-auto h-screen '>
      
    <Header />

    <main className='flex flex-col bg-purpler text-white h-full'>
        <h2 className='flex justify-center my-5 text-4xl mt-10'>Resume</h2>
        <div className='flex justify-center mx-20 '>
          <Image  
          layout='intrinsic'
          height='700px'
          width='500px'
          objectFit='contain'
          className='flex md:max-w-2xl md:self-center max-w-md mx-10 px-10 object-contain shadow-black'
          src="/WebResume.jpg" alt="" />
        </div>
        <div className='flex justify-center my-10 '>
        <a href='/MWebResume.pdf' download>
          <button 
          onClick={saveFile}
          className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
          px-20 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>Download CV
          </button>
        </a>
      </div>
    </main>

    <Footer />
 </div>
  )
}

export default resume