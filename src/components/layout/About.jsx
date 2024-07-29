import React from 'react';
import aboutimage from "../../assets/img/about.png";
import playbutton from "../../assets/img/play-circle.png";

function About() {
  return (
   <>
<div id='about' className="about mt-5 container flex items-center flex-col gap-50 mt-[100px] text-center">
    <div className="about-top">
    <div className="text-center about-title font-nunito text-[#377def] text-[24px] font-semibold leading-[24px] tracking-[0.01em] text-left">About Us</div>
    <div className="about-subtitle font-nunito text-[55px] font-bold leading-[75.02px] tracking-[0.003em] text-center  text-left">Our Template</div>
    </div>
    <div className="about-bottom flex mt-5">
        <img className='w-[565px] h-[402px]' src={aboutimage}/>
        <div className="about-bottom-text ml-10 mt-10">
            <p className='text-[#464646] font-quicksand text-20 font-semibold text-[16px] text-left'>We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business</p>
            <p className='text-[#464646] font-quicksand text-20 font-semibold text-[16px] text-left mt-5'>We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business</p>
            <div className="about-bottom_buttons flex gap-5 mt-10">
                <button className='border bg-[#377def] transition-all duration-300   font-bold border-[#377DFF] text-[#fff] py-3 px-[50px] rounded-3xl  active:bg-zinc-600 active:border-none active:text-[#ffffff]'>About Us</button>
                <button className='flex border gap-2 items-center  font-bold border-[#377DFF] text-[#377DFF] py-3 px-[50px] rounded-3xl hover:bg-slate-200 active:bg-zinc-600 active:border-none active:text-[#ffffff]'><img className='mt-[0.5px]' src={playbutton}/>
                <h1>Our story</h1></button>
            </div>
        </div>
    </div>
</div>




   </>
  )
}

export default About
