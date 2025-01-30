import React from 'react'

const Buttons = ({text,icon,v1,v2, onClick}) => {

const v1Style ='text-[white]  border-[1px] border-solid border-[#E5B300] bg-[#E5B300] hover:text-[#E5B300] hover:bg-[white]'
const v2Style ='text-[#E5B300]  border-[1px] border-solid border-[#E5B300] bg-[white] hover:text-[white] hover:bg-[#E5B300]'



  return (
    <div 
    className={`flex justify-center items-center gap-x-2  uppercase p-1 font-[600px] cursor-pointer  transition-all ${v1 ? v1Style : v2 ? 
    v2Style : ''}`} 
    onClick={onClick}>
      <span>{text}</span> 
      {icon && <span>{icon}</span>}
      
    </div>
  
  )
}

export default Buttons
