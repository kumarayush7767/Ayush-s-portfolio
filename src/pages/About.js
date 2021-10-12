/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about1.jpeg';
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
            <h2 className="about__heading">A Front-end Web developer</h2>
            <div className="about__info">
              <PText>
                I am currently pursuing my BTech in Computer Science and
                Enginnering from National Institute of Technology, Patna. 
                I am a coder and a front-end developer.
                <br />
                <br />
                In 2019, I started Bachelor of Technology in Computer Science 
                and Engineering from National Institute of Technology, Patna.
                I always try my level best to learn new things and polish what 
                i already know.
                <br />
                <br />
                Along with that, I also help people as a Mentor on their 
                journey of becoming a professional programmer.
                I love learning about new technologies, what problems are they 
                solving and How can I use them to build better and scalable products.
              </PText>
            </div>
             <Button
              btnLink="Ayush_Resume.pdf"
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
              title="B.Tech"
              items={['National Institute of Technology, Patna']}
            />
            <AboutInfoItem
              title="Intermediate"
              items={['Gulab Memorial College']}
            />
            <AboutInfoItem title="School" items={['Saraswati Vidya Mandir,Barwat Sena,Bettiah']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="P Languages"
              items={['C++','C','Java','Python']}
            />
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML','CSS','JavaScript','ReactJS']}
            />
            <AboutInfoItem
              title="DSA"
              items={['Data Structures','Algorithms']}
            />
            <AboutInfoItem 
            title="Others" 
            items={['Git','GitHub','Hosting']} 
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="May-2021"
              items={['Intern at GeoMagnify']}
            />
            <AboutInfoItem
              title="July-2021"
              items={['Intern at GeoMagnify']}
            />
            <AboutInfoItem 
            title="2021-" 
            items={['web developer']}
             />
          </div>
        </div>
      </div>
      <ContactBanner/>
    </AboutPageStyles>
  );
};

export default About;
