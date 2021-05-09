import React from 'react';
import styled from 'styled-components';

import SocialMediaIcons from './SocialMedia';

export default function Home() {
  return (
    <Container>
      <Image
        src="https://image-placeholder.vercel.app/?w=800&h=800&background=darkslategray&text=Placeholder"
        alt=""
      />
      <Content>
        <Heading>Lorem ipsum</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
        <SocialMediaIcons />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3 * 2);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 100vh;
  width: calc(100% / 3);

  @media (max-width: 768px) {
    margin: 0 auto;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100%;
  }

  @media (max-height: 350px) {
    width: 100vw;
  }
`;

const Heading = styled.h1`
  font-family: 'YellowTail', serif;
  margin: 0;
  font-size: 55px;
  font-weight: normal;
  color: #232323;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 40px;
  }
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 25px;
  max-width: 950px;
  text-align: center;
  color: #232323;
`;
