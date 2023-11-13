import { useField } from "formik";
import Select from "react-select";

export interface SelectInputProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: { value: any; label: string }[];
  id: string;
}

export default function SelectInput({
  label,
  options,
  id,
  ...props
}: SelectInputProps) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(props.name);

  function getValue() {
    return field.value
      ? options.find((option) => option.value[id] === field.value[id])
      : undefined;
  }
  return (
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
      <Select
        {...field}
        {...props}
        menuPlacement={"auto"}
        isMulti={false}
        options={options}
        value={getValue()}
        onChange={(option) => {
          fieldOnChange({
            target: {
              name: props.name,
              value: option?.value,
            },
          });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
