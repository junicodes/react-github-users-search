//App Origin
export const origin: string = "https://api.github.com/";

// Users List Routes
export const GET_USER_LIST_DATA = (query: string): string => `search/users?q=${query}%20in:login`;