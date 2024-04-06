import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin  } from "react-icons/ai";

const IconContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  margin-left: 80px;  
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: #a1a692; 
  text-decoration: none; 
  &:hover {
    color: white; 
  }
`;

const SocialIcons = () => {
  return (
    <IconContainer>
      <IconLink href="https://www.instagram.com/seu_usuario/" target="_blank">
        <AiFillInstagram size={30} /> 
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/seu_usuario/" target="_blank">
        <AiFillLinkedin size={30} />
      </IconLink>
      <IconLink href="https://github.com/seu_usuario" target="_blank">
        <AiFillGithub size={30} />
      </IconLink>
    </IconContainer>
  );
};

export default SocialIcons;
