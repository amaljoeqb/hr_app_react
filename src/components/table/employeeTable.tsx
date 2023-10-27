import React, { useEffect, useState } from "react";
import { Employee } from "../../models/employee";
import { getData } from "../../services/helpers";

export default function employeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData("../assets/json/employees").then((data) => {
            setEmployees(data.employees);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.employeeId}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}