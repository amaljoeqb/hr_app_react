import { Employee } from "../../../models";
import EmployeeRow from "./EmployeeRow";

export interface EmployeeTableProps {
  employees: Employee[];
  searchTerm: string;
  sort: {
    key: string;
    order: "asc" | "desc";
  };
  onChangeSort: (sort: { key: string; order: "asc" | "desc" }) => void;
}

export default function EmployeeTable({
  employees,
  searchTerm,
  sort,
  onChangeSort,
}: EmployeeTableProps) {
  function getTitleClassName(key: string) {
    if (sort.key === key) {
      return `column-title ${sort.order}`;
    }
    return "column-title";
  }

  function onClickTitle(key: string) {
    if (sort.key === key) {
      onChangeSort({
        key,
        order: sort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onChangeSort({
        key,
        order: "asc",
      });
    }
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
          <th>
            <div className="header-container">
              <h3
                className={getTitleClassName("employeeId")}
                data-key="employeeId"
                onClick={() => onClickTitle("employeeId")}
              >
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
              <h3
                className={getTitleClassName("name")}
                data-key="name"
                onClick={() => onClickTitle("name")}
              >
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
              <h3
                className={getTitleClassName("designation")}
                data-key="designation"
                onClick={() => onClickTitle("designation")}
              >
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
              <h3
                className={getTitleClassName("department")}
                data-key="department"
                onClick={() => onClickTitle("department")}
              >
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
