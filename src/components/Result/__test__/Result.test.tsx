import React from "react";
import Result from '../Result';
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store  } from '../../../react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { newUserListPayload, userListReduxState } from "../../../helpers/testPayload/userListPayload";
import { initialState} from '../../../react-wrapper/redux/slices/userListSlice';
import { ResultProps } from "../Interfaces";

jest.mock("axios")


const Mock = ({payload}: ResultProps ) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Result payload={payload} />
        </BrowserRouter>
     </Provider>
    )
}

let nextBtn: HTMLButtonElement;
let prevBtn: HTMLButtonElement;
let firstBtn: HTMLButtonElement;
let lastBtn: HTMLButtonElement;
let table: HTMLTableElement;
let tableColumn: HTMLElement[];
let loadingNewPage: HTMLElement;


describe('Result Component Test', () => {

   describe('Just Component Render Test', () => { 

        beforeEach(() => {
            render(<Mock payload={userListReduxState} />);
        })

        it("Make sure component is rendered", () => {
            expect(screen.getByTestId("result-component")).toBeInTheDocument();
        });


        it("table is found on screen", () => {
            table = screen.getByTestId("result-table");

            expect(table).toBeInTheDocument();
        });

        it("Next and Prev button should render correctly", () => {
            nextBtn = screen.getByRole('button', {
                name: "Next"
            });
            prevBtn = screen.getByRole('button', {
                name: "Prev"
            });
            expect(nextBtn).toBeInTheDocument();
            expect(prevBtn).toBeInTheDocument();
        });
    })

   describe("MOCK THE COMPONENT WITH NEW PAYLOAD", () => {

        it("Table should show 9 result column on screen", async () => {

            render(<Mock payload={userListReduxState} />);

            tableColumn = screen.getAllByTestId("result-column")

            expect(tableColumn.length).toBe(9);
        });

        it("Next Button should show loader when click", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={userListReduxState} />);

            nextBtn = screen.getByRole('button', {
                name: "Next"
            });

            loadingNewPage = screen.getByTestId('loading-new-page');

            fireEvent.click(nextBtn);

            expect(loadingNewPage).toHaveClass("showloader")
        })

        it("Next Button should call next page when clicked", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={userListReduxState} />);

            nextBtn = screen.getByRole('button', {
                name: "Next"
            });

            fireEvent.click(nextBtn);

            waitFor(() => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
        })

        it("Prev Button should show loader when click", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={{...userListReduxState, ...{page: 2}}} />);

            prevBtn = screen.getByRole('button', {
                name: "Prev"
            });

            loadingNewPage = screen.getByTestId('loading-new-page');

            fireEvent.click(prevBtn);

            expect(loadingNewPage).toHaveClass("showloader")
        })

        it("Prev Button should call api prev page when clicked", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={userListReduxState} />);

            prevBtn = screen.getByRole('button', {
                name: "Prev"
            });

            fireEvent.click(prevBtn);

            waitFor(() => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
        });

        it("First button should call api first page when click", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={userListReduxState} />);

            firstBtn = screen.getByRole('button', {
                name: "First"
            });

            fireEvent.click(firstBtn);

            waitFor(() => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
        })

        it("Last button should call api last page when click", () => {
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock payload={userListReduxState} />);

            lastBtn = screen.getByRole('button', {
                name: "Last"
            });

            fireEvent.click(lastBtn);

            waitFor(() => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
        })

        it("Next Button Should not be clickable on last page", async () =>  {

            const payload = {...userListReduxState, ...{
                page: Math.trunc(1000/9),
                userList: {
                    ...initialState.userList,
                    ...{
                        total_count: 1000
                    }
                }
            }};

            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(payload));

            render(<Mock payload={payload} />);

            nextBtn = screen.getByRole('button', {
                name: "Next"
            });

            fireEvent.click(nextBtn);

            const pageView = await screen.findByTestId("page-view");

            expect(pageView.textContent).toBe(`Page: ${Math.trunc(1000/9)}`)

        })

        it("Last Button Should not be clickable on last page", async () => {

            const payload = {...userListReduxState, ...{
                page: Math.trunc(1000/9),
                userList: {
                    ...initialState.userList,
                    ...{
                        total_count: 1000
                    }
                }
            }};

            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(payload));

            render(<Mock payload={payload} />);

            lastBtn = screen.getByRole('button', {
                name: "Last"
            });

            fireEvent.click(lastBtn);

            const pageView = await screen.findByTestId("page-view");

            expect(pageView.textContent).toBe(`Page: ${Math.trunc(1000/9)}`)
        })

        it("Prev Button Should not be clickable on First page", async () =>  {

            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(userListReduxState));

            render(<Mock payload={userListReduxState} />);

            prevBtn = screen.getByRole('button', {
                name: "Prev"
            });

            fireEvent.click(prevBtn);

            const pageView = await screen.findByTestId("page-view");

            expect(pageView.textContent).toBe(`Page: ${1}`)

        })

        it("Last Button Should not be clickable on last page", async () => {

            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(userListReduxState));

            render(<Mock payload={userListReduxState} />);

            firstBtn = screen.getByRole('button', {
                name: "First"
            });

            fireEvent.click(firstBtn);

            const pageView = await screen.findByTestId("page-view");

            expect(pageView.textContent).toBe(`Page: ${1}`)
        })
    })

})

