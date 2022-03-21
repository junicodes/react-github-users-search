
import { ToastNotify } from "./toastNotify";

const axiosStatus = (response: any): void => {
    if(response.status) {
        ToastNotify({
            type: "warning", 
            message: response?.data?.message || 'Ooops something not right, please refresh and try angain or contact support.',
            position: "top-center"
        })
        if(response.status === 403) {
            ToastNotify({
                type: "warning", 
                message: 'Please wait a couple of minutes and try again.',
                position: "top-center"
            })
        }
    }else {
        ToastNotify({
            type: "error", 
            message: `An unexpected error occured, please referesh and try again`,
            position: "top-center"
        })
    }
}

export default axiosStatus;