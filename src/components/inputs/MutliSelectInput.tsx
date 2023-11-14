import { useField } from "formik";
import Select from "react-select";

export interface MultiSelectInputProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: { value: any; label: string }[];
  id: string;
}

export default function MultiSelectInput({
  label,
  options,
  id,
  ...props
}: MultiSelectInputProps) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(props.name);

  function getValue() {
    return field.value
      ? options.filter((option) =>
          field.value.map((v: any) => v[id]).includes(option.value[id])
        )
      : [];
  }
  return (
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
      <Select
        {...field}
        {...props}
        menuPlacement={"auto"}
        isMulti
        options={options}
        value={getValue()}
        onChange={(option) => {
          fieldOnChange({
            target: {
              name: props.name,
              value: option.map((item) => item.value),
            },
          });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
