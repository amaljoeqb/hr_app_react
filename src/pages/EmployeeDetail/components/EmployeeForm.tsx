import TextInput from "../../../components/inputs/TextInput";
import { Department, Employee, Skill } from "../../../models";
import { Formik, Form, useFormik, useFormikContext, FormikProps } from "formik";
import { SelectInput } from "../../../components";
import { employeeSchema } from "../../../config";
import useEmployeeForm from "../hooks/useEmployeeForm";
import { useEffect, useRef } from "react";

export interface EmployeeFormProps {
  employee: Employee | undefined;
  skills: Skill[];
  departments: Department[];
  isView: boolean;
  onEdit: () => void;
  onSave: () => void;
}

export default function EmployeeForm(props: EmployeeFormProps) {
  const {
    initialValues,
    onSubmit,
    skillsOptions,
    departmentOptions,
    isInitialValid,
    onClickEdit,
    onAutofill,
  } = useEmployeeForm(props);

  const formik = useRef<FormikProps<Employee>>(null);

  useEffect(() => {
    if (formik.current) {
      formik.current.setValues(initialValues);
    }
  }, [props.isView, props.employee, initialValues]);

  function onEmployeeIdDoubleClick() {
    if (formik.current) {
      onAutofill(formik.current);
    }
  }

  return (
    <Formik<Employee>
      key={initialValues.employeeId}
      initialValues={initialValues}
      validateOnMount={isInitialValid}
      onSubmit={onSubmit}
      validationSchema={employeeSchema}
      innerRef={formik}
    >
      <Form id="emp-form" noValidate>
        <div className="row">
          <div onDoubleClick={onEmployeeIdDoubleClick} className="field">
            <TextInput
              label="Employee ID"
              name="employeeId"
              type="number"
              required
              disabled
            />
          </div>
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
            isDisabled={props.isView}
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
            isDisabled={props.isView}
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
            <button
              id="edit-button"
              className="hover-btn"
              type="button"
              onClick={onClickEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
