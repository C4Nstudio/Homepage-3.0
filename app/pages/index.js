import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Navigator';

const Banner = styled.div`
  color: white;
  position: relative;
  background: linear-gradient(-45deg, #282c37, #000);
  height: 600px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  &:hover {
    &:before {
      clip-path: circle(75% at 25% 0);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 500px;
    background: rgba(0, 0, 0, .3);
    clip-path: circle(70% at 25% 0);
    transition: all 1.2s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: #fff;
    clip-path: polygon(100% 0, 0 100%, 100% 100%); 
  }
`;

const Title = styled.div`

`;

const Picture = styled.div`
  /* width: 300px; */
  height: 100%;
  background: #fff;
`;

function Home() {

  return (
    <div>
      <Head>
        <title>Home-C4Nstudio</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' type='text/css' src='../node_modules/@fontawesome/fontawesome-free/css/all.css' />
      </Head>

      <Nav />

      <Banner>
        <Title>

        </Title>      
        <Picture>

        </Picture>
      </Banner>

      {/* <div className='hero'>
        <h1 className='title'>Welcome to Next.js!</h1>
        <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

        <div className='row'>
          <Link href='https://github.com/zeit/next.js#getting-started'>
            <a className='card'>
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next.js on GitHub and in their examples</p>
            </a>
          </Link>
          <Link href='https://github.com/zeit/next.js/tree/master/examples'>
            <a className='card'>
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub</p>
            </a>
          </Link>
          <Link href='https://github.com/zeit/next.js'>
            <a className='card'>
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it!</p>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style> */}
    </div>
  );
}

export default Home;
