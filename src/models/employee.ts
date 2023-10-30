import { Department } from "./department";
import { Skill } from "./skill";

export interface Employee {
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