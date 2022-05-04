import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function projects() {
  return (
    <div className=' mx-auto bg-purpler '>
      
    <Header />

    <main className='flex flex-col justify-evenly bg-purpler text-white max-w-8xl'>
        <div className='flex flex-col justify-center text-center my-16 mx-10'>
          <h1 className=' text-4xl mb-3'>Sandbox Mode</h1>
          <h3 className='text-xl'>Here are some of my creations I've worked on recently</h3>
        </div>

        <div className='flex grid grid-col-1 md:grid-cols-2 auto-rows-auto mx-10 mb-10 gap-10'>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out'>
            <img className='bg-white p-20' src="" alt="" />
            <h4 className='mt-5'>Spotify</h4>
            <p className='my-3'>Built a spotify clone with a functional player. 
              Built in React.js, MaterialUI and firebase. Uses redux and authetication 
              for user profiles and adding songs to playlist. 
              Uses spotify's API to give access to songs</p>
            <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
        px-10 py-2  mt-3 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
          </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out'>
            <img className='bg-white p-20' src="" alt="" />
            <h4 className='mt-5'>Netflix</h4>
            <p className='my-3'>Recreating Netflix with a responsive layout with Reactjs and MaterialUI.
              Implemented modern CSS desgins to create responsive movie banners with detailed descriptions.
              Uses a movie API with Axios to create catergories of movies with titles and posters.</p>
            <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md
        px-10 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
          </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out'>
            <img className='bg-white p-20' src="" alt="" />
            <h4 className='mt-5'>Lyngos</h4>
            <p className='my-3'>My personal Web App build with Next.js and Tailwind CSS 
              which takes song lyrics and calculates the top word or words used in the song.
              Uses MongoDB to store the lyrics and results for users to review.</p>
            <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
        px-10 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
          </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out'>
            <img className='bg-white p-20' src="" alt="" />
            <h4 className='mt-5'>Hangman</h4>
            <p className='my-3'>Built a game of Hangman using Python. Uses basic game logic and 
              Object Oriented Programming to create the logic and play of the game.</p>
            <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
        px-10 py-2 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
          </div>
        
        </div>
    </main>

    <Footer />
 </div>
  )
}

export default projects