import { useState } from "react";
import { IToast, ToastType } from "../models";

export interface IShowToast {
  message: string;
  type: ToastType;
}

export function useToast() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const showToast = ({ message, type }: IShowToast) => {
    const toast: IToast = {
      message,
      type,
      id: Date.now(),
    };
    console.log(toasts);
    setInterval(() => {
      closeToast(toast.id);
    }, 3000);
    setToasts(
      (toasts) => [...toasts, toast] // add new toast to the end of the array
    );
  };

  const closeToast = (id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    showToast,
    closeToast,
  };
}
