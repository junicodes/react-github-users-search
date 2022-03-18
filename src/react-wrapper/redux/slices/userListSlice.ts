import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeLoadingState} from "../../../helpers/supportFunctions";
import { GET_USER_LIST_DATA_ASYNC_ACTION } from "../actions/userList";
import { ToastNotify } from "../../../helpers/toastNotify"
import { RootState } from "../store";


export interface UserListPayloadState {
  total_count: number,
  incomplete_results: boolean,
  items: object[]
}

export interface UserListState {
  userList: UserListPayloadState,
  loading: string[]
}

//Create a reusable userList default payload
export const userListDefaultPayload = {
  total_count: 0,
  incomplete_results: false,
  items: []
}

const initialState = {
  userList: userListDefaultPayload,
  loading: []
} as UserListState ;

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  
  reducers: {
    setUserList: (state, action: PayloadAction<UserListPayloadState>) => {
      state.userList = action.payload;
    },

    resetUserList: (state) => {
      //Format the userlist state to default state
      state.userList = userListDefaultPayload as UserListPayloadState;
    }
  },

  extraReducers: (builder) => {

    builder.addCase(GET_USER_LIST_DATA_ASYNC_ACTION.pending, (state) => {
      state.loading.push('GET_USER_LIST_DATA');
    }),
    builder.addCase(GET_USER_LIST_DATA_ASYNC_ACTION.fulfilled, (state, action) => {
      state.loading = removeLoadingState(state.loading, 'GET_USER_LIST_DATA')
    //   if(action.payload && action.payload.status) {
    //     state.user = action.payload.data;
    //     state.boot = true;
    //     addAuthToDevice(action.payload);
    //   }
    })
  }

});

// Selectors
export const selectUserList = (state: RootState) => state.userList;

// Reducers and actions
export const { setUserList, resetUserList } = userListSlice.actions;

export default userListSlice.reducer;