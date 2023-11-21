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
  employee: Employee,
  employeeGlobal: EmployeeGlobal
): EmployeeRequest {
  // use employee global data if value is not present in employee
  const nameEmployeeGlobal = `${employeeGlobal.firstName} ${employeeGlobal.lastName}`;
  let firstName = employeeGlobal.firstName;
  let lastName = employeeGlobal.lastName;
  if (nameEmployeeGlobal !== employee.name) {
    firstName = employee.name.split(" ")[0];
    lastName = employee.name.substring(firstName.length + 1);
  }
  return {
    id: parseInt(employee.employeeId),
    firstName: firstName,
    lastName: lastName,
    email: employee.email,
    designation: employee.designation,
    departmentId: employee.department?.departmentId
      ? parseInt(employee.department?.departmentId)
      : employeeGlobal.department?.id,
    skills: employee.skills?.map((skill) => skill.skillId).join(","),
    salary: employee.salary?.toString(),
    dateOfJoining: employee.joiningDate,
    dob: employee.dateOfBirth,
    roleId: employeeGlobal.role?.id,
    address: employeeGlobal.address,
    //phone: employeeGlobal.phone,
    isActive: employeeGlobal.isActive,
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
