import { useEffect, useState } from "react";
import { Employee } from "../models/employee";
import { searchEmployees } from "../services/helpers";
import EmployeeRow from "../components/EmployeeRow";

export default function EmployeeTable({
  employees,
  searchTerm,
  skillsFilter,
  pageNumber,
}: {
  employees: Employee[];
  searchTerm: string;
  skillsFilter: string[];
  pageNumber: number;
}) {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    let filtered = searchEmployees(employees, searchTerm);
    filtered = filtered.slice(pageNumber * 10 - 10, pageNumber * 10);
    setFilteredEmployees(filtered);
  }, [searchTerm, skillsFilter, employees]);

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
        {filteredEmployees.map((employee) => (
          <EmployeeRow
            key={employee.employeeId}
            employee={employee}
            searchTerm={searchTerm}
          />
        ))}
      </tbody>
    </table>
  );
}
