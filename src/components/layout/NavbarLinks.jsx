import React from 'react'

const NavbarLinks = () => {
  return (
    <>
    <ul className='items-center flex gap-[50px]' >
            <li className='text-lg font-light ' >
                <a className='transition-all duration-300 hover:font-extrabold' href="#">Home</a>
            </li>
            <li className=' text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#">About</a>
            </li>
            <li className='text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#">Services</a>
            </li>
            <li className='text-lg font-light'>
              <a className='transition-all duration-300 hover:font-extrabold' href="#">Project</a>
            </li>
        </ul>
    </>
  )
}

export default NavbarLinks
