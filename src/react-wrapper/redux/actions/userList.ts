import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_USER_LIST_DATA } from "../../../helpers/routes";
import { axiosWrapper } from "../../../helpers/axios";

export const GET_USER_LIST_DATA_ASYNC_ACTION = createAsyncThunk(
    "GET_USER_LIST_DATA",
    async ([query, per_page, page]: [string, number, number] ) => {
        const res = await axiosWrapper("get", GET_USER_LIST_DATA(query, per_page, page));
        return {...res, ...{page: page} };
    }
);