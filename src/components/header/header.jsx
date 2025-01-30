import React from 'react'

import header from "../../assets/home.jfif"

const Header = () => {
  return (
    <div>
        <div className='w-full h-[85vh] relative'>
            <span className='w-full h-full bg-[rgba(0,0,0,0.6)] absolute z-[2] top-0 left-0'></span>
            <img className='absolute z-[1] top-0 left-0 w-full h-[85vh] object-cover' src={header} alt="this is header img" title='this is header img' />
        </div>
        <div className='text-center text-[white] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[3]'>
            <h1 className='capitalize text-[20px] sm:text-[30px] md:text-[40px] font-[600] '>Find your<span className='bg-[#E5B300] text-white px-1'>Future</span>today !</h1>
            <h2 className='text-[14px] sm:text-[16px] md:text-[20px]'>The Ultimate Guide to Universities Worldwide</h2>
        </div> 
    </div>
  )
}

export default Header