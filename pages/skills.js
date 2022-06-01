import React from 'react'
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from 'react-icons/io'
import {SiAmazonaws, SiAngular, SiBootstrap, SiExpress, SiGit, SiGraphql, SiJava, SiLinux, SiMongodb, SiNextdotjs, SiPostgresql, SiRedux, SiSwift, SiTailwindcss, SiTypescript, SiVisualstudio} from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import Footer from '../components/Footer'
import Header from '../components/Header'

function skills() {
  return (
    <div className=' mx-auto '>
      
       <Header />

       <main className='flex flex-col bg-purpler items-center text-white '>
           <h2 className='my-16 mx-5 text-4xl'>My Character Profile</h2>
            <div className='flex flex-col justify-center'>
              <h2 className='flex justify-center mb-5 text-3xl'>Languages</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto gap-4 mx-10 mb-10'>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90 hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                  <IoLogoJavascript size={'4.0rem'} className=""/> 
                  <p className=''>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <IoLogoPython size={'4.0rem'} className=""/> 
                  <p className=''>Python</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90 hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiTypescript size={'4.0rem'} className=""/> 
                  <p className=''>TypeScript</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <IoLogoNodejs size={'4.0rem'} className=""/> 
                  <p className=''>NodeJS</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiMongodb size={'4.0rem'} className=""/> 
                  <p className=''>MongoDB</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiExpress size={'4.0rem'} className=""/> 
                  <p className=''>ExpressJS</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiGraphql size={'4.0rem'} className=""/> 
                  <p className=''>SiGraphql</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiRedux size={'4.0rem'} className=""/> 
                  <p className=''>Redux</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center'>
              <h2 className='flex justify-center mb-5 text-3xl'>Tools/Frameworks</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto gap-4 mx-10 mb-10'>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                  <GrReactjs size={'4.0rem'} className=""/> 
                  <p className=''>ReactJs</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiNextdotjs size={'4.0rem'} className=""/> 
                  <p className=''>NextJS</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiGit size={'4.0rem'} className=""/> 
                  <p className=''>Git</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiTailwindcss size={'4.0rem'} className=""/> 
                  <p className=''>TailwindCSS</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiBootstrap size={'4.0rem'} className=""/> 
                  <p className=''>Bootstrap</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10 
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiVisualstudio size={'4.0rem'} className=""/> 
                  <p className=''>VSCode</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiAmazonaws size={'4.0rem'} className=""/> 
                  <p className=''>AWS</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiLinux size={'4.0rem'} className=""/> 
                  <p className=''>Linux</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center'>
              <h2 className='flex justify-center mb-5 text-3xl'>Future Goals</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto gap-4 mx-10 mb-10'>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                  <SiJava size={'4.0rem'} className=""/> 
                  <p className=''>Java</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiPostgresql size={'4.0rem'} className=""/> 
                  <p className=''>Postgresql</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                  <SiAngular size={'4.0rem'} className=""/> 
                  <p className=''>Angular</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-sm border-purple-500 p-10
                transition duration-300 hover:scale-90  hover:border-purple-400 hover:border-2 hover:text-purple-400 ease-in-out'>
                <SiSwift size={'4.0rem'} className=""/> 
                  <p className=''>Swift</p>
                </div>
              </div>
            </div>
       </main>

       <Footer />
    </div>
  )
}

export default skills