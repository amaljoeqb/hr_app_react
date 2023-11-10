import { useParams } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import { useAppContext } from "../../store/app.context";
import { Employee } from "../../models";

export default function EmployeePage() {
  const employeeId = Number(useParams<{ employeeId: string }>().employeeId);
  const appContext = useAppContext();
  const { employees, skills } = appContext.state;
  return (
    <div className="popup emp-popup show-popup">
      <section className="popup-content">
        <div className="form-header">
          <h2>
            <div className="add-heading">
              <span className="material-symbols-outlined"> add_circle </span>
            </div>
            <div className="view-edit-heading flip-container">
              <div className="front">
                <span className="material-symbols-outlined"> edit </span>
              </div>
              <div className="back">
                <span className="material-symbols-outlined"> visibility </span>
              </div>
            </div>
            <span className="heading-text">Employee</span>
          </h2>
          <span className="material-symbols-outlined close-popup"> close </span>
        </div>
        <EmployeeForm
          employee={
            employees.find(
              (employee) => employee.employeeId === employeeId
            ) as Employee
          }
        />
      </section>
    </div>
  );
}
