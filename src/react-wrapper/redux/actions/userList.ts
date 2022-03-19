import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_USER_LIST_DATA } from "../../../helpers/routes";
import { axiosWrapper } from "../../../helpers/axios";


export const GET_USER_LIST_DATA_ASYNC_ACTION = createAsyncThunk(
    "GET_USER_LIST_DATA",
    async (query: string) => {
        const res = await axiosWrapper("get", GET_USER_LIST_DATA(query));
        return res;
    }
);