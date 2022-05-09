import React from 'react'
import {GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { menuItems} from './menuItems'
import Dropdown from './Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/router'



function Header({scroll}) {

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () =>  {
    (!dropdown) ? setDropdown(true) : setDropdown(false)
  }

  const [checkHome, setCheckHome] = useState(false);
  const { asPath,  } = useRouter();

  useEffect(() => {
    (asPath === '/') ? setCheckHome(false) 
    : setCheckHome(true)
  }, [])
  


  return (
    <nav className='bg-gray-900 sticky top-0 z-20 '>
      <header className={`flex justify-between  bg-gray-900 text-white h-20 
      ${dropdown && "h-fit pt-5 "} 
      max-w-7xl mx-auto`}>
    
          <button className='flex items-center  ml-10 px-5'>
            <Link href="/">
              <h2 className='text-2xl'>Z9</h2>
            </Link>
          </button>

          <div className='hidden  md:inline-flex  items-center 
          space-x-12 lg:space-x-16 px-10 mr-10'>
            
            <h3 className='lg:text-xl text-lg cursor-pointer
            hover:text-purple-500 hover:ease-in-out duration-300'>
              <Link href="/">
                <a>Home</a>
              </Link>
            </h3>
            <h3 className='lg:text-xl text-lg cursor-pointer
            hover:text-purple-500 hover:ease-in-out duration-300'>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </h3>
            <h3 className='lg:text-xl text-lg cursor-pointer
            hover:text-purple-500 hover:ease-in-out duration-300'>
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </h3>
            <h3 className='lg:text-xl text-lg cursor-pointer
            hover:text-purple-500 hover:ease-in-out duration-300'>
              <Link href="/">
                <a>Resume</a>
              </Link>
            </h3>
            <h3
              onClick={scroll}
             className={`lg:text-xl text-lg cursor-pointer
            hover:text-purple-500 hover:ease-in-out duration-300 md:mr-5
            ${checkHome && "hidden"} `}>Contact
            </h3>
          </div>

          <button 
          className="md:hidden lg:hidden  flex items-center px-10 
          outline-none"
          onClick={handleDropdown}
          >
          { (!dropdown) 
            ? <GiHamburgerMenu color={'#9F7AEA'}size={'2.0rem'} />
            : <IoMdClose color={'#9F7AEA'}size={'2.5rem'} />
          }   
          </button>  
      </header>
      <Dropdown style={{zIndex: '3'}} drop={!dropdown}/>
      
    </nav>
  )
}

export default Header