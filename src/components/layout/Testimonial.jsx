import React from 'react'
import angelrose from "../../assets/img/angel-rose.png"
const Testimonial = () => {
  return (
    <>
    <div className="testimonial mt-14" id="testimonial">
        <div className="testimonial-title">
            <h1 className='text-center font-nunito text-[#377def] text-[24px] font-semibold leading-[24px] tracking-[0.01em] text-left'>Testimonial</h1>
            <h1 className='font-nunito text-[55px] font-bold leading-[75.02px] tracking-[0.003em] text-center  text-left'>People Talk about us</h1>
        </div>
        <div className="testimonial-cards flex gap-10 items-center justify-center mt-10">
            <div className="testimonial-card transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] rounded-[20px] flex items-left gap-6 flex-col w-[380px] h-[275px] item box-shadow: 0px 8px 24px 0px #0000000D bg-white">
                <div className="testimonial-card_top mt-14 ml-8 flex gap-6 items-center">
<div className="card-top">
<img src={angelrose} className='w-16 h-16'/>
</div>
<div className="card-bottom gap-0 flex gap-2 flex-col">
    <h1 className='font-nunito text-[#377def] text-[24px] font-semibold leading-[24px]'>Angel Rose</h1>
    <p className='text-[#464646] font-normal text-[11px]'>Creative Manager</p>
</div>
                </div>
                <div className="testimonial-card_bottom ml-8">
                    <p className='text-left font-normal text-[#464646] text-[18px]'>There are many variations <br /> passages of Lorem Ipsum majority <br /> some by words which don't look . </p>
                </div>
            </div>
            <div className="testimonial-card transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] rounded-[20px] flex items-left gap-6 flex-col w-[380px] h-[275px] item box-shadow: 0px 8px 24px 0px #0000000D bg-white">
                <div className="testimonial-card_top mt-14 ml-8 flex gap-6 items-center">
<div className="card-top">
<img src={angelrose} className='w-16 h-16'/>
</div>
<div className="card-bottom gap-0 flex gap-2 flex-col">
    <h1 className='font-nunito text-[#377def] text-[24px] font-semibold leading-[24px]'>Angel Rose</h1>
    <p className='text-[#464646] font-normal text-[11px]'>Creative Manager</p>
</div>
                </div>
                <div className="testimonial-card_bottom ml-8">
                    <p className='text-left font-normal text-[#464646] text-[18px]'>There are many variations <br /> passages of Lorem Ipsum majority <br /> some by words which don't look . </p>
                </div>
            </div>
            <div className="testimonial-card transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] rounded-[20px] flex items-left gap-6 flex-col w-[380px] h-[275px] item box-shadow: 0px 8px 24px 0px #0000000D bg-white">
                <div className="testimonial-card_top mt-14 ml-8 flex gap-6 items-center">
<div className="card-top">
<img src={angelrose} className='w-16 h-16'/>
</div>
<div className="card-bottom gap-0 flex gap-2 flex-col">
    <h1 className='font-nunito text-[#377def] text-[24px] font-semibold leading-[24px]'>Angel Rose</h1>
    <p className='text-[#464646] font-normal text-[11px]'>Creative Manager</p>
</div>
                </div>
                <div className="testimonial-card_bottom ml-8">
                    <p className='text-left font-normal text-[#464646] text-[18px]'>There are many variations <br /> passages of Lorem Ipsum majority <br /> some by words which don't look . </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial
