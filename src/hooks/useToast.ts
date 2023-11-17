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
    setToasts([...toasts, toast]);
  };

  const closeToast = (id: number) => {
    setToasts(toasts.filter((t) => t.id !== id));
  };

  return {
    toasts,
    showToast,
    closeToast,
  };
}
