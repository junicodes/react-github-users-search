import React from "react";
import Button from '..';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Button Component Test', () => {
    beforeEach(() => {
        render(
        <Button
            btnText="Submit"
            disabled={false}
            variant="bg-red-400"
            onTriggerFunction={(_e) => {}}
         />);
    })
    
    it("Make sure component is rendered", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    })


    it("Button text should not be empty", () => {
        const btnElem: HTMLButtonElement = screen.getByRole("button");

        expect(btnElem.textContent).not.toBe("");
    })
})

