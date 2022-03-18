import React from "react";
import Result from './Result';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Result Component Test', () => {
    beforeEach(() => {
        render(<Result />);
    })

    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("result-component")).toBeInTheDocument();
    })

})

