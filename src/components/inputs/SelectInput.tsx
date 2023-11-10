export default function SelectInput({
  label,
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
  return (
    <div id="department-field" className="field dropdown">
      <label htmlFor="department">Department</label>
      <div className="input-container">
        <input
          type="text"
          name="department"
          id="department"
          className="dropdown-input"
          autoComplete="off"
          required={true}
        />
        <span className="material-symbols-outlined suffix-icon">
          keyboard_arrow_down
        </span>
      </div>
      <div className="dropdown-content department">
        <ul id="department-options" className="dropdown-list" />
      </div>
      <p className="error-msg" />
    </div>
  );
}
