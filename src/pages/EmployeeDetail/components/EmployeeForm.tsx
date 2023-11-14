import TextInput from "../../../components/inputs/TextInput";
import { Department, Employee, Skill } from "../../../models";
import { Formik, Form } from "formik";
import { SelectInput } from "../../../components";
import { useAppContext } from "../../../store/app.context";
import { useNavigate } from "react-router-dom";
import { employeeSchema } from "../../../config";
import MultiSelectInput from "../../../components/inputs/MutliSelectInput";
import { getNextEmployeeId } from "../../../services/helpers";

export interface EmployeeFormProps {
  employee: Employee | undefined;
  skills: Skill[];
  departments: Department[];
}

export default function EmployeeForm({
  employee,
  skills,
  departments,
}: EmployeeFormProps) {
  const navigate = useNavigate();
  const appContext = useAppContext();

  return (
    <Formik
      initialValues={
        employee ?? {
          employeeId: getNextEmployeeId(appContext.state.employees),
        }
      }
      onSubmit={(values, actions) => {
        if (employee) {
          appContext.dispatch({
            type: "UPDATE_EMPLOYEE",
            payload: values,
          });
        } else {
          appContext.dispatch({
            type: "ADD_EMPLOYEE",
            payload: values,
          });
        }
        actions.setSubmitting(false);
        navigate("/");
      }}
      validationSchema={employeeSchema}
    >
      <Form id="emp-form">
        <div className="row">
          <TextInput
            label="Employee ID"
            name="employeeId"
            type="number"
            required
            disabled
          />
          <TextInput label="Name" name="name" required={true} />
        </div>
        <div className="row">
          <TextInput label="Email" name="email" required={true} />
          <TextInput
            type="number"
            label="Salary"
            name="salary"
            required
          />
        </div>
        <div className="row">
          <TextInput
            label="Designation"
            name="designation"
            type="text"
            required
          />
          <SelectInput
            label="Department"
            name="department"
            id="departmentId"
            required
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
            required
          />
          <TextInput
            label="Date of Joining"
            name="joiningDate"
            type="date"
            required
          />
        </div>
        <div className="row">
          <MultiSelectInput
            label="Skills"
            name="skills"
            id="skillId"
            required
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
