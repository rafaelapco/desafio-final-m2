import React from 'react';
import styled from 'styled-components';
import { DiReact, DiCode, DiGit   } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

const FooterContainer = styled.footer`
  background-color: #404a4f;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Tecnologias usadas</FooterTitle>
      <ImageContainer>
        <DiReact size={50} />
        <SiStyledcomponents size={50} />
        <DiGit size={50} />
        <DiCode size={50} />
      </ImageContainer>
    </FooterContainer>
  );
}

export default Footer;