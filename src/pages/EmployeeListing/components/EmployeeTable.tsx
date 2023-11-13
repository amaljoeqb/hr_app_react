import { Table } from "../../../components";
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
  return (
    <Table
      columns={[
        { flex: 1, key: "employeeId", title: "ID", sortable: true },
        { flex: 3, key: "name", title: "Name", sortable: true },
        { flex: 2, key: "designation", title: "Designation", sortable: true },
        { flex: 2, key: "department", title: "Department", sortable: true },
        { flex: 3, key: "skills", title: "Skills", sortable: false },
        { flex: 1, key: "actions", title: "", sortable: false },
      ]}
      sort={sort}
      onClickColumnTitle={(key) => {
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
      }}
    >
      {employees.map((employee) => (
        <EmployeeRow
          key={employee.employeeId}
          employee={employee}
          searchTerm={searchTerm}
        />
      ))}
    </Table>
  );
}
