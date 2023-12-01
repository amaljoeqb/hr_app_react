import { Employee } from "../../../models";
import HighlightSpan from "../../../components/ui/HighlightedSpan/HighlightedSpan";
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
          <HighlightSpan text={employee.employeeId} searchTerm={searchTerm} />
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
              <HighlightSpan text={employee.name} searchTerm={searchTerm} />
              <span className="material-symbols-outlined"> visibility </span>
            </div>
            <p className="email">{employee.email}</p>
          </div>
        </td>
      )}
      {cells.has("designation") && (
        <td>
          <HighlightSpan
            text={employee.designation ?? "N/A"}
            searchTerm={searchTerm}
          />
        </td>
      )}
      {cells.has("department") && (
        <td>
          <HighlightSpan
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
