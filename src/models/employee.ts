import { Department, Skill } from "./";

export default interface Employee {
    employeeId: number;
    name: string;
    email: string;
    designation: string;
    department: Department;
    skills: Skill[];
    salary: number;
    joiningDate: string;
    dateOfBirth: string;
}