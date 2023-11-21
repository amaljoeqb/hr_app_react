import { Employee, Skill, Department } from "../../models";
import {
  EmployeeGlobal,
  SkillGlobal,
  DepartmentGlobal,
  EmployeeRequest,
} from "../models";

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
    skills: employeeGlobal.skills.map((skill) => ({
      skillId: skill.id.toString(),
      skill: skill.skill,
    })),
    salary: employeeGlobal.salary
      ? parseInt(employeeGlobal?.salary)
      : undefined,
    joiningDate: employeeGlobal.dateOfJoining,
    dateOfBirth: employeeGlobal.dob,
  };
}

export function getEmployeeRequestFromEmployee(
  employee: Employee
): EmployeeRequest {
  return {
    id: parseInt(employee.employeeId),
    firstName: employee.name.split(" ")[0],
    lastName: employee.name.split(" ")[1],
    email: employee.email,
    designation: employee.designation,
    department: employee.department && {
      id: parseInt(employee.department?.departmentId),
    },
    skills: employee.skills.map((skill) => skill.skillId),
    salary: employee.salary?.toString(),
    dateOfJoining: employee.joiningDate,
    dob: employee.dateOfBirth,
  };
}

export function getSkillFromSkillGlobal(skillGlobal: SkillGlobal): Skill {
  return {
    skillId: skillGlobal.id.toString(),
    skill: skillGlobal.skill,
  };
}

export function getDepartmentFromDepartmentGlobal(
  departmentGlobal: DepartmentGlobal
): Department {
  return {
    departmentId: departmentGlobal.id.toString(),
    department: departmentGlobal.department,
  };
}
