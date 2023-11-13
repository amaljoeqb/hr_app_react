import { useTable } from "../../../hooks";
import { Employee } from "../../../models";

export default function useEmployeeTable(employees: Employee[]) {
  /**
   * Fuction to search employees array based on a search term
   * @param {array} employees - Array of employees
   * @param {string} searchTerm - Term to search for
   */
  function searchEmployees(employees: Employee[], searchTerm: string) {
    try {
      const lowerCaseValue = searchTerm.toLowerCase();
      return Object.values(employees).filter((employee) =>
        Object.values(employee).some(
          (value) =>
            (typeof value === "string" || typeof value === "number") &&
            value.toString().toLowerCase().includes(lowerCaseValue)
        )
      );
    } catch (e) {
      return [];
    }
  }

  /**
   * Function to sort employees array based on an attribute
   * @param {Employee[]} employees - Array of employees
   * @param {keyof Employee} key - Name of the attribute to sort
   * @param {"asc" | "desc"} order - Order to sort the array in
   */
  function sortEmployees(
    employees: Employee[],
    key: keyof Employee,
    order: "asc" | "desc"
  ): Employee[] {
    const asc = order === "asc";
    const numericalSort = (a: Employee, b: Employee) => {
      if (a[key] < b[key]) {
        return asc ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return asc ? 1 : -1;
      }
      return 0;
    };

    const alphaNumericSort = (a: Employee, b: Employee) => {
      const aString = a[key].toString().toLowerCase();
      const bString = b[key].toString().toLowerCase();
      if (aString < bString) {
        return asc ? -1 : 1;
      }
      if (aString > bString) {
        return asc ? 1 : -1;
      }
      return 0;
    };

    const departmentSort = (a: Employee, b: Employee) => {
      const aString = a.department.department.toString().toLowerCase();
      const bString = b.department.department.toString().toLowerCase();
      if (aString < bString) {
        return asc ? -1 : 1;
      }
      if (aString > bString) {
        return asc ? 1 : -1;
      }
      return 0;
    };

    switch (key) {
      case "employeeId":
      case "salary":
        return employees.sort(numericalSort);
      case "name":
      case "email":
      case "designation":
        return employees.sort(alphaNumericSort);
      case "department":
        return employees.sort(departmentSort);
      default:
        return employees;
    }
  }

  const employeeTable = useTable<Employee>({
    data: employees,
    searchFunction: searchEmployees,
    sortFunction: sortEmployees,
    id: "employeeId",
  });

  return employeeTable;
}
