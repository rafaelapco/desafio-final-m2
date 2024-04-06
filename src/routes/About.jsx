import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaHtml5, FaCss3Alt, FaReact  } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import vnw from '../images/vnwlogo.png';

const AboutContainer = styled.div`
  height: 100vh;
  background-color: #e8dfd0; 
`;


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  overflow: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
  }
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  margin: 5px 10px;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  
`;

const CardTitle = styled.h2`
  color: #666;
`;

const Paragraph = styled.p`
  color: #333;
`;

const DataCard = styled.span`
  font-size: 0.8rem;
  color: #666;
  `;

function About() {
  return (
    <>
    
    <AboutContainer>
      <Navigation />
      <CardContainer>
        <Card>
          <CardTitle>Estudos 📚</CardTitle>
          <Paragraph>
           DESENVOLVIMENTO FRONT-END <img src={vnw} alt="" srcset="" width="35px" height="35px" />
          </Paragraph>
           <DataCard>AGO/2023 - MAIO/2024</DataCard>
        </Card>
        <Card>
          <CardTitle>Habilidades 💡</CardTitle>
          <Paragraph>
            <FaHtml5 size={30}  /> HTML <br />
            <FaCss3Alt size={30} /> CSS <br />
            <DiJavascript size={30} /> JAVASCRIPT <br />
            <FaReact size={30} />  REACT <br />
          </Paragraph>
        </Card>
        <Card>
          <CardTitle>Profissional 💼</CardTitle>
          <Paragraph>
            Assistente comercial
          </Paragraph>
        </Card>
      </CardContainer>
    </AboutContainer>
    <Footer />  
    </>
    
  );
}

export default About;
