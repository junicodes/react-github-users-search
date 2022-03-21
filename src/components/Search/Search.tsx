import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastNotify } from "../../helpers/toastNotify";
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { GET_USER_LIST_DATA_ASYNC_ACTION } from "../../react-wrapper/redux/actions/userList";
import { BtnActionState } from "./Interfaces";
import { selectUserList, setSearchQuery, UserListState } from "../../react-wrapper/redux/slices/userListSlice";

const Search = () => {
    //State
    const [btnAction, setBtnAction] = useState<BtnActionState>({
        disable: false,
        btnText: "Submit",
        loginVal: ""
    });

    //Hooks
    const navigate = useNavigate();
    const userList = useAppSelector<UserListState>(selectUserList);
    const dispatch = useAppDispatch();
    
    //handler Function
    const handleValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBtnAction({
            ...btnAction,
            [e.target.name]: e.target.value
        });
    }

    //Request Functions
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //If loginVal is empty thow error
        if(btnAction.loginVal === "") {
            ToastNotify({
                type: "error", 
                message: `Ooops something not right, please refresh and try angain or contact support.`,
                position: "top-center"
            })
            return false;
        }
        
        setBtnAction({ ...btnAction, ...{ disable: true, btnText: 'Loading...'} });

        //Simulate a temperary delay 
        const delay = setTimeout(async () => {

            await dispatch(GET_USER_LIST_DATA_ASYNC_ACTION([btnAction.loginVal, userList.per_page, 1]));

            //dispatch search query value to redux
            dispatch(setSearchQuery(btnAction.loginVal));

            setBtnAction({...btnAction, ...{ disable: false, btnText: 'Submit', loginVal: "" }});   
            
            navigate('/result-list')
            
        }, 500);

        return () => clearTimeout(delay);

    }
    
 
  return (
    <div data-testid="search-component" className="flex flex-col item-center justify-center h-full">
      <form className="w-5/6 xl:w-2/6 mx-auto h-4/6 animate__animated animate__fadeIn" onSubmit={(e) => handleLogin(e)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-xl font-medium text-gray-900"
          >
            Let's get you started
          </label>
          <input
            type="text"
            name="loginVal"
            className="bg-gray-50 border border-gray-100 focus:outline focus:outline-1 focus:outline-slate-200 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
            placeholder="Enter a login to continue"
            required={true}
            value={btnAction.loginVal}
            onChange={(e) => handleValChange(e)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 h-14 focus:ring-pink-300 font-medium rounded-lg text-lg w-full sm:w-2/6 px-5 py-2.5 text-center"
          disabled={btnAction.disable}
        >
          {btnAction.btnText}
        </button>
      </form>
    </div>
  );
};

export default Search;
