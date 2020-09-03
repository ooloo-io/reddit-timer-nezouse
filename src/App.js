import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './GlobalStyles';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

const ContentContainer = styled.main`
  min-height: ${(props) => `calc(100vh - ${props.theme.size.headerHeight} - ${props.theme.size.footerHeight})`};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <ContentContainer>
      <Switch>
        <Route path="/search">
          <div>Search page</div>
        </Route>
        <Route path="/terms">Terms page</Route>
        <Route path="/">
          <div>Homepage</div>
        </Route>
      </Switch>
    </ContentContainer>
    <Footer />
  </ThemeProvider>
);

export default App;
