import { useAppContext } from "../store/app.context";
import * as API from "../api";
import data from "../data.json";
import { Employee } from "../models";

export default function useApi() {
  const appContext = useAppContext();

  async function getEmployees(): Promise<Employee[]> {
    try {
      return await API.getEmployees();
    } catch (error: any) {
      appContext.showToast(error?.message);
      return [];
    }
  }

  async function testApi() {
    // await API.deleteEmployee(data.employees[5].employeeId);
    // await API.createEmployee(data.employees[5]);
    appContext.showToast("API is working!");
  }

  return {
    getEmployees,
    testApi,
  };
}
