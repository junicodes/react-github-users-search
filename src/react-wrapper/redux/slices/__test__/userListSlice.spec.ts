import userListReducer, {
    UserListState,
    userListDefaultPayload,
    setUserList
} from '../userListSlice';

import { axiosWrapper } from '../../../../helpers/axios';
import { GET_USER_LIST_DATA } from "../../../../helpers/routes";
import { newUserListPayload } from "../../../../helpers/testPayload/userListPayload";
import axios from 'axios';
jest.mock("axios")


describe('Userlist reducer test', () => {

  const initialState: UserListState = {
    userList: userListDefaultPayload,
    loading: [
      'GET_USER_LIST_DATA'
    ]
  }

  it('It should handle default state', () => {
    expect(userListReducer(undefined, { type: 'unknown'})).toEqual({
        userList: userListDefaultPayload,
        loading: []
    })
  })

  it('It should add new payload to state after api call', async () => {
    //Firstly we mock the api request

    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newUserListPayload))
    
    const payload = await axiosWrapper("get", GET_USER_LIST_DATA("Daniel"));

    expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledWith("https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + apiKey)
    expect(payload).toBe(newUserListPayload.data);

    const actual = userListReducer(initialState, setUserList(payload));
    expect(actual.userList).toEqual(payload)
  })

})