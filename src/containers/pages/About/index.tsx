import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import AboutSection from '../../../components/about'
import SectionConsultation from '../../../components/sections/SectionConsultation'
import SectionTestimonial from '../../../components/sections/SectionTestimonial'

//type Props = {}

const AboutPage: React.FC = () => {
  return (
    <>
    <Breadcrumbs title='About Us' subtitle='About Us'/>
    <AboutSection/>
    <SectionConsultation/>
    <SectionTestimonial/>
    </>
  )
}

export default AboutPage