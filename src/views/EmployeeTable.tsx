import React, { useEffect, useState } from "react";
import { Employee } from "../models/employee";
import { getData, highlightSearchTerm, skillsToString } from "../services/helpers";
import { Chip } from "../components/Chip.style";
import EmployeeRow from "../components/EmployeeRow";

export default function EmployeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        console.log("getEmployees");
        const data = await getData("data.json");
        setEmployees(data.employees);
        setLoading(false);
    }

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
                                <button >ID</button>
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
                                <button >Name</button>
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
                                <button >Designation</button>
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
                                <button >Department</button>
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
                {

                    employees.map((employee) => (
                        <EmployeeRow key={employee.employeeId} employee={employee} searchTerm={searchTerm} />
                    ))}
            </tbody>
        </table>
    );
}