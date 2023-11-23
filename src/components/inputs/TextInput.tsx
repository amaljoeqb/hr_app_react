import { useField } from "formik";
import { InputError } from "../";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
}

export default function TextInput({
  label,
  ...props
}: TextInputProps) {
  const [field, meta] = useField(props.name);
  return (
    <div
      id={`${props.name}-field`}
      className="field"
    >
      <label htmlFor={props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      <InputError
        message={meta.touched && meta.error ? meta.error : undefined}
      />
    </div>
  );
}
