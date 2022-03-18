import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxhook";
import {
  selectUserList,
  resetUserList,
  setUserList,
} from "../../react-wrapper/redux/slices/userListSlice";

const Search = () => {
  return (
    <div data-testid="search-component" className="flex flex-col item-center justify-center h-full">
      <form className="w-2/6 mx-auto h-2/6">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Let get you started
          </label>
          <input
            type="text"
            name="login"
            className="bg-gray-50 border border-gray-100 focus:outline focus:outline-1 focus:outline-slate-200 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
            placeholder="Enter a login to continue"
            required={true}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 h-14 focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-2/6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
