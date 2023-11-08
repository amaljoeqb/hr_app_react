export default function NumberInput({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
}: {
  label: string;
  name: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        id={name}
        required={required ?? false}
        disabled={disabled ?? false}
        value={value}
        onInput={(event) => onChange(parseInt((event.target as HTMLInputElement).value))}
      />
      <p className="error-msg" />
    </div>
  );
}
