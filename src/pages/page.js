import React from 'react'
import Header from '../components/header/header'
import Universitet from '../components/universitet/universitet'
import Information from '../components/information/information'
//data university
import { Universities,Courses,CommunityData} from '../data/mockData'
import Faq from '../components/faq/faq'
import Community from '../components/community/community'




const Page = () => {
  return (
    <div>
      <Header/>
      <Universitet/>
      <Community/>
      <Information data={Universities}/>
      <Information data={CommunityData}/>
      <Faq/>
    </div>
  )
}

export default Page
