import { useField } from "formik";
import Select from "react-select";

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
  return (
    <div id={`${props.name}-field`} className="field">
      <label htmlFor={props.name}>{label}</label>
      <Select
        {...field}
        {...props}
        options={options}
        value={
          field.value instanceof Array
            ? options.filter((option) =>
                field.value.map((v: any) => v[id]).includes(option.value[id])
              )
            : options.find((option) => option.value[id] === field.value[id])
        }
        onChange={(option) => {
          fieldOnChange({
            target: {
              name: props.name,
              value:
                option instanceof Array
                  ? option.map((item) => item.value)
                  : option?.value,
            },
          });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
