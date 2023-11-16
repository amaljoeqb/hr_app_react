import { useNavigate } from "react-router-dom";
import { EmployeeFormProps } from "../components/EmployeeForm";
import { useAppContext } from "../../../store/app.context";
import { getNextEmployeeId } from "../../../services/helpers";
import { Department, Employee, Skill } from "../../../models";

export default function useEmployeeForm({
  employee,
  skills,
  departments,
}: EmployeeFormProps) {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const isInitialValid = employee !== undefined;
  const initialValues: Employee = employee ?? {
    employeeId: getNextEmployeeId(appContext.state.employees),
    name: "",
    email: "",
    salary: 0,
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
