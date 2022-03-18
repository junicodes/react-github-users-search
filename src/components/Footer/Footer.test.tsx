import React from "react";
import Footer from './Footer';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Footer Component Test', () => {
    beforeEach(() => {
        render(<Footer />);
    })
    
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("footer-component")).toBeInTheDocument();
    })
})
