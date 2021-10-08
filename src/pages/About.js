/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const About = () => {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Ayush Kumar</span>
            </p>
            <h2 className="about__heading">A freelance Web developer</h2>
            <div className="about__info">
              <PText>
                I am from Bihar,Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                I am from Bihar,Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />I am from Bihar,Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </PText>
            </div>
            <Button
              btnLink="http://www.nitp.ac.in/php/home.php"
              btnText="Download CV"
              outline={false}
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="ayush" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Saraswati Vidya Mandir, Barwat Sena , Bettiah']}
            />
            <AboutInfoItem
              title="College"
              items={['National Institute of Technology, Patna']}
            />
            <AboutInfoItem title="Varsity" items={['Gulab Memorial College']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML','CSS','JavaScript','React']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node','Express','PHP']}
            />
            <AboutInfoItem 
            title="Design" 
            items={['Photoshop','After Effecs','Figma']} 
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2010-2012"
              items={['Junior developer at GeoMagnify']}
            />
            <AboutInfoItem
              title="2012-2016"
              items={['Front end developer at GeoMagnify']}
            />
            <AboutInfoItem 
            title="2016-" 
            items={['Freelance web developer']}
             />
          </div>
        </div>
      </div>
      <ContactBanner/>
    </AboutPageStyles>
  );
};

export default About;
