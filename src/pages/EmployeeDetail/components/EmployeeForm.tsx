import TextInput from "../../../components/inputs/TextInput";
import { Employee } from "../../../models";
import * as Yup from "yup";
import { Formik } from "formik";

export default function EmployeeForm({ employee }: { employee: Employee }) {
  return (
    <Formik
      initialValues={employee}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        salary: Yup.number()
          .min(0, "Salary can't be negative")
          .required("Required"),
        designation: Yup.string().required("Required"),
        department: Yup.string().required("Required"),
        dob: Yup.date().required("Required"),
        joiningDate: Yup.date().required("Required"),
        skills: Yup.array().required("Required"),
      })}
    >
      <form id="emp-form">
        <div className="row">
          <TextInput
            label="Employee ID"
            name="employeeId"
            type="number"
            required={true}
          />
          <TextInput label="Name" name="name" required={true} />
        </div>
        <div className="row">
          <TextInput label="Email" name="email" required={true} />
          <TextInput
            type="number"
            label="Salary"
            name="salary"
            required={true}
          />
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
          <TextInput
            label="Date of birth"
            name="dateOfBirth"
            type="date"
            required={true}
          />
          <TextInput
            label="Date of Joining"
            name="joiningDate"
            type="date"
            required={true}
          />
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
    </Formik>
  );
}
