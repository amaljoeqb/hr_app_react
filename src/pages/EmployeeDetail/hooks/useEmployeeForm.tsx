import { EmployeeFormProps } from "../components/EmployeeForm";
import { useAppContext } from "../../../store/app.context";
import { getNextEmployeeId, isEmployeeEqual } from "../../../services/";
import { Employee } from "../../../models";
import { useApi } from "../../../hooks";
import data from "../../../data/data.json";
import { FormikContextType } from "formik";
import { useMemo, useRef } from "react";

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
  const initialValues = useMemo(() => {
    const newEmployee: Employee = {
      employeeId: getNextEmployeeId(appContext.state.employees),
      name: "",
      email: "",
      designation: "",
      salary: 0,
      department: undefined,
      skills: [],
      dateOfBirth: "",
      joiningDate: "",
    };
    return employee || newEmployee;
  }, [employee, appContext.state.employees]);

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
      if (!isEmployeeEqual(employee, values)) {
        api.updateEmployee(values);
      }
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
