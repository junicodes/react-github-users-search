import React from "react";
import Table from './Table';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Table Component Test', () => {
    beforeEach(() => {
        render(<Table />);
    })
    test("Make sure component is rendered", () => {
        expect(screen.getByTestId("table-component")).toBeInTheDocument();
    })
})

