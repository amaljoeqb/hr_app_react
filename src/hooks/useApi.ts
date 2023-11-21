import { useAppContext } from "../store/app.context";
import * as API from "../api";
import data from "../data.json";
import { Employee } from "../models";

export default function useApi() {
  const appContext = useAppContext();

  async function getEmployees() {
    try {
      const employees = await API.getEmployees();
      appContext.dispatch({ type: "SET_EMPLOYEES", payload: employees });
      return employees;
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function getEmployee(id: string) {
    try {
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
      appContext.dispatch({ type: "ADD_EMPLOYEE", payload: employee });
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function updateEmployee(employee: Employee) {
    try {
      await API.updateEmployee(employee);
      appContext.dispatch({ type: "UPDATE_EMPLOYEE", payload: employee });
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
      appContext.dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function getSkills() {
    try {
      const skills = await API.getSkills();
      appContext.dispatch({ type: "SET_SKILLS", payload: skills });
      return skills;
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
    }
  }

  async function getDepartments() {
    try {
      const departments = await API.getDepartments();
      appContext.dispatch({ type: "SET_DEPARTMENTS", payload: departments });
    } catch (error: any) {
      appContext.showToast({
        message: error.message,
        isError: true,
      });
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
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getSkills,
    getDepartments,
    getRoles,
  };
}
