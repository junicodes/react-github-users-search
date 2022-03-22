import React from "react";
import ResultList from '..';

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { store  } from '../../../react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";

const Mock = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <ResultList />
        </BrowserRouter>
      </Provider>
    )
}

describe('Home Component Test', () => {
    beforeEach(() => {
        render(<Mock />);
    })
    
    it("Make sure Result List component is rendered", () => {
        expect(screen.getByTestId("resultlist-component")).toBeInTheDocument();
    });

    it("Should render Result tilte on screen", () => {
        const elem = screen.getByTestId("title");
        expect(elem.textContent).toBe("Result")
    })
    it("Should render search query from login", () => {
        const elem = screen.getByTestId("search-query");
        expect(elem.textContent).not.toBe("")
    })
})

