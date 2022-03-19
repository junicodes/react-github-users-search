import axios, { Method, AxiosRequestHeaders } from "axios";
import { origin } from "./routes";
import axiosStatus from "./axiosStatus";
import { ToastNotify } from "./toastNotify";

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
        
        const res = axiosStatus(response);

        if(res === 200 || res === 201) { return response.data; } 
        return { status: res, data: null };
        
    } catch (error) {

        ToastNotify({
            type: "error", 
            message: `An unexpected error occured, please referesh and try again`,
            position: "top-center"
        })
        return { status: null, data: null };
    }
};