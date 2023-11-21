import { Employee } from "../../models";
import { API } from "..";
import {
  getEmployeeFromEmployeeGlobal,
  getEmployeeRequestFromEmployee,
} from "../services/converters";
import { EmployeeResponse } from "../models";

export const getEmployees = async () => {
  const response: EmployeeResponse = await API.get("/employee1");
  const employees: Employee[] = response.data.employees.map((employee) =>
    getEmployeeFromEmployeeGlobal(employee)
  );
  return employees;
};

export const getEmployee = async (id: string) => {
  const response = await API.get(`/employee/${id}`);
  return response.data;
};

export const createEmployee = async (data: Employee) => {
  const body = getEmployeeRequestFromEmployee(data);
  const response = await API.post("/employee", body);
  return response.data;
};

export const updateEmployee = async (id: string, data: any) => {
  const response = await API.put(`/employee/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await API.delete(`/employee/${id}`);
  return response.data;
};
