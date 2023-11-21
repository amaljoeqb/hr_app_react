import { useNavigate } from "react-router-dom";
import { EmployeeFormProps } from "../components/EmployeeForm";
import { useAppContext } from "../../../store/app.context";
import { getNextEmployeeId } from "../../../services/helpers";
import { Department, Employee, Skill } from "../../../models";
import { useApi } from "../../../hooks";

export default function useEmployeeForm({
  employee,
  skills,
  departments,
}: EmployeeFormProps) {
  const api = useApi();
  const appContext = useAppContext();
  const navigate = useNavigate();
  const isInitialValid = employee !== undefined;
  const initialValues: Employee = employee ?? {
    employeeId: getNextEmployeeId(appContext.state.employees),
    name: "",
    email: "",
    designation: "",
    department: undefined,
    skills: [],
    dateOfBirth: "",
    joiningDate: "",
  };
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
    navigate("/");
  }

  return {
    initialValues,
    onSubmit,
    departmentOptions,
    skillsOptions,
    isInitialValid,
  };
}
