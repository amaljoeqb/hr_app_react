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
  isMulti?: boolean;
}

export default function SelectInput({
  label,
  options,
  id,
  isMulti = false,
  ...props
}: SelectInputProps) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(props.name);

  function getValue() {
    if (isMulti) {
      return field.value
        ? options.filter((option) =>
            field.value.map((v: any) => v[id]).includes(option.value[id])
          )
        : [];
    } else {
      return options.find((option) => option.value[id] === field.value);
    }
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
        //   fieldOnChange({
        //     target: {
        //       name: props.name,
        //       value: isMulti ? option.map((o: any) => o.value) : option?.value,
        //     },
        //   });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
