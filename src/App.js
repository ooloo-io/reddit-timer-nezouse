import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        App Placeholder
      </div>
    </>
  );
}

export default App;
