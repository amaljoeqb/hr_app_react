import { EmployeeFormProps } from "../components/EmployeeForm";
import { useAppContext } from "../../../store/app.context";
import { getNextEmployeeId } from "../../../services/";
import { Employee,  } from "../../../models";
import { useApi } from "../../../hooks";
import data from "../../../data/data.json";
import { FormikContextType } from "formik";

export default function useEmployeeForm({
  employee,
  skills,
  departments,
  isView,
  onEdit,
  onSave,
}: EmployeeFormProps) {
  const api = useApi();
  const appContext = useAppContext();
  const isInitialValid = employee !== undefined;
  const newEmployee: Employee = {
    employeeId: getNextEmployeeId(appContext.state.employees),
    name: "",
    email: "",
    designation: "",
    department: undefined,
    skills: [],
    dateOfBirth: "",
    joiningDate: "",
  };
  const initialValues = employee || newEmployee;

  const departmentOptions = departments.map((department) => ({
    value: department,
    label: department.department,
  }));

  const skillsOptions = skills.map((skill) => ({
    value: skill,
    label: skill.skill,
  }));

  function onSubmit(values: Employee) {
    if (employee) {
      api.updateEmployee(values);
    } else {
      api.createEmployee(values);
    }
    onSave();
  }

  function onClickEdit() {
    onEdit();
  }

  function onAutofill(formik: FormikContextType<Employee>) {
    if (process.env.NODE_ENV !== "development") {
      return;
    }
    const nextId = getNextEmployeeId(appContext.state.employees);
    if (formik.values.employeeId !== nextId) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * data.employees.length);
    const employee = data.employees[randomIndex];
    employee.employeeId = nextId;
    formik.setValues(employee);
  }

  return {
    initialValues,
    onSubmit,
    onClickEdit,
    onAutofill,
    departmentOptions,
    skillsOptions,
    isInitialValid,
  };
}
