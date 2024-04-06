import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  margin: 10px
`;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  @media (min-width: 768px) {
    height: 400px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 6px; 
`;

const Text = styled.p`
  max-width: 200px;
  line-height: 1.5;
  color: #6d7c83;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Link = styled.a`
text-decoration: none; 
  `;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const TextSpan = styled.span`
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
`;

function Card ({ description, title, stacks, imgUrl, link })  {
  return (
    <Container>
      <CardContainer>
      <CardImage src={imgUrl} alt="img" />
      </CardContainer>
      <ContentContainer>
        <h2>{title}</h2>
        <Text>
          {description}
        </Text>
        <TextSpan>{stacks}</TextSpan>
        <Button>
          <Link target='_blank' href={link}>Visitar</Link>
        </Button>
      </ContentContainer>
    </Container>
  );
}

export default Card;
