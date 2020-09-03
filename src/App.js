import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import theme from './theme';
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/search">
        <div>Search page</div>
      </Route>
      <Route path="/">
        <div>Homepage</div>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
