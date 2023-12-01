import { Employee } from "../../../models";
import HighlightedSpan from "../../../components/ui/HighlightedSpan";
import { useNavigate } from "react-router-dom";
import EmployeeActionMenu from "./EmployeeActionMenu";
import SkillsCell from "./SkillsCell";
import { ColumnKey } from "../../../components/ui/Table/Table";

export interface EmployeeRowProps {
  employee: Employee;
  searchTerm: string;
  cells: Set<ColumnKey<Employee>>;
}

export default function EmployeeRow({
  employee,
  searchTerm,
  cells,
}: EmployeeRowProps) {
  const navigate = useNavigate();

  return (
    <tr key={employee.employeeId} className="emp-row">
      {cells.has("employeeId") && (
        <td>
          <HighlightedSpan text={employee.employeeId} searchTerm={searchTerm} />
        </td>
      )}
      {cells.has("name") && (
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
      )}
      {cells.has("designation") && (
        <td>
          <HighlightedSpan
            text={employee.designation ?? "N/A"}
            searchTerm={searchTerm}
          />
        </td>
      )}
      {cells.has("department") && (
        <td>
          <HighlightedSpan
            text={employee.department?.department ?? ""}
            searchTerm={searchTerm}
          />
        </td>
      )}
      {cells.has("skills") && <SkillsCell skills={employee.skills} />}
      {cells.has("actions") && (
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
      )}
    </tr>
  );
}
