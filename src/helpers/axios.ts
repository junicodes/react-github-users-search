import axios, { Method, AxiosRequestHeaders } from "axios";
import { origin } from "./routes";
import axiosStatus from "./axiosStatus";

export const axiosWrapper = async (
    method: Method | undefined,
    route: string,
    header?: AxiosRequestHeaders | undefined,
    body?: object[] | null | undefined
): Promise<any> => {

    let response: any = null;

    try {
        if(method === 'get') response = await axios.get(`${origin}${route}`);
        if(method === 'post' && body) response = await axios.post(`${origin}${route}`, body);
        if(method === 'put' && body) response = await axios.put(`${origin}${route}`);
        if(method === 'delete' && body) response = await axios.delete(`${origin}${route}`);
        
        return { status: response.status, data: response.data };
        
    } catch (error: any) {
        axiosStatus(error.response);
        return { status: error.response.status, data: null };
    }
};