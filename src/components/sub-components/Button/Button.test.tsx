import React from "react";
import Button from './Button';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Button Component Test', () => {
    beforeEach(() => {
        render(<Button />);
    })
    
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("button-component")).toBeInTheDocument();
    })
})

