import { useField } from "formik";

export default function TextInput({
  label,
  name,
  ...props
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
}) {
  const [field, meta] = useField(name);
  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
