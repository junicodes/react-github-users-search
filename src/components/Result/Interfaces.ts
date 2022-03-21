import { UserListState } from "../../react-wrapper/redux/slices/userListSlice";


export interface ResultProps {
    payload: UserListState 
}

export interface LoaderState {
    status: boolean,
    loader: string
}