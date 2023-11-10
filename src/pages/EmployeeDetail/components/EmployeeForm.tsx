import TextInput from "../../../components/inputs/TextInput";
import { Department, Employee, Skill } from "../../../models";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { SelectInput } from "../../../components";
import { useAppContext } from "../../../store/app.context";
import { useNavigate } from "react-router-dom";

export default function EmployeeForm({
  employee,
  skills,
  departments,
}: {
  employee: Employee;
  skills: Skill[];
  departments: Department[];
}) {
  const navigate = useNavigate();
  const appContext = useAppContext();

  return (
    <Formik
      initialValues={employee}
      onSubmit={(values, actions) => {
        console.log(values);
        appContext.dispatch({
          type: "UPDATE_EMPLOYEE",
          payload: values,
        });
        actions.setSubmitting(false);
        navigate("/");
      }}
      validationSchema={Yup.object({
        employeeId: Yup.number().required("Required"),
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        salary: Yup.number()
          .min(0, "Salary can't be negative")
          .required("Required"),
        designation: Yup.string().required("Required"),
        department: Yup.object().required("Required"),
        dateOfBirth: Yup.date().required("Required"),
        joiningDate: Yup.date().required("Required"),
        skills: Yup.array().required("Required"),
      })}
    >
      <Form id="emp-form">
        <div className="row">
          <TextInput
            label="Employee ID"
            name="employeeId"
            type="number"
            required={true}
            disabled={true}
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
          <TextInput
            label="Designation"
            name="designation"
            type="text"
            required={true}
          />
          <SelectInput
            label="Department"
            name="department"
            id="departmentId"
            required={true}
            options={departments.map((department) => ({
              value: department,
              label: department.department,
            }))}
          />
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
          <SelectInput
            label="Skills"
            name="skills"
            id="skillId"
            required={true}
            isMulti={true}
            options={skills.map((skill) => ({
              value: skill,
              label: skill.skill,
            }))}
          />
        </div>
        <div className="flip-container">
          <div className="front">
            <input
              id="save-button"
              className="hover-btn primary submit"
              type="submit"
              value="Save"
            />
          </div>
          <div className="back">
            <button id="edit-button" className="hover-btn" type="button">
              Edit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
