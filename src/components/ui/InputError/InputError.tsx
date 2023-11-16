export interface InputErrorProps {
  message: string;
  show: boolean;
}

export default function InputError({ message, show }: InputErrorProps) {
  return (
    <p className={`error-msg ${show ? "show" : ""}`}>
      {message}
    </p>
  );
}
