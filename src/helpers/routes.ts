//App Origin
export const origin: string = "https://api.github.com/";

// Users List Routes
export const GET_USER_LIST_DATA = (query: string, per_page: number = 9, page: number = 1): string => `search/users?q=${query}%20in:login&per_page=${per_page}&page=${page}`;