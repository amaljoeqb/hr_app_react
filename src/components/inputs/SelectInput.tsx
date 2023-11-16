import { useField } from "formik";
import Select, { Props } from "react-select";

export interface SelectOption<T> {
  value: T;
  label: string;
}

export interface SelectInputProps<T> extends Props<SelectOption<T>> {
  label: string;
  name: string;
  options: SelectOption<T>[];
  optionId: keyof T;
}

export default function SelectInput<T>({
  label,
  options,
  optionId,
  name,
  isMulti,
  ...props
}: SelectInputProps<T>) {
  const [{ onChange: fieldOnChange, ...field }, meta] = useField(name);

  function getValue() {
    if (isMulti) {
      return field.value
        ? options.filter((option) =>
            field.value
              .map((v: T) => v[optionId])
              .includes(option.value[optionId])
          )
        : [];
    } else {
      console.log(field.value, options);
      return options.find(
        (option) => option.value[optionId] === field.value[optionId]
      );
    }
  }

  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <Select
        {...props}
        isMulti={isMulti}
        options={options}
        menuPlacement={"auto"}
        value={getValue()}
        onChange={(option: any) => {
          fieldOnChange({
            target: {
              name: name,
              value: isMulti ? option.map((o: any) => o.value) : option?.value,
            },
          });
        }}
      />
      {meta.touched && meta.error ? <p className="error-msg" /> : null}
    </div>
  );
}
