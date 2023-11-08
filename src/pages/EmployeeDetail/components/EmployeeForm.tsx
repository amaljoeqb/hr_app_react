import TextInput from "../../../components/inputs/TextInput";
import { Employee } from "../../../models";
import NumberInput from "../../../components/inputs/NumberInput";

export default function EmployeeForm({ employee }: { employee: Employee }) {
  return (
    <div className="popup emp-popup show-popup">
      <section className="popup-content">
        <div className="form-header">
          <h2>
            <div className="add-heading">
              <span className="material-symbols-outlined"> add_circle </span>
            </div>
            <div className="view-edit-heading flip-container">
              <div className="front">
                <span className="material-symbols-outlined"> edit </span>
              </div>
              <div className="back">
                <span className="material-symbols-outlined"> visibility </span>
              </div>
            </div>
            <span className="heading-text">Employee</span>
          </h2>
          <span className="material-symbols-outlined close-popup"> close </span>
        </div>
        <form id="emp-form">
          <div className="row">
            <NumberInput
              label="Employee ID"
              name="employee-id"
              onChange={(text) => {}}
              value={employee.employeeId}
              required={true}
              disabled={true}
            />
            <div id="name-field" className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required={true} />
              <p className="error-msg" />
            </div>
          </div>
          <div className="row">
            <div id="email-field" className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required={true} />
              <p className="error-msg" />
            </div>
            <div id="salary-field" className="field">
              <label htmlFor="salary">Salary</label>
              <input type="number" name="salary" id="salary" required={true} />
              <p className="error-msg" />
            </div>
          </div>
          <div className="row">
            <div id="designation-field" className="field">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                name="designation"
                id="designation"
                required={true}
              />
              <p className="error-msg" />
            </div>
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
          </div>
          <div className="row">
            <div id="dob-field" className="field">
              <label htmlFor="dob">Date of birth</label>
              <input type="date" name="dob" id="dob" required={true} />
              <p className="error-msg" />
            </div>
            <div id="joining-date-field" className="field">
              <label htmlFor="joining-date">Date of Joining</label>
              <input
                type="date"
                name="joining-date"
                id="joining-date"
                required={true}
              />
              <p className="error-msg" />
            </div>
          </div>
          <div className="row">
            <div id="skills-field" className="field">
              <label htmlFor="skills">Skills</label>
              <div className="skills-input-container">
                <span id="skills" className="skills-list">
                  {" "}
                </span>
                <input
                  type="text"
                  name="skills"
                  id="skill-input"
                  className="skill-input"
                  autoComplete="off"
                />
                <div className="dropdown-content skills-dropdown">
                  <ul id="skills-options" className="dropdown-list" />
                </div>
              </div>
              <p className="error-msg" />
            </div>
          </div>
          <div className="flip-container">
            <div className="front">
              <input
                id="save-button"
                className="hover-btn primary submit"
                type="submit"
                defaultValue="Save"
              />
            </div>
            <div className="back">
              <button id="edit-button" className="hover-btn" type="button">
                Edit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
