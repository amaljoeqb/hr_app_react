import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import { useAppContext } from "../../store/app.context";
import { Employee } from "../../models";
import { useState } from "react";

export default function EmployeeDetail() {
  const employeeId = useParams<{ employeeId: string }>().employeeId;
  const appContext = useAppContext();
  const navigate = useNavigate();
  const { employees, skills, departments } = appContext.state;
  let employee: Employee | undefined = undefined;
  const [isView, setIsView] = useState(true);

  if (employeeId) {
    employee = employees.find((employee) => employee.employeeId == employeeId);
  }

  return (
    <div
      className={`popup emp-popup show-popup ${
        isView ? "view-popup" : "edit-popup"
      }`}
    >
      <section className="popup-content">
        <div className="form-header">
          <h2>
            <span
              className="material-symbols-outlined back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              {" "}
              arrow_back{" "}
            </span>

            <div className="add-heading">
              <span className="material-symbols-outlined"> add_circle </span>
            </div>
            <span className="heading-text">Employee</span>
            <div className="view-edit-heading flip-container">
              <div className="front">
                <span className="material-symbols-outlined"> edit </span>
              </div>
              <div className="back">
                <span className="material-symbols-outlined"> visibility </span>
              </div>
            </div>
          </h2>
        </div>
        <EmployeeForm
          employee={employee}
          skills={skills}
          departments={departments}
          isView={isView}
          onEdit={() => {
            setIsView(false);
          }}
          onView={() => {
            setIsView(true);
          }}
        />
      </section>
    </div>
  );
}
