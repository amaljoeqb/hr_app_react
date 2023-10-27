import React, { useEffect, useState } from "react";
import { Employee } from "../models/employee";
import { getData, highlightSearchTerm, skillsToString } from "../services/helpers";
import { Chip } from "../components/Chip.style";


export default function EmployeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const data = await getData("data.json");
        setEmployees(data.employees);
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <table className="emp-table">
            <colgroup>
                <col style={{ width: "5%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "40%" }} />
                <col style={{ width: "5%" }} />
            </colgroup>
            <thead>
                <tr className="header-row">
                    <th className="check-cell">
                        <div className="checkbox-container">
                            <input type="checkbox" className="all-check" />
                        </div>
                    </th>
                    <th>
                        <div className="header-container">
                            <h3 className="column-title" data-key="employeeId">
                                <button>ID</button>
                                <span className="sort-icon">
                                    <span className="material-symbols-outlined up">
                                        keyboard_arrow_up
                                    </span>
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </th>

                    <th>
                        <div className="header-container">
                            <h3 className="column-title" data-key="name">
                                <button>Name</button>
                                <span className="sort-icon">
                                    <span className="material-symbols-outlined up">
                                        keyboard_arrow_up
                                    </span>
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </th>

                    <th>
                        <div className="header-container">
                            <h3 className="column-title" data-key="designation">
                                <button>Designation</button>
                                <span className="sort-icon">
                                    <span className="material-symbols-outlined up">
                                        keyboard_arrow_up
                                    </span>
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </th>

                    <th>
                        <div className="header-container">
                            <h3 className="column-title" data-key="department">
                                <button>Department</button>
                                <span className="sort-icon">
                                    <span className="material-symbols-outlined up">
                                        keyboard_arrow_up
                                    </span>
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </th>

                    <th>
                        <div className="header-container">
                            <h3 className="column-title no-click" data-key="skills">
                                Skills
                            </h3>
                        </div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.employeeId} className="emp-row">
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
                            {employee.skills.map((skill) => (
                                <Chip>{skill.skill}</Chip>
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
                                            <button className="delete-btn">
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
