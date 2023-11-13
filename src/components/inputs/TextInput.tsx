import { useField } from "formik";

export interface TextInputProps {
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
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
