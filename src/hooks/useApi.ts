import { useAppContext } from "../store/app.context";
import * as API from "../api";
import data from "../data.json";

export default function useApi() {
  const appContext = useAppContext();

  async function getEmployees() {
    try {
      return API.getEmployees();
    } catch (error) {
      console.log("error", error);
    }
  }

  async function testApi() {
    await API.createEmployee(data.employees[5]);
  }

  return {
    getEmployees,
    testApi,
  };
}
