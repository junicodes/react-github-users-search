import React from "react";
import Button from '../Button';

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Button Component Test', () => {
    beforeEach(() => {
        render(
        <Button
            btnText="Submit"
            disabled={false}
            className="bg-red-400"
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

    // it("Check if button gets disable when click", () => {
    //     const btnElem: HTMLButtonElement = screen.getByRole("button");

    //     fireEvent.click(btnElem);

    //     expect(btnElem).toBeDisabled()
    // })
})

