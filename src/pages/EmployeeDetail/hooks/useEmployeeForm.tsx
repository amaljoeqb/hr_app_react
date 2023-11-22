import { useNavigate } from "react-router-dom";
import { EmployeeFormProps } from "../components/EmployeeForm";
import { useAppContext } from "../../../store/app.context";
import { getNextEmployeeId } from "../../../services/";
import { Department, Employee, Skill } from "../../../models";
import { useApi } from "../../../hooks";
import { useState } from "react";
import data from "../../../data/data.json";

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
  const navigate = useNavigate();
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
  const [initialValues, setInitialValues] = useState<Employee>(
    employee || newEmployee
  );

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

  function onAutofill() {
    const randomIndex = Math.floor(Math.random() * data.employees.length);
    const employee = data.employees[randomIndex];
    setInitialValues(employee);
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
