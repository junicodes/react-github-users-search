
import { v4 } from "uuid"

export const newUserListPayload =  {
    status: 200,
    data: {
        total_count: 3000,
        incomplete_results: false,
        items: [
            {
                id: v4(),
                login: "Daniel",
                type: "Admin",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danno",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danzo",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danno",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danzo",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danno",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danzo",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danno",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            },
            {
                id: v4(),
                login: "Danzo",
                type: "User",
                avatar_url: "https://avatars.githubusercontent.com/u/33384?v=4",
            }
        ]
    }
};


export const userListReduxState = {
    searchQuery: 'Daniel',
    userList: newUserListPayload.data,
    loading: [
        'GET_USER_LIST_DATA'
    ],
    per_page: 9,
    page: 1,
    current_sort: {key: 'login', order: 'asc'}
}