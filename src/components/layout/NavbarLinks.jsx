import React from 'react'

const NavbarLinks = () => {
  return (
    <>
    <ul className='items-center flex gap-[50px]' >
            <li className='text-lg font-extrabold ' >
                <a className='transition-all duration-300 hover:font-extrabold' href="#hero">Home</a>
            </li>
            <li className=' text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#about">About</a>
            </li>
            <li className='text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#services">Services</a>
            </li>
            <li className='text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#project">Project</a>
            </li>
        </ul>
    </>
  )
}

export default NavbarLinks
