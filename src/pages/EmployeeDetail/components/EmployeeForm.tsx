import TextInput from "../../../components/inputs/TextInput";
import { Department, Employee, Skill } from "../../../models";
import { Formik, Form } from "formik";
import { SelectInput } from "../../../components";
import { employeeSchema } from "../../../config";
import useEmployeeForm from "../hooks/useEmployeeForm";

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
  const {
    initialValues,
    onSubmit,
    skillsOptions,
    departmentOptions,
    isInitialValid,
  } = useEmployeeForm({
    employee,
    skills,
    departments,
  });

  return (
    <Formik<Employee>
      initialValues={initialValues}
      validateOnMount={isInitialValid}
      onSubmit={onSubmit}
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
          <TextInput type="number" label="Salary" name="salary" required />
        </div>
        <div className="row">
          <TextInput
            label="Designation"
            name="designation"
            type="text"
            required
          />
          <SelectInput<Department>
            label="Department"
            name="department"
            optionId="departmentId"
            required
            options={departmentOptions}
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
          <SelectInput<Skill>
            label="Skills"
            name="skills"
            optionId="skillId"
            isMulti
            required
            options={skillsOptions}
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
