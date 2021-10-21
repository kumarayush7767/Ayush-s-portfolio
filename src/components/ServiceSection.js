/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react'
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

const ServiceSection = () => {
    return (
        <ServicesItemStyles>
            <div className="container">
            <SectionTitle heading="Services" 
             subheading="what can i do for you?"
            />
            <div className="services__allItems">
               <ServicesSectionItem
                 icon={<MdDesktopMac/>}
                 title="Website Design"
                 desc="I do ui/ux design for the
                 website that helps website to get
                 a unique look."
               />
               <ServicesSectionItem
                 icon={<MdCode/>}
                 title="Web Dev"
                 desc="I also develop the websites.
                 I create high performance website
                 with blazing fast speed."
               />
               <ServicesSectionItem
                 icon={<MdPhonelinkSetup/>}
                 title="Competitive Coder"
                 desc="I am a coder. I have done DSA problems and cp on LeetCode,Codechef
                 ,Hackerrank,GeeksforGeeks and on many more..."
               />
            </div>
            </div>
        </ServicesItemStyles>
    )
}

export default ServiceSection
