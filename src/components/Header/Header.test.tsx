import React from "react";
import Header from './Header';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Header Component Test', () => {
    beforeEach(() => {
        render(<Header />);
    })
    
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("header-component")).toBeInTheDocument();
    })
})

