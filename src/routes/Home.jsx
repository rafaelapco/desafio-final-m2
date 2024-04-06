import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';


const Container = styled.div`
  height: 100vh;
  background-color: #e8dfd0; 
  
`;

const Title = styled.h2`
  font-size: 2.5rem; 
  font-weight: bold;
  margin-bottom: 5%;
  margin-left: 8%;
  color: #a1a692;
  @media (min-width: 768px) {
    margin-left: 4%;
    margin-bottom: 1%;
    font-size: 3.5rem; 
  }
  `;


const Paragraph = styled.p`
  font-size: 1rem;
  text-align: left;
  font-weight :500 ;
  margin: 5%;
  max-width: 450px;
  color: #6d7c83;
  @media (min-width: 768px) {
    margin-top: 1%;
    font-size: 2rem;
  }
`;

const SubContainer = styled.div`
@media (min-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  }
  `;

function Home() {
  return (
    <>
    <Container>
      <Navigation />
      <SubContainer>
      <Title>Olá, viajante digital! <span role="img" aria-label="waving hand">👋</span><span role="img" aria-label="sparkles">✨</span></Title>
      <SocialIcons />
      <Paragraph>Seja muito bem-vindo(a) ao meu cantinho virtual! Aqui, sob o céu infinito da internet, sou a Rafaela, ou se preferir Rafinha, sua guia nesta jornada online.</Paragraph>
      </SubContainer>
    </Container>
    <Footer />
    </>
  );
}

export default Home;