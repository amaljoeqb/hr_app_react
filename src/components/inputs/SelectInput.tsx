import { useField } from "formik";
import Select from "react-select";

// select using formik and react-select
export default function SelectInput({
  label,
  name,
  options,
  id,
  ...props
}: {
  label: string;
  name: string;
  id: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  options: { value: any; label: string }[];
}) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(name);
  console.log(field);
  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <Select
        {...field}
        {...props}
        options={options}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: state.isFocused
              ? "1px solid #000"
              : "1px solid var(--light-grey)",
            boxShadow: "var(--light-shadow)",
            borderRadius: "8px",
            color: "red",
          }),
        }}
        value={options.find((option) => option.value[id] === field.value[id])}
        onChange={(option) => {
          fieldOnChange({ target: { name, value: option?.value } });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
