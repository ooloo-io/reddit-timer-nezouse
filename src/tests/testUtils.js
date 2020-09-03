import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';

const renderApp = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

export default renderApp;
