import { toast, ToastPosition, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastNotifyProps {
    type: string,
    message: string,
    position: ToastPosition
}

export function ToastNotify({type = "default", message = "Welcome", position = "top-right"}: ToastNotifyProps) {

  const body: ToastOptions = {
    position,
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  }

  switch (type) {
    case "success":
      toast.success(message, body);
      break;

    case "error":
      toast.error(message, body);
      break;

    case "info":
      toast.info(message, body);
      break;

    case "warning":
      toast.warning(message, body);
      break;

    case "dark":
      toast.dark(message, body);
      break;

    default:
      toast.info(message, body);
      break;
  }

}