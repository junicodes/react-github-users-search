import React from "react";
import Input from './Input';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Input Component Test', () => {
    beforeEach(() => {
        render(<Input />);
    })
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("input-component")).toBeInTheDocument();
    })
})

