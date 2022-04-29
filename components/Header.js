import React from 'react'
import {GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { menuItems} from './menuItems'
import Dropdown from './Dropdown';
import Link from 'next/link';


function Header() {

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () =>  {
    (!dropdown) ? setDropdown(true) : setDropdown(false)
  }

  return (
    <nav className=''>
      <header className={`flex justify-between sticky top-0 bg-gray-900 text-white h-20 
      ${dropdown && "h-fit pt-5 "} 
      max-w-7xl mx-auto`}>
    
          <button className='flex items-center px-10'>
            <Link href="/">
              <h2 className='text-2xl'>Z9</h2>
            </Link>
          </button>

          <div className='hidden md:inline-flex sm:inline-flex items-center 
          space-x-10 px-20'>
            <h3 className='text-lg'>Home</h3>
            <h3 className='text-lg'>About</h3>
            <h3 className='text-lg'>Projects</h3>
            <h3 className='text-lg'>Resume</h3>
            <h3 className='text-lg'>Contact</h3>
          </div>

          <button 
          className="md:hidden lg:hidden sm:hidden flex items-center px-10 
          outline-none"
          onClick={handleDropdown}
          >
          { (!dropdown) 
            ? <GiHamburgerMenu color={'#9F7AEA'}size={'2.0rem'} />
            : <IoMdClose color={'#9F7AEA'}size={'2.5rem'} />
          }   
          </button>  
      </header>
      <Dropdown drop={!dropdown}/>
      
    </nav>
  )
}

export default Header