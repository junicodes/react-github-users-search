import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store  } from '../src/react-wrapper/redux/store';

const MockApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
test('renders learn react link', () => {
  render(<MockApp />);
  const linkElement = screen.getByTestId("app-load");
  expect(linkElement).toBeInTheDocument();
});
