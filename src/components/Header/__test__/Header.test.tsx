import React from "react";
import Header from '..';

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Header Component Test', () => {
    beforeEach(() => {
        render(<Header headerText="Welcome" heroText="Lorem Text header" heroTextAuthor="Dared Mark" />);
    })
    
    it("Make sure component is rendered", () => {
        expect(screen.getByTestId("header-component")).toBeInTheDocument();
    })

    it("Should hero text render on screen", () => {
        const heroTextElem = screen.getByTestId("hero-text");
        expect(heroTextElem.textContent).not.toBe("")
    })

    it("Should hero text render on screen", () => {
        const heroTextElemAuthor = screen.getByTestId("hero-text-author");
        expect(heroTextElemAuthor.textContent).not.toBe("")
    })
})

