import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { menuItems} from './menuItems'


function Dropdown( {drop} ) {
  
  return (
    <header className={`flex justify-center bg-gray-900 text-white relative z-50
    ${ drop && 'hidden'}`}>
      <ul className="mb-5 text-center">
      {menuItems.map((menu, index) => {
        return (
          <li 
          className='text-xl py-5 hover:text-purple-500 hover:ease-in-out duration-300' 
            key={index}> 
            <Link href={menu.id}>
              <a>{menu.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </header>
  )
}

export default Dropdown