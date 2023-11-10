import { useField } from "formik";
import Select from "react-select";

// select using formik and react-select
export default function SelectInput({
  label,
  name,
  options,
  ...props
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  options: { value: any; label: string }[];
}) {
  const [field, meta, helpers] = useField(name);

  const handleChange = (selectedOption: any) => {
    helpers.setValue(selectedOption);
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };

  console.log(field);
  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <Select
        {...field}
        {...props}
        options={options}
        value={field.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
