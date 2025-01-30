import React from 'react'
import {Card} from '../ui/card'
import Title from '../ui/title'
import Buttons from '../ui/buttons'
//icon
import { FaArrowRight } from "react-icons/fa6";


const Information = ({data}) => {
  console.log(data);
  return (
    <div className='flex flex-col gap-y-4'>
      <Title title={'Top ranking universities'}/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data ? data.map(item=><Card key={item.id} title={item.title} image={item.image} link={item.link}/>): "no data"}
      </div>
     <div className='w-full max-w-[150px] mx-auto mt-5'> <Buttons v2={true} text={'SEE ALL'} icon={<FaArrowRight/>}/></div>
    </div>
  )
}

export default Information
