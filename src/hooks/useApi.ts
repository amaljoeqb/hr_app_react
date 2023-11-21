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
      appContext.showToast({
        message: error.message,
        isError: true,
      });
      return [];
    }
  }

  async function testApi() {
    // await API.deleteEmployee(data.employees[5].employeeId);
    // await API.createEmployee(data.employees[5]);
  }

  async function getEmployee(id: string): Promise<Employee | null> {
    try {
      return await API.getEmployee(id);
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
      return null;
    }
  }

  async function createEmployee(employee: Employee) {
    try {
      await API.createEmployee(employee);
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function updateEmployee(employee: Employee) {
    try {
      await API.updateEmployee(employee.employeeId, employee);
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function deleteEmployee(id: string) {
    try {
      await API.deleteEmployee(id);
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function getSkills() {
    try {
      return await API.getSkills();
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
      return [];
    }
  }

  async function getDepartments() {
    try {
      return await API.getDepartments();
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
      return [];
    }
  }

  async function getRoles() {
    try {
      return await API.getRoles();
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
      return [];
    }
  }

  return {
    getEmployees,
    testApi,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getSkills,
    getDepartments,
    getRoles,
  };
}
