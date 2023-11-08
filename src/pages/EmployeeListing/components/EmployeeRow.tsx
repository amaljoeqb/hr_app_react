import { Employee } from "../../../models";
import { skillsToString } from "../../../services/helpers";
import { Chip } from "../../../components/ui/Chip.style";
import HighlightedSpan from "../../../components/ui/HighlightedSpan";
import { Link } from "react-router-dom";

export default function EmployeeRow({
  employee,
  searchTerm,
}: {
  employee: Employee;
  searchTerm: string;
}) {
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
          <Link to={`employee/${employee.employeeId}`} className="name">
            <HighlightedSpan text={employee.name} searchTerm={searchTerm} />
          </Link>
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
        <div className="action-container">
          <button className="action-btn">
            <span className="material-symbols-outlined"> more_horiz </span>
          </button>
          <div className="action-menu">
            <ul>
              <li>
                <button className="edit-btn"> Edit </button>
              </li>
              <li>
                <button className="delete-btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
}
