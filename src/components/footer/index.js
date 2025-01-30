import React from 'react'
import FooterMobile from './footerMobile'
import FooterDefault from './footerDefault'

const Footer = () => {
  return (
    <div className='bg-[#36384E] text-[#FFFFFF]  px-4 py-4'>
     <FooterDefault/>
     <FooterMobile/>
    </div>
  )
}

export default Footer 
