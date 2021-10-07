/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
   .heading{
       font-size: 2.4rem;
       margin-bottom: 2rem;
   }
   li{
       margin-bottom: 1rem;
   }
   a{
       font-size: 1.8rem;
   }
`;

const FooterCol = ({
    heading = 'col heading',
    links = [
        {
            type:'link',
            title:'Home',
            path: '/home'
        },
        {
            type:'link',
            title:'About',
            path: '/about'
        },
        {
            type:'link',
            title:'Projects',
            path: '/project'
        },
        {
            type:'link',
            title:'Contact',
            path: '/contact'
        },
    ]
}) => {
    return (
        <ColStyles>
            <h1 className="heading">
               {heading}
            </h1>
            <ul>
              {
                  links.map((item,index) => (
                      <li key={index}>
                        {item.type==='link' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ): <a href={item.path} target="__blank" 
                        rel="noreferrer"
                        >{item.title}</a>}
                      </li>
                  ))
              }
            </ul>
        </ColStyles>
    )
}

export default FooterCol;
