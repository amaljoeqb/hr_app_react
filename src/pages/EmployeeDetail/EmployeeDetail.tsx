import EmployeeForm from "./components/EmployeeForm";

export default function EmployeePage() {
  return (
    <EmployeeForm
      employee={{
        employeeId: 1,
        name: "John Doe",
        email: "",
        joiningDate: "12-12-2020",
        dateOfBirth: "12-12-2020",
        salary: 10000,
        designation: "Software Engineer",
        department: {
          departmentId: 1,
          department: "Engineering",
        },
        skills: [
          {
            skillId: 1,
            skill: "React",
          },
          {
            skillId: 2,
            skill: "TypeScript",
          },
        ],
      }}
    />
  );
}
