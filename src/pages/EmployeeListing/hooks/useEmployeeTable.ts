import { useCallback, useState } from "react";
import { useTable } from "../../../hooks";
import { Employee } from "../../../models";

export default function useEmployeeTable(employees: Employee[]) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const searchFunction = searchEmployees;
  const sortFunction = sortEmployees;
  const filterFunction = useCallback(
    (data: Employee[]) => filterEmployees(data, selectedSkills),
    [selectedSkills]
  );

  const employeeTable = useTable<Employee>({
    data: employees,
    searchFunction,
    sortFunction,
    filterFunction,
    id: "employeeId",
  });

  return {
    ...employeeTable,
    selectedSkills,
    setSelectedSkills,
  };
}

/**
 * Function to filter employees array based on selected skills
 * @param {Employee[]} employees - Array of employees
 * @param {number[]} selectedSkills - Array of selected skill ids
 */
function filterEmployees(employees: Employee[], selectedSkills: string[]) {
  if (selectedSkills.length > 0) {
    return employees.filter((item) => {
      return item.skills.find((skill) => {
        return selectedSkills.includes(skill.skillId);
      });
    });
  }
  return employees;
}

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

  const numericalSort = (a: Employee, b: Employee, key: "salary") => {
    if (!a[key] && !b[key]) {
      return 0;
    } else if (!a[key]) {
      return -1;
    } else if (!b[key]) {
      return 1;
    }

    if (a[key]! < b[key]!) {
      return asc ? -1 : 1;
    } else if (a[key]! > b[key]!) {
      return asc ? 1 : -1;
    }
    return 0;
  };

  const alphaNumericSort = (
    a: Employee,
    b: Employee,
    key: "employeeId" | "name" | "designation" | "email"
  ) => {
    if (!a[key] && !b[key]) {
      return 0;
    } else if (!a[key]) {
      return -1;
    } else if (!b[key]) {
      return 1;
    }
    const aString = a[key]!.toString().toLowerCase();
    const bString = b[key]!.toString().toLowerCase();
    if (aString < bString) {
      return asc ? -1 : 1;
    }
    if (aString > bString) {
      return asc ? 1 : -1;
    }
    return 0;
  };

  const departmentSort = (a: Employee, b: Employee) => {
    const aString = a.department?.department.toString().toLowerCase() ?? "";
    const bString = b.department?.department.toString().toLowerCase() ?? "";
    if (aString < bString) {
      return asc ? -1 : 1;
    }
    if (aString > bString) {
      return asc ? 1 : -1;
    }
    return 0;
  };

  switch (key) {
    case "salary":
      return employees.sort((a: Employee, b: Employee) =>
        numericalSort(a, b, key)
      );
    case "employeeId":
    case "name":
    case "email":
    case "designation":
      return employees.sort((a: Employee, b: Employee) =>
        alphaNumericSort(a, b, key)
      );
    case "department":
      return employees.sort(departmentSort);
    default:
      return employees;
  }
}
