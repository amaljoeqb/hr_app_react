import { IToast } from "../../../models";

export interface ToastProps {
  toast: IToast;
  onClose: () => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  return (
    <div className={`toast show ${toast.isError ? "error" : ""}`}>
      <p className="toast-message">{toast.message}</p>
      <span className="material-symbols-outlined close-toast" onClick={onClose}>
        close
      </span>
    </div>
  );
}
