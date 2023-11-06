export default function TextInput({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div id={`${name}-field`} className="field">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        required={required ?? false}
        disabled={disabled ?? false}
        onInput={(event) => onChange((event.target as HTMLInputElement).value)}
      />
      <p className="error-msg" />
    </div>
  );
}
