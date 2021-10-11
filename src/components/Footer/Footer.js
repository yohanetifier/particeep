import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items:center; 
  height: 50px; 
  &> p {
      margin-top: 0; 
      margin-bottom: 0px; 
  }
  }
`;
const Right = styled.p`
font-weight: bold;
`

const Information = styled.p`
color: blue; 
font-weight: bold; 
`
export default function Footer() {
  return (
    <Container>
      <Information>© MovieTown.com 2020-2021</Information>
      <Right>Tous les droits sont réservés</Right>
      <p>Powered by themoviedb.org</p>
    </Container>
  );
}
