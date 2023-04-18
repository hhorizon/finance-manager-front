import { toast, Id } from "react-toastify";

type Notification = (
  text: string,
  type?: "info" | "success" | "warning" | "error",
  autoClose?: number,
) => Id;

export const createNotification: Notification = (
  text,
  type = "info",
  autoClose = 5000,
) => {
  return toast[type](text, {
    position: "top-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
