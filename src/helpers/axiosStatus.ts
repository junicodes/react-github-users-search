
import { ToastNotify } from "./toastNotify";

const axiosStatus = (response: any): number | null => {

    switch (response.status) {
        case 500:
            ToastNotify({
                type: "error", 
                message: `Ooops something not right, please refresh and try angain or contact support.`,
                position: "top-center"
            })
            return 500;
        case 400:
            ToastNotify({
                type: "error", 
                message: `Ooops something not right, please refresh and try angain or contact support.`,
                position: "top-center"
            })
            return 400;
        case 403:
            ToastNotify({
                type: "error", 
                message: response.message,
                position: "top-center"
            })
            return 400;
        case 200:
            return 200;
        case 201:
            return 201;
        default:
            ToastNotify({
                type: "error", 
                message: `An unexpected error occured, please referesh and try again`,
                position: "top-center"
            })
            return null;
    }

}

export default axiosStatus;