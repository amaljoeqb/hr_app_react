import { useParams } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import { useAppContext } from "../../store/app.context";
import { Employee } from "../../models";

export default function EmployeePage() {
  const employeeId = Number(useParams<{ employeeId: string }>().employeeId);
  const appContext = useAppContext();
  const { employees, skills } = appContext.state;
  return (
    <EmployeeForm
      employee={
        employees.find(
          (employee) => employee.employeeId === employeeId
        ) as Employee
      }
    />
  );
}
