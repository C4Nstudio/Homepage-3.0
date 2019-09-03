import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from 'next/link';

import Head from 'next/head';
import Nav from '../components/Navigator';
import Career from '../components/sections/Career';
import Skateboarding from '../components/sections/Skateboarding';
import Cycling from '../components/sections/Cycling';
import Baking from '../components/sections/Baking';
import VFX from '../components/sections/VFX';
import ScrollUp from '../components/ScrollUp';
import Footer from '../components/Footer';

import device from '../utils/device';

const Banner = styled.div`
  color: white;
  position: relative;
  background: linear-gradient(-45deg, #1d1f26, #000);
  height: 600px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  @supports (clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%)) or (-webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%)) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  }

  /* 底部斜边效果 */
  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: #fff;
    clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  } */
`;

const Title = styled.div`
  position: relative;
  width: 70%;
`;

const Front = styled.div`
  width: 100%;

  h1 {
    font-size: 8rem;
    margin: 0;
    padding-left: 0;
  }

  p {
    font-size: 1.4rem;
    font-weight: lighter;
    margin: 0;
    padding-top: 1rem;
    padding-left: 0;
  }

  @media (max-width: 1280px) {
    h1, p {
      padding-left: 120px;
    }

    h1 {
      padding-top: 20px;
    }

    h1 span {
      display: block;
    }
  }

  @media (max-width: 960px) {
    p {
      font-size: 1rem;
      padding-left: 125px;
    }
  }
`;

const expand = keyframes`
  from {
    clip-path: circle(40% at 15% 10%);
  }

  to {
    clip-path: circle(55% at 15% 25%);
  }
`;

const Back = styled(Front)`
  color: #47b8e0;
  background: rgba(0, 0, 0, .3);

  @supports (animation-name: expand) {
    animation: ${expand} 5.5s ease-in-out infinite alternate;
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  height: 200px;

  @media ${device.tablet} {
    height: calc(100% - 50px);
  }

  @media ${device.laptopM} {
    height: 100%;
  }
`;

function Home() {
  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  }

  return (
    <div>
      <Head>
        <title>Home-C4Nstudio</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="Description" content="C4Nstudio C4N" />
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel='stylesheet' type='text/css' src='../node_modules/@fontawesome/fontawesome-free/css/all.css' />
      </Head>

      <Nav />

      <Banner>
        <Title>
          <Front>
            <Wrapper>
              <div>
                <h1><span>Hi, </span><span>I'm </span><span>Can</span></h1>
                <p>Frontend developer and more...</p>
              </div>
            </Wrapper>
          </Front>
          <Back>
            <Wrapper>
              <div>
                <h1>Hi, I'm Can</h1>
                <p>Frontend developer and more...</p>
              </div>
            </Wrapper>
          </Back>
        </Title>
        <Picture src='/static/images/banner/banner.png' />
      </Banner>

      {/* <div style={{height: 300}} /> */}

      {/* 前端板块 */}
      <Career />

      {/* 滑板板块 */}
      <Skateboarding />

      {/* 骑行板块 */}
      <Cycling />

      {/* 烘焙板块 */}
      <Baking />

      {/* 视频制作板块 */}
      {/* <VFX /> */}

      {/* 返回顶部按钮 */}
      <ScrollUp onClick={scrollToTop} />

      {/* 页脚 */}
      <Footer />

      {/* body样式 */}
      {/* <style jsx>
        {`
              :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                  Helvetica, sans-serif;
              }
          `}
      </style> */}
    </div>
  );
}

export default Home;
