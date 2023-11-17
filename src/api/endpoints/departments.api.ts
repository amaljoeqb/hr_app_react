import { API } from "..";

export const getDepartments = async () => {
  const response = await API.get("/departments");
  return response.data;
};
