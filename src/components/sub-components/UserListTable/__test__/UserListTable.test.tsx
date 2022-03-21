import React from "react";
import UserListTable from '../UserListTable';

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
let iconElems: HTMLElement[];

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

    it("Make sure component is rendered", () => {
        render(<Mock payload={userListReduxState} />);
        expect(screen.getByTestId("table-component")).toBeInTheDocument();
    });

    it("When id row column is click it should change the sorting state to id", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'id', order: 'asc', type: 'number'}
        } }} />);


        idCol = screen.getByTestId('id-col');
        sortChecker =screen.getByTestId('sort-checker');

        fireEvent.click(idCol);

        expect(sortChecker.textContent).toBe("id")
    })

    it("When login row column is click it should change the sorting state to login", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'login', order: 'asc', type: 'object'}}
        }} />);
        loginCol = screen.getByTestId('login-col');

        sortChecker =screen.getByTestId('sort-checker');

        fireEvent.click(idCol);

        expect(sortChecker.textContent).toBe("login")
    })

    it("When type row column is click it should change the sorting state to type", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'type', order: 'asc', type: 'object'}
        } }} />);
        typeCol = screen.getByTestId('type-col');

        sortChecker = screen.getByTestId('sort-checker');

        fireEvent.click(typeCol);
        
        expect(sortChecker.textContent).toBe("type")
    })

    it("Id row icon should have a class of pink when clicked for ascending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'id', order: 'asc', type: 'number'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('id-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    })

    it("Id row icon should have a class of pink when clicked for decending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'id', order: 'desc', type: 'number'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('id-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    });

    it("Login row icon should have a class of pink when clicked for ascending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'login', order: 'asc', type: 'object'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('login-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    })

    it("Login row icon should have a class of pink when clicked for decending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'login', order: 'desc', type: 'object'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('login-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    })


    it("Type row icon should have a class of pink when clicked for ascending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'type', order: 'asc', type: 'object'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('type-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    })

    it("Type row icon should have a class of pink when clicked for decending", () => {
        render(<Mock payload={{...userListReduxState, ...{
            current_sort: {key: 'type', order: 'desc', type: 'object'}
        } }} />);

        typeCol = screen.getByTestId('type-col');        

        iconElems = screen.getAllByTestId('type-icon');
        fireEvent.click(typeCol);

        expect(iconElems[0]).toHaveClass("text-pink-500")
    })
})

