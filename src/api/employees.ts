import { API } from "./";

export const getEmployees = async () => {
  const response = await API.get("/employee");
  return response.data;
};

export const getEmployee = async (id: string) => {
  const response = await API.get(`/employee/${id}`);
  return response.data;
};

export const createEmployee = async (data: any) => {
  const response = await API.post("/employee", data);
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
