import React from 'react'
import { RiComputerLine } from 'react-icons/ri';
import { IoSettingsOutline } from'react-icons/io5';
import { PiTelevision } from'react-icons/pi';
import { CiPen } from'react-icons/ci';
import { IoArrowForward } from'react-icons/io5';

function Services() {
  return (
    <>
    <div id='services' className="services container flex justify-between">
<div className="services-left">
   <div className="services-left_title mt-20">
   <p className='text-[24px] text-[#377def] font-semibold tracking-0.01 text-left'>Our Services</p>
    <h1 className='font-nunito text-[#1D1D1D] text-[55px] font-bold text-left'>Perfect and Fast <br />Movement</h1>
    <p className='text-[#464646] font-quicksand text-20 font-semibold text-[16px] text-left mt-0'>We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business</p>
   </div>
   <div className="services-button flex gap-3 items-center mt-5">
    <h1 className='text-[24px] text-[#377def] font-semibold tracking-0.01 text-left'>Read more</h1>
    <IoArrowForward className='size-7'/>
   </div>
</div>
<div className="services-right grid gap-[25px] grid-cols-2 grid-rows-2 mt-24">
    <div className="service-card items-center flex flex-col">
    <RiComputerLine className='size-[70px]'/>
   <h1 className='font-quicksand text-[24px] font-bold leading-34 tracking-0.01 text-center text-center'>Social Media <br /> Management</h1>
    </div>
    <div className="service-card items-center flex flex-col">
    <IoSettingsOutline  className='size-[70px]'/>
        <h1 className='font-quicksand text-[24px] font-bold leading-34 tracking-0.01 text-center text-center'>Search Engine <br />Opimization</h1>
    </div>
    <div className="service-card items-center flex flex-col">
    <CiPen className='size-[70px]' />
    <h1 className='font-quicksand text-[24px] font-bold leading-34 tracking-0.01 text-center text-center'>Design</h1>
    </div>
    <div className="service-card items-center flex flex-col">
    <PiTelevision className='size-[70px]' />
    <h1 className='font-quicksand text-[24px] font-bold leading-34 tracking-0.01 text-center text-center'>Ads</h1>
    </div>
</div>
    </div>
    </>
  )
}

export default Services
