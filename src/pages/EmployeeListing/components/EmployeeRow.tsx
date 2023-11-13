import { Employee } from "../../../models";
import { skillsToString } from "../../../services/helpers";
import { Chip } from "../../../components";
import HighlightedSpan from "../../../components/ui/HighlightedSpan";
import { Link } from "react-router-dom";
import EmployeeActionMenu from "./EmployeeActionMenu";

export interface EmployeeRowProps {
  employee: Employee;
  searchTerm: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickView: () => void;
}

export default function EmployeeRow({
  employee,
  searchTerm,
  onClickEdit,
  onClickDelete,
  onClickView,
}: EmployeeRowProps) {
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
          <div className="name" onClick={onClickView}>
            <HighlightedSpan text={employee.name} searchTerm={searchTerm} />
          </div>
          <p className="email">{employee.email}</p>
        </div>
      </td>
      <td>
        <HighlightedSpan text={employee.designation} searchTerm={searchTerm} />
      </td>
      <td>
        <HighlightedSpan
          text={employee.department.department}
          searchTerm={searchTerm}
        />
      </td>
      <td className="skills-cell">
        {employee.skills.map((skill) => (
          <Chip key={skill.skillId}>{skill.skill}</Chip>
        ))}
        <div className="skills-tooltip">{skillsToString(employee.skills)}</div>
      </td>
      <td className="overflow">
        <EmployeeActionMenu onDelete={onClickDelete} onEdit={onClickEdit} />
      </td>
    </tr>
  );
}
