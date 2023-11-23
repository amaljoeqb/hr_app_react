import { useState } from "react";
import { IToast } from "../models";

export interface IShowToast {
  message: string;
  isError?: boolean;
}

export function useToast() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const showToast = ({ message, isError }: IShowToast) => {
    const toast: IToast = {
      message,
      isError: isError ?? false,
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
