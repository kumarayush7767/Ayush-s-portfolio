/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyles = styled.div`
   padding-top: 10rem;
   background-color: var(--deep-dark);
   .container{
       display: flex;
       gap: 3rem;
   }
   .footer__col1{
       flex: 2;
   }
   .footer__col2,
   .footer__col3,
   .footer__col4{
       flex: 1;
   }
   .footer__col1__title{
       font-size: 3.5rem;
       margin-bottom: 1rem;
   }
   .copyright{
       background-color: var(--dark-bg);
       text-align: left;
       padding: 1rem 0;
       margin-top: 5rem;
       .para{
           margin-left: 0;
       }
   }
   @media only screen and (max-width: 768px){
       .container{
           flex-direction: column;
           gap: 0rem;
           & > div {
               margin-top: 5rem;
           }
       }
       .footer__col1 .para{
           max-width: 100%;
       }
       .copyright{
           .container{
               div{
                   margin-top: 0;
               }
           }
       }
   }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div className="container">
              <div className="footer__col1">
                <h1 className="footer__col1__title">
                   Ayush Kumar
                </h1>
                <PText>
                    A freelance web designer and developer from
                    Bettiah,Bihar. I always make websites that have unique
                    designs and also have a good performance rate.
                </PText>
              </div>
              <div className="footer__col2">
                 <FooterCol 
                  heading="Important Links"
                  links={
                      [
                          {
                              title: 'Home',
                              path: '/',
                              type: 'link',
                          },
                          {
                            title: 'About',
                            path: '/about',
                            type: 'link',
                        },
                        {
                            title: 'Projects',
                            path: '/project',
                            type: 'link',
                        },
                        {
                            title: 'Contact',
                            path: '/contact',
                            type: 'link',
                        },
                      ]
                  }
                  />
              </div>
              <div className="footer__col3">
                 <FooterCol
                 heading="Contact Info"
                 links={
                     [
                         {
                             title: '+918696287119',
                             path: 'tel:+918696287119',
                         },
                         {
                            title: 'kumarayush7767@gmail.com',
                            path: 'mailto:kumarayush7767@gmail.com',
                        },
                        {
                            title: 'Bettiah , Bihar',
                            path: 'http://google.com/maps',
                        },
                        
                     ]
                 }
                 />
              </div>
              <div className="footer__col4">
                  <FooterCol
                   heading="Social Links"
                   links = {
                       [
                           {
                               title: 'Facebook',
                               path: 'https://facebook.com'
                           },
                           {
                            title: 'Instagram',
                            path: 'https://instagram.com'
                           },
                           {
                            title: 'Twitter',
                            path: 'https://twitter.com'
                        },

                       ]
                   }
                  />
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <PText>
                    ©️ 2021 - Ayush Kumar | Designed by Ayush
                </PText>
              </div>
            </div>
        </FooterStyles>
    )
}

export default Footer
