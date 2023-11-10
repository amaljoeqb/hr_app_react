import { useField } from "formik";
import Select from "react-select";
import MultiValue from "react-select/dist/declarations/src/components/MultiValue";

// select using formik and react-select
export default function SelectInput({
  label,
  options,
  id,
  ...props
}: {
  label: string;
  name: string;
  id: string;
  required?: boolean;
  isMulti?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  options: { value: any; label: string }[];
}) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(props.name);
  console.log(field);
  return (
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
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
          fieldOnChange({
            target: {
              name: props.name,
              value: option,
            },
          });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
