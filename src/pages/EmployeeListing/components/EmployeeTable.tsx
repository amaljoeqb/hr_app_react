import { useEffect, useState } from "react";
import { Table } from "../../../components";
import { Employee } from "../../../models";
import EmployeeRow from "./EmployeeRow";
import { columnIds, columns as tableColumns } from "../../../config";

export interface EmployeeTableProps {
  employees: Employee[];
  prevEmployees: Map<string, Partial<Employee>>;
  searchTerm: string;
  sort: {
    key: keyof Employee;
    order: "asc" | "desc";
  };
  onChangeSort: (sort: { key: keyof Employee; order: "asc" | "desc" }) => void;
}

export default function EmployeeTable({
  employees,
  prevEmployees,
  searchTerm,
  sort,
  onChangeSort,
}: EmployeeTableProps) {
  const [columns, setColumns] = useState(columnIds.large);

  // remove skills column on mobile, resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (width < 320) {
        setColumns(columnIds.extraSmall);
      } else if (width < 600) {
        setColumns(columnIds.small);
      } else if (width < 800) {
        setColumns(columnIds.medium);
      } else {
        setColumns(columnIds.large);
      }
    });
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Table<Employee>
      columns={tableColumns.filter((column) => columns.has(column.key))}
      sort={sort}
      onClickSort={(key) => {
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
          prevEmployee={prevEmployees.get(employee.employeeId)}
          searchTerm={searchTerm}
          cells={columns}
        />
      ))}
    </Table>
  );
}
