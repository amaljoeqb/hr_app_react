import { Employee } from "../../models";
import { EmployeeGlobal } from "../models";

export function getEmployeeFromEmployeeGlobal(
  employeeGlobal: EmployeeGlobal
): Employee {
  return {
    employeeId: employeeGlobal.id.toString(),
    name: `${employeeGlobal.firstName} ${employeeGlobal.lastName}`,
    email: employeeGlobal.email,
    designation: employeeGlobal.designation,
    department: employeeGlobal.department
      ? {
          departmentId: employeeGlobal.department?.id.toString(),
          department: employeeGlobal.department?.department,
        }
      : undefined,
    skills:
      employeeGlobal.skills?.split(",").map((skill) => {
        return { skillId: skill, skill: skill };
      }) ?? [],
    salary: employeeGlobal.salary
      ? parseInt(employeeGlobal?.salary)
      : undefined,
    joiningDate: employeeGlobal.dateOfJoining,
    dateOfBirth: employeeGlobal.dob,
  };
}

export function getEmployeeGlobalFromEmployee(
  employee: Employee
): EmployeeGlobal {
  return {
    id: parseInt(employee.employeeId),
    firstName: employee.name.split(" ")[0],
    lastName: employee.name.split(" ")[1],
    email: employee.email,
    designation: employee.designation,
    department: {
      id: parseInt(employee.department?.departmentId ?? "0"),
      department: employee.department?.department ?? "",
    },
    skills: employee.skills.map((skill) => skill.skillId).join(","),
    salary: employee.salary?.toString(),
    dateOfJoining: employee.joiningDate,
    dob: employee.dateOfBirth,
  };
}
