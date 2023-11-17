import { useAppContext } from "../store/app.context";
import * as API from "../api";

export default function useApi() {
  const appContext = useAppContext();

  async function getEmployees() {
    try {
      return API.getEmployees();
    } catch (error) {
      console.log("error", error);
    }
  }

  function testApi() {
    API.getEmployees().then((data) => {
      console.log(data);
    });
  }

  return {
    getEmployees,
    testApi,
  };
}
