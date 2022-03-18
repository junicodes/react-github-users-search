import userListReducer, {
    UserListState,
    userListDefaultPayload,
    setUserList
} from '../userListSlice';

const newUserListPayload =  {
  total_count: 0,
  incomplete_results: false,
  items: [
    {
      id: 45673,
      login: "fooishbar",
      type: "Admin",
      avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
    },
    {
      id: 78302,
      login: "fooishtab",
      type: "User",
      avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
    }
  ]
}


describe('Userlist reducer test', () => {

  const initialState: UserListState = {
    userList: userListDefaultPayload,
    loading: [
      'GET_USER_LIST_DATA'
    ]
  }

  test('It should handle initial state', () => {
    expect(userListReducer(undefined, { type: 'unknown'})).toEqual({
        userList: userListDefaultPayload,
        loading: []
    })
  })

  test('It should add new payload to state', () => {
    const actual = userListReducer(initialState, setUserList(newUserListPayload));
    expect(actual.userList).toEqual(newUserListPayload)
  })

})