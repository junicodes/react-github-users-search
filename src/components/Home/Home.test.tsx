import React from "react";
import Home from './Home';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Home Component Test', () => {
    beforeEach(() => {
        render(<Home />);
    })
    
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("home-component")).toBeInTheDocument();
    })
})

