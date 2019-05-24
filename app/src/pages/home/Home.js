import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  padding-left: 50px;
`;

const Nav = styled.nav`
  flex: 0 0 auto;
  width: 500px
  padding-right: 50px;
  display: flex;
  justify-content: space-between;

  h1 {
    text-indent: -10000px;
  }

  ul {
    line-height: 80px;

    li {
      display: inline-block;
      text-align: center;
      width: 60px;
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
        <Header>
          <Logo>C4Nstudio</Logo>
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
        <Main>
      
        </Main>
        <Footer></Footer>
      </Container>
    );
  }
  
  export default Home;