import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import theme from './theme';
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search">
          <div>Search</div>
        </Route>
        <Route path="/">
          <div>Homepage</div>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
