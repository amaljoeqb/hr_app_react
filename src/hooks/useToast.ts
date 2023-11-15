import { useState } from "react";

export default function useToast() {
  const [toasts, setToasts] = useState<string[]>([]);

  return toasts;
}
