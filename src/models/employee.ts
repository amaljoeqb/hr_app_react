/*
{
          "employeeId": 1,
          "name": "Alice Smith",
          "email": "alicesmith@mycompany.com",
          "designation": "Software Engineer",
          "department": {
            "departmentId": 1,
            "department": "Development"
          },
          "skills": [
            {
              "skill": "JavaScript",
              "skillId": 1
            },
            {
              "skill": "React",
              "skillId": 2
            }
          ],
          "salary": 80000,
          "joiningDate": "2012-11-20",
          "dateOfBirth": "1970-11-01"
        },
        */

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