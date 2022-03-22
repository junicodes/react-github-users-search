import Search from '..';

import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store  } from '../../../react-wrapper/redux/store';
import { newUserListPayload } from "../../../helpers/testPayload/userListPayload";
import axios from 'axios';
import { BrowserRouter } from "react-router-dom";

jest.mock("axios")


const Mock = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Search />
        </BrowserRouter>
      </Provider>
    )
}

let inputElement: HTMLInputElement;
let loginBtnElem: HTMLButtonElement;

describe('Search Component Test', () => {
   
   describe("UNIT TESTING OF INPUT FUNCTIONALITY", () => {
        beforeEach(() => {
            render(<Mock />);
        })
        it("Make sure component is rendered", () => {
            expect(screen.getByTestId("search-component")).toBeInTheDocument();
        });

        it("Input Should render on screen", () => {
            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);
            expect(inputElement).toBeInTheDocument();
        })

        it("Login Input value should be empty at render", () => {

            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);
            expect(inputElement.value).toBe("");
        });

        it("Login input value should change when typing", () =>{

            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);

            fireEvent.change(inputElement, {
                target: {
                    value: "Daniel"
                }
            })

            expect(inputElement.value).toBe("Daniel")

        });
   });

   describe("UNIT TESTING OF LOGIN BUTTON", () => {
        beforeEach(() => {
            render(<Mock />);
        })
       it("Should render correctly on screen", () => {
            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });

            expect(loginBtnElem).toBeInTheDocument()
       });

       it("Button should not be disbabled when rendered on screen", () => {
            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });

            expect(loginBtnElem).not.toBeDisabled()
        })

       it("Should be clickable and and be disbaled to avoid additional click", () => {
            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });
            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);

            fireEvent.change(inputElement, {
                target: {
                    value: "Daniel"
                }
            })

            fireEvent.click(loginBtnElem);

            expect(loginBtnElem).toBeDisabled()

            waitFor(() => {
                expect(loginBtnElem).not.toBeDisabled();
            })
        })

       it("Should show a loading action when clicked", () => {
            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });
            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);

            fireEvent.change(inputElement, {
                target: {
                    value: "Daniel"
                }
            });

            fireEvent.click(loginBtnElem);

            expect(loginBtnElem.textContent).toBe("Loading...")
            waitFor(() => {
                expect(loginBtnElem.textContent).toBe("Submit")
            })
        });

   });

   describe("HANDLE API REQUEST AFTER BUTTON CLICK", () => {

        it("Should call login api and update the redux state", async () => {

            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock />);
            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);
            
            fireEvent.change(inputElement, {
                target: {
                    value: "Daniel"
                }
            });

            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });

           fireEvent.click(loginBtnElem);

            waitFor(() => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            }); 
        
        });
        it("Login input value should become empty after api request is complete", () =>{
            (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload));

            render(<Mock />);
            
            inputElement = screen.getByPlaceholderText(/Enter a login to continue/i);
            loginBtnElem = screen.getByRole('button', {
                name: "Submit"
            });

            fireEvent.change(inputElement, {
                target: {
                    value: "Daniel"
                }
            })

            fireEvent.click(loginBtnElem);

            waitFor(() => {
                expect(inputElement.value).toBe("")
            })
            
        });
    })

})

