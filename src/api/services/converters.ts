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
    department: {
      departmentId: employeeGlobal.department.id.toString(),
      department: employeeGlobal.department.department,
    },
    skills: employeeGlobal.skills.split(",").map((skill) => {
      return { skillId: skill, skill: skill };
    }),
    salary: parseInt(employeeGlobal.salary),
    joiningDate: employeeGlobal.dateOfJoining,
    dateOfBirth: employeeGlobal.dob,
  };
}
