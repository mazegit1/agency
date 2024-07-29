import React from 'react'
import heroimage from "../../assets/img/hero-img.png"
const Hero = () => {
  return (
    <>
 <div className="hero" id='hero'>
 <div className="hero-title flex flex-col gap-[26px] items-center ml-0 mx-auto mt-[50px]">
        <h1 className='font-nunito text-[64px] font-extrabold leading-[87.3px] tracking-[0.01em] text-center'>Make your dream <br />
        business goal come true</h1>
        <p className='font-nunito text-[20px] font-normal leading-[30px] tracking-[0.01em] text-center text-[#464646]'>when you need us for improve your business, <br />
        then come with us to help your business have reach it, you just sit and feel that goal</p>
        <button className=' transition-all duration-300 border font-bold border-[#377DFF] bg-sky-700 text-teal-50 text-[#377DFF] py-3 px-[50px] rounded-3xl hover:text-black hover:bg-slate-200 active:bg-zinc-600 active:border-none active:text-[#ffffff]'>Start Project</button>
    </div>
    <div className="hero-img">
        <img className='w-[70%] mx-auto' src={heroimage}/>
    </div>
 </div>
    </>
  )
}

export default Hero
