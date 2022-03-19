import React from "react";
import Home from './Home';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { store  } from '../../../src/react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";

const Mock = () => {
    return (
      <Provider store={store}>
       <BrowserRouter>
        <Home />
       </BrowserRouter>
      </Provider>
    )
}

describe('Home Component Test', () => {
    beforeEach(() => {
        render(<Mock />);
    })
    
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("home-component")).toBeInTheDocument();
    });

    it("Should render Result tilte on screen", () => {
        const elem = screen.getByTestId("title");
        expect(elem.textContent).toBe("Login")
    })
})

