import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styled from 'styled-components';
import img1 from '../images/codesand.png';
import img2 from '../images/github-simbolo.jpg';
import img3 from '../images/lojinha.png';
import img4 from '../images/fantastika.png';

const CardConteiner = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 20px;
  color: #a1a692;
  `;

const Container = styled.div`
  background-color: #e8dfd0; 
`;

function Projects() {
    return (
      <Container>
        <Navigation />
        <Title>Meus projetos</Title>
        <CardConteiner>
            <Card link="https://codesandbox.io/p/sandbox/desafio-01-finalizado-19-08-x4wvd3?file=%2Findex.html" imgUrl={img1} title='Desafio 01' stacks="HTML"  description="Desafio feito no curso utlizando HTML para falar mais sobre mim, meus gostos, etc."/>
            <Card link="https://github.com/rafaelapco/rstore-desafio" imgUrl={img3} title='rstore-desafio' stacks="HTML CSS" description="Desafio proposto no curso para aprimorar o conhecimento em html e css"/>
            <Card link="https://rafaelapco.github.io/Desafio-Final/" imgUrl={img4} title='Fantastika' stacks="HTML CSS" description="Desafio proposto no curso para ciar uma petshop aprimorando o conhecimento em html e css"/>
            <Card link="https://github.com/rafaelapco/vnw-desafio-logica" imgUrl={img2} title='Desafio de lógica' stacks="HTML JS" description="Desafio proposto para aprender a utilizar JS e aprimorar a lógica de programação"/>
            <Card link="https://github.com/rafaelapco/componete-funcional" imgUrl={img2} title='Componente funcional' stacks="REACT VITE JS" description="Desafio proposto para aprender a utilizar JS com outros frameworks e bibliotecas, fazendo a criação de um componente funcional e reutilizável"/>
        </CardConteiner>
        <Footer />
      </Container>
    );
  }
  
  export default Projects;
  