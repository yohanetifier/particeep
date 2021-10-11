import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 70px;
  & > h1 {
    text-align: center;
    color: blue;
  }
  & > p {
      text-align: center;
  }
`;

export default function Welcom() {
  return (
    <Container>
      <h1> Welcome on Movie Town</h1>
      <p>
        Are you looking for movies? Simply search for a movie in our database of
        over 550,000 movies!
      </p>
    </Container>
  );
}
