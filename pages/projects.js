import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function projects() {
  return (
    <div className=' mx-auto bg-purpler '>
      
    <Header />

    <main className='flex flex-col justify-evenly bg-purpler text-white max-w-8xl mb-5'>
        <div className='flex flex-col justify-center text-center my-16 mx-10'>
          <h1 className='text-4xl mb-3'>Sandbox Mode</h1>
          <h3 className='text-xl'>Here are some of my creations I have worked on recently</h3>
        </div>

        <div className='grid grid-col-1 md:grid-cols-2 auto-rows-auto mx-10 self-center max-w-5xl mb-10 gap-10'>
          <div className='flex flex-col items-center border border-transparent 
            rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
            transition duration-300 hover:border-purple-800 ease-in-out pb-10'>
              <Image  
                layout='intrinsic'
                height='400px'
                width='400px'
                objectFit='contain'
                src="/Images/Airbnb.png" 
                alt="" 
              />
              <div className='flex flex-col justify-center space-between'> 
                <h4 className='mt-1 text-xl'>Airbnb</h4>
                <p className='my-3'> This is project build with responsive mobile design, 
                full-desktop web app that handles server-side rendering for API search results. 
                This project uses Nextjs, TailwindCSS, Mapbox, Calendar and GraphQl.
                </p>
                <div className='flex justify-evenly '>
                  <a href="https://airbnb-yt-kaishigui.vercel.app/">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
                  </a>
                  <a href="https://github.com/kaishigui/airbnb-yt">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>Github Repo</button>
                  </a>
                </div>
              </div>
            </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out pb-10'>
            <Image  
              layout='intrinsic'
              height='400px'
              width='400px'
              objectFit='contain'
              src="/Images/Spotify.png" 
              alt="" 
            />
            <div className='flex flex-col justify-center space-between'> 
              <h4 className='mt-1 text-xl'>Spotify</h4>
              <p className='my-3'>Built a spotify clone with a functional player. 
                Built with React.js, MaterialUI and Firebase. Uses Redux and authetication 
                for user profiles and adding songs to playlist. 
                Uses spotifys API to give access to songs</p>
                <div className='flex justify-evenly '>
                  <a href="https://spotify-t7q2kxfee-kaishigui.vercel.app/">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
                  </a>
                  <a href="https://github.com/kaishigui/spotify">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>Github Repo</button>
                  </a>
                </div>
              </div>
          </div>
          <div className='flex flex-col  items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out pb-10'>
            <Image  
              layout='intrinsic'
              height='400px'
              width='400px'
              objectFit='contain' 
              src="/Images/Netflix.jpg" 
              alt="" 
              />
            <div className='flex flex-col justify-center space-between'> 
              <h4 className='mt-1 text-xl'>Netflix</h4>
              <p className='my-3'>Recreating Netflix with a responsive layout with Reactjs and MaterialUI.
                Implemented modern CSS desgins to create responsive movie banners with detailed descriptions.
                Uses a movie API with Axios to create catergories of movies with titles and posters.</p>
                <div className='flex justify-evenly '>
                  <a href="https://netflix-clone-zeta-red.vercel.app/">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
                  </a>
                  <a href="https://github.com/kaishigui/netflix-clone">
                    <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                      px-10 py-2  mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>Github Repo</button>
                  </a>
                </div>
            </div>
          </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out pb-10'>
            <Image 
              layout='intrinsic'
              height='400px'
              width='400px'
              objectFit='contain'
              src="/Images/Nightgame_generated.jpg" 
              alt="" 
            />
            <div className='flex flex-col justify-center space-between min-h-fit'> 
              <h4 className='mt-1 text-xl'>Lyngos</h4>
              <p className='my-3'>My personal Web App build with Next.js and Tailwind CSS 
                which takes song lyrics and calculates the top word or words used in the song.
                Uses MongoDB to store the lyrics and results for users to review.</p>
                <a href="https://github.com/kaishigui/hangman.git">
              <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
                px-10 py-2 mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project
              </button>
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center border border-transparent 
          rounded-sm shadow-[0_0_10px_] shadow-purple-800 p-5
          transition duration-300 hover:border-purple-800 ease-in-out pb-10'>
            <Image 
              layout='intrinsic'
              height='400px'
              width='400px'
              objectFit='contain' 
              src="/Images/Hangman.jpg" 
              alt="" 
            />
            <div className='flex flex-col justify-center space-between space-y-6'> 
              <h4 className='mt-1 text-xl'>Hangman</h4>
              <p className='my-3'>Built a game of Hangman using Python. Uses basic game logic and 
                Object Oriented Programming to create the logic and play of the game.</p>
              <a href="https://github.com/kaishigui/hangman.git">
              <button className='flex bg-galaxy opacity-90 border-purple-500 rounded-md 
               px-10 py-2 mt-5 transition duration-150 hover:bg-purple-900 hover:ease-in'>View Project</button>
              </a>
            </div>
          </div>
        </div>
    </main>

    <Footer />
 </div>
  )
}

export default projects