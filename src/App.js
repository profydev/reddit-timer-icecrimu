import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Header from './Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/search" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
