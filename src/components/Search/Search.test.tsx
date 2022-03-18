import React from "react";
import Search from './Search';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Search Component Test', () => {
    beforeEach(() => {
        render(<Search />);
    })
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("search-component")).toBeInTheDocument();
    })
})

