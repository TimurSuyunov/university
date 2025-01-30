import React from 'react'
import Buttons from '../ui/buttons'
//icon
//import { FaArrowRight } from "react-icons/fa6";




const NavbarDefault = () => {
  return (
    <div className='hidden lg:flex w-full h-[80px] justify-between items-center'>
      {/* Logo*/}
      <div className='text-[20px] font-[600]'>Mrs.College Guide</div>

       {/* Nav-items*/}
       <div className='flex gap-x-5'>
       <a className='hover:text-[#E5B300]'>Universities</a>
       <a className='hover:text-[#E5B300]'>Courses</a>
       <a className='hover:text-[#E5B300]'>Community</a>
       <a className='hover:text-[#E5B300]'>News</a>
       <a className='hover:text-[#E5B300]'>About</a>
       </div>

        {/* Register*/}
        <div className='flex gap-x-2'>
        <Buttons text={'Login'}/>
        <Buttons text={'Sign Up'} v1={true}/>
        </div>
    </div>
  )   
}

export default NavbarDefault;



{/*<Buttons text={'Sign Up'} v1={true}/>
<Buttons text={'Login'}/>
<Buttons text={'See all'} v2={true} icon={<FaArrowRight />}/>*/} 