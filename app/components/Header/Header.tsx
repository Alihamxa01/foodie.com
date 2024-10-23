import React from 'react'

export default function Header() {
  return (
    <header className='bg-gradient-to-r sticky top-0 z-50 from-orange-400 to-orange-500 shadow-lg'>
      <div className='flex justify-between items-center p-6'>
        <h1 className='text-4xl font-extrabold text-white '>
          MR. FOODIE
        </h1>
        <nav className='space-x-8'>
          <a 
            href="#home" 
            className='text-lg font-semibold text-white hover:text-amber-800 transition duration-300 ease-in-out '
          >
            Home
          </a>
          <a 
            href="#food" 
            className='text-lg font-semibold text-white hover:text-amber-800 transition duration-300 ease-in-out transform hover:scale-110'
          >
            Food
          </a>
          <a 
            href="#specials" 
            className='text-lg font-semibold text-white hover:text-amber-800 transition duration-300 ease-in-out transform hover:scale-110'
          >
            Specials
          </a>
          <a 
            href="#about" 
            className='text-lg font-semibold text-white hover:text-amber-800 transition duration-300 ease-in-out transform hover:scale-110'
          >
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
