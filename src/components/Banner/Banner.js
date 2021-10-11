import React from 'react';
import styled from 'styled-components';
import wallpaper from '../../assets/wallpaper.jpg';

const Container = styled.div`
  position: relative;
  top: 80px;
  height: 480px; 
  & > img {
    width: 100%; 
    height: 100%; 
  }
`;

export default function Banner() {
  return (
    <Container>
      <img src={wallpaper} />
    </Container>
  );
}
