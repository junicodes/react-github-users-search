import userListReducer, {
    UserListState,
    userListDefaultPayload,
    setUserList,
    initialState
} from '../userListSlice';
import { axiosWrapper } from '../../../../helpers/axios';
import { GET_USER_LIST_DATA } from "../../../../helpers/routes";
import { newUserListPayload } from "../../../../helpers/testPayload/userListPayload";
import axios from 'axios';
jest.mock("axios")


describe('Userlist reducer test', () => {

  const newState: UserListState = {
    searchQuery: '',
    userList: userListDefaultPayload,
    loading: [
      'GET_USER_LIST_DATA'
    ],
    per_page: 9,
    page: 2,
    current_sort: {key: 'login', order: 'asc', type: 'object'}
  }

  it('It should handle default state', () => {
    expect(userListReducer(undefined, { type: 'unknown'})).toEqual(initialState)
  })

  it('It should add new user list payload to state after api call', async () => {
    //Firstly we mock the api request

    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload))
    
    const payload = await axiosWrapper("get", GET_USER_LIST_DATA("Daniel"));

    const actual = userListReducer(newState, setUserList(payload.data.items));

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(actual.userList.items).toEqual(payload.data.items)
  })

})