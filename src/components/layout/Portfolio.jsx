import React from 'react'
import portfolioimg1 from "../../assets/img/portfoliofirst.png";
import portfolioimg2 from "../../assets/img/portfoliosecond.png";
import portfolioimg3 from "../../assets/img/portfoliothird.png";

const Portfolio = () => {
  return (
    <>
    <div className="portfolio flex items-center flex-col gap-[50px] mt-10" id='project'>
        <div className="portfolio-title ">
            <h1 className='text-center font-nunito text-[#377def] text-[24px] font-semibold leading-[24px] tracking-[0.01em] text-left'>Our Portfolio</h1>
            <h1 className='font-nunito text-[55px] font-bold leading-[75.02px] tracking-[0.003em] text-center  text-left'>What do we do</h1>
            <p className='text-center font-bold'>all projects that we have already done , proven can help to use more 
            <br />comfortable, then can used by client from our business</p>
        </div>
        <div className="portfolio-images flex gap-5 items-center " >
            <img src={portfolioimg1} className='w-[350px] h-[350px] ' />
            <img src={portfolioimg2} className='w-[400px] h-[400px] '/>
            <img src={portfolioimg3} className='w-[350px] h-[350px] '/>
        </div>
    </div>
    </>
  )
}

export default Portfolio
