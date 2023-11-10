import { useField } from "formik";

export default function TextInput({
  label,
  ...props
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
}) {
  const [field, meta] = useField(props.name as string);
  return (
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
