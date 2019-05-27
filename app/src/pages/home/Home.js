import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import bannerImg from '../../assets/images/banner.jpeg';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1366px;
  width: 96%;
  padding: 0 2%;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  position: absolute;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  z-index: 9999;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  padding-left: 50px;
`;

const Nav = styled.nav`
  flex: 0 0 auto;
  width: 500px;
  padding-right: 75px;
  display: flex;
  justify-content: space-between;

  h1 {
    text-indent: -10000px;
  }

  ul {
    line-height: 100px;

    li {
      display: inline-block;
      text-align: center;
      width: 75px;
    }
  }
`;

const Banner = styled.div`
  position: relative;
  height: 800px;
  background-image: url(${bannerImg});
  background-color: lightgrey;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 200px;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: -100%;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    transform-origin: top left;
    transform: skewY(5deg);
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    transform-origin: top left;
    transform: skewY(5deg);
  }
`;

const Title = styled.div`
  flex: 0 0 50%;

  > div {
    position: relative

    h2 {
      font-size: 2.5rem;
      font-weight: normal;
    }

    h1 {
      margin-top: 45px;
      text-indent: 25px;
      font-size: 3rem;
      font-weight: normal;
    }
  }
  
`;

const scrollAnimation = keyframes`
  0% {
    margin-top: 0;
  }

  33% {
    margin-top: -75px;
  }

  66% {
    margin-top: --150px;
  }

  100% {
    margin-top: -225px;
  }
`;

const Scroll = styled.div`
  position: absolute;
  top: 65px;
  left: 25px;
  height: 80px;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    font-size: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-family: 'lobster';
    /* animation: ${scrollAnimation} 4s linear 2s infinite alternate; */

    li {

    } 
  }
`;


const Main = styled.main`

`;

const Footer = styled.footer`

`;

function Home() {


  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>
            {/* C4Nstudio */}
          </Logo>
          <Nav>
            <h1>导航</h1>
            <ul>
              <li>前端</li>
              <li>滑板</li>
              <li>骑行</li>
              <li>视效</li>
              <li>烘培</li>
            </ul>
          </Nav>
        </Header>
      </Wrapper>

      <Main>
        <Banner>
          <Title>
            <div>
              <h2>Hi, I'm Can</h2>
              <h1>A ________________________</h1>
              <Scroll>
                <ul>
                  <li>fe developer</li>
                  <li>skateboarder</li>
                  <li>bicyclist</li>
                  <li>baker</li>
                </ul>
              </Scroll>
            </div>
          </Title>
        </Banner>
        <Wrapper>

        </Wrapper>
      </Main>

      <Footer></Footer>
    </Container>
  );
}

export default Home;