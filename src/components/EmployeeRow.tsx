import { Employee } from "../models/employee";
import { highlightSearchTerm, skillsToString } from "../services/helpers";
import { Chip } from "../components/Chip.style";


export default function EmployeeRow({ employee, searchTerm }: { employee: Employee, searchTerm: string }) {
    return (<tr key={employee.employeeId} className="emp-row">
        <td className="check-cell">
            <div className="checkbox-container">
                <input type="checkbox" className="row-check" />
            </div>
        </td>
        <td>{highlightSearchTerm(employee.employeeId.toString(), searchTerm)}</td>
        <td>
            <div className="name-container">
                <button className="name">{highlightSearchTerm(employee.name, searchTerm)}</button>
                <p className="email">{employee.email}</p>
            </div>
        </td>
        <td>{highlightSearchTerm(employee.designation, searchTerm)}</td>
        <td>{highlightSearchTerm(employee.department.department, searchTerm)}</td>
        <td className="skills-cell">
            {employee.skills.map(skill => <Chip key={skill.skillId}>{skill.skill}</Chip>)}
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
                            <button className="delete-btn">
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </td>
    </tr>);
}