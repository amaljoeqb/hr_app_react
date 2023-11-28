import { Employee } from "../../../models";
import HighlightedSpan from "../../../components/ui/HighlightedSpan";
import { useNavigate } from "react-router-dom";
import EmployeeActionMenu from "./EmployeeActionMenu";
import SkillsCell from "./SkillsCell";

export interface EmployeeRowProps {
  employee: Employee;
  searchTerm: string;
}

export default function EmployeeRow({
  employee,
  searchTerm,
}: EmployeeRowProps) {
  const navigate = useNavigate();

  return (
    <tr key={employee.employeeId} className="emp-row">
      <td className="check-cell">
        <div className="checkbox-container">
          <input type="checkbox" className="row-check" />
        </div>
      </td>
      <td>
        <HighlightedSpan text={employee.employeeId} searchTerm={searchTerm} />
      </td>
      <td>
        <div className="name-container">
          <div
            className="name"
            onClick={() => {
              navigate(`/employee/${employee.employeeId}`);
            }}
          >
            <HighlightedSpan text={employee.name} searchTerm={searchTerm} />
            <span className="material-symbols-outlined"> visibility </span>
          </div>
          <p className="email">{employee.email}</p>
        </div>
      </td>
      <td>
        <HighlightedSpan
          text={employee.designation ?? "N/A"}
          searchTerm={searchTerm}
        />
      </td>
      <td>
        <HighlightedSpan
          text={employee.department?.department ?? ""}
          searchTerm={searchTerm}
        />
      </td>
      <SkillsCell skills={employee.skills} />
      <td className="overflow">
        <EmployeeActionMenu
          onDelete={() => {
            navigate(`/?delete=${employee.employeeId}`);
          }}
          onEdit={() => {
            navigate(`/employee/${employee.employeeId}?edit=true`);
          }}
        />
      </td>
    </tr>
  );
}
