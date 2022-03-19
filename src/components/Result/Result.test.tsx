import React from "react";
import Result from './Result';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store  } from '../../../src/react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";

const Mock = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Result />
        </BrowserRouter>
     </Provider>
    )
}

describe('Result Component Test', () => {
    beforeEach(() => {
        render(<Mock />);
    })

    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("result-component")).toBeInTheDocument();
    })

})

