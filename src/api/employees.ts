import { API } from "./";

export const getEmployees = async () => {
  const response = await API.get("/employees");
  return response.data;
};

export const getEmployee = async (id: string) => {
  const response = await API.get(`/employees/${id}`);
  return response.data;
};

export const createEmployee = async (data: any) => {
  const response = await API.post("/employees", data);
  return response.data;
};

export const updateEmployee = async (id: string, data: any) => {
  const response = await API.put(`/employees/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await API.delete(`/employees/${id}`);
  return response.data;
};
