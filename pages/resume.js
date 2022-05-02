import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useDownloader  from "react-use-downloader";
import FileSaver from 'file-saver';

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
    <div className=' mx-auto '>
      
    <Header />

    <main className='flex flex-col bg-purpler text-white h-screen'>
        <h2 className='flex justify-center my-10 text-3xl'>Resume</h2>
        <div className='flex mx-20 py-10'>
          <img 
          className='flex shadow-black'
          src="/WebResume.jpg" alt="" />
        </div>
        <div className='flex justify-center my-10 '>
        <button 
        onClick={saveFile}
        className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
        px-20 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>Download CV</button>
      </div>
    </main>

    <Footer />
 </div>
  )
}

export default resume