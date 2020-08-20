import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/search">
            <div>
              Search
            </div>
          </Route>
          <Route path="/">
            <div>
              Homepage
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
