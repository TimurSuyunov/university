import React, { useState } from 'react'
import Buttons from '../ui/buttons'

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHidden } from 'react-icons/gi';


const NavbarMobile = () => {

const [toggle,setToggle] = useState(false)


  return (
    <div className='lg:hidden block relative bg-white '>
       <div className='flex item-center justify-between h-[60px]'>
       <div className='text-[20px] font-[600]'>Mrs.College Guide</div>
       <div className='text-[20px] cursor-pointer' onClick={()=>setToggle(!toggle)}>
        {toggle ? <IoClose /> :   <FaBars/>}
        </div>
       </div>

       <div className={`${toggle && 'hidden'} absolute z-[100] w-full h-[100vh] bg-white `}>
         {/* Nav-items*/}
       <div className='flex flex-col  gap-y-3'>
       <a className='hover:text-[#E5B300]'>Universities</a>
       <a className='hover:text-[#E5B300]'>Courses</a>
       <a className='hover:text-[#E5B300]'>Community</a>
       <a className='hover:text-[#E5B300]'>News</a>
       <a className='hover:text-[#E5B300]'>About</a>
       </div>

         <div className='flex gap-x-2 mt-3'>
           <Buttons text={'Login'}/>
           <Buttons text={'Sign Up'} v1={true}/>
         </div>

       </div>
       
    </div>
  )
  }
  
  export default NavbarMobile
  
  {/*<div className='flex gap-x-2'>
   <Buttons text={'Login'}/>
   <Buttons text={'Sign Up'} v1={true}/>
   </div>*/}