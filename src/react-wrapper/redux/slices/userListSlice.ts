import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeLoadingState, sortObjectItem} from "../../../helpers/supportFunctions";
import { GET_USER_LIST_DATA_ASYNC_ACTION } from "../actions/userList";
import { RootState } from "../store";


export interface UserListPayloadState {
  total_count: number,
  incomplete_results: boolean,
  items: object[] | null
}

export interface UserListState {
  searchQuery: string,
  userList: {
    total_count: number,
    incomplete_results: boolean,
    items: object[] | null
  },
  loading: string[]
  per_page: number,
  page: number
  current_sort: {
    key: string,
    order: string
    type: string
  }
}

//Create a reusable userList default payload
export const userListDefaultPayload = {
  total_count: 0,
  incomplete_results: false,
  items: null
}

export const initialState = {
  searchQuery: '',
  userList: userListDefaultPayload,
  loading: [],
  per_page: 9,
  page: 1,
  current_sort: {key: 'login', order: 'asc', type: 'object'}
} as UserListState;


export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  
  reducers: {
    setUserList: (state, action: PayloadAction<object[]>) => {
      state.userList.items = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setCurrentSort: (state, action: PayloadAction<{ key: string, order: string, type: string}>) => {
      state.current_sort = action.payload;
    },


    resetUserList: (state) => {
      //Format the userlist state to default state
      state.userList = userListDefaultPayload as UserListPayloadState;
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(GET_USER_LIST_DATA_ASYNC_ACTION.pending, (state) => {
      state.loading = ['GET_USER_LIST_DATA'];
    })
    .addCase(GET_USER_LIST_DATA_ASYNC_ACTION.fulfilled, (state, action) => {
      state.loading = removeLoadingState(state.loading, 'GET_USER_LIST_DATA')

      if( action.payload.status === 200 ) {
        //Sort payload with selected column by user
        action.payload.data.items.sort(sortObjectItem(state.current_sort.key, state.current_sort.order, state.current_sort.type));
        state.userList = action.payload.data
        state.page = action.payload.page;
      };

    });
  }

});

// Selectors
export const selectUserList = (state: RootState) => state.userList;

// Reducers and actions
export const { setUserList, resetUserList, setSearchQuery, setPage, setCurrentSort} = userListSlice.actions;

export default userListSlice.reducer;