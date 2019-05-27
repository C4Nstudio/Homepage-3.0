import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import { GlobalStyle } from './global-styles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
