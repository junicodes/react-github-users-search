import React from "react";
import UserListTable from '../UserListTable';

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { userListReduxState } from "../../../../helpers/testPayload/userListPayload";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ResultProps } from "../../../Result/Interfaces";
import { store } from "../../../../react-wrapper/redux/store";



let loginCol: HTMLDivElement;
let idCol: HTMLDivElement;
let typeCol: HTMLDivElement;
let sortChecker: HTMLElement;

const Mock = ({payload}: ResultProps ) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <UserListTable payload={payload} />
        </BrowserRouter>
      </Provider>
    )
}

describe('Table Component Test', () => {


    beforeEach(() => {
        render(<Mock payload={userListReduxState} />);
    })
    it("Make sure component is rendered", () => {
        expect(screen.getByTestId("table-component")).toBeInTheDocument();
    });

    it("Row item should sort by login click", () => {
        loginCol = screen.getByTestId('login-col');
        sortChecker =screen.getByTestId('sort-checker');

        fireEvent.click(loginCol);

        expect(sortChecker.textContent).toBe("login")
        
    })
})

