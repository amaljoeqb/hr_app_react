import { useState } from "react";
import { IToast } from "../models";

export default function useToast() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const showToast = (message: string) => {
    const toast: IToast = {
      message,
      isError: false,
      id: Date.now(),
    };
    setInterval(() => {
      closeToast(toast.id);
    }, 3000);
    setToasts([...toasts, toast]);
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
