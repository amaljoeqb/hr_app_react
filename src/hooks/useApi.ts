import { useAppContext } from "../store/app.context";
import * as API from "../api";

export default function useApi() {
  const appContext = useAppContext();

  function getEmployees() {
    API.getEmployees().then((data) => {});
  }

  function testApi() {
    API.getEmployee("1").then((data) => {
      console.log(data);
    });
  }

  return {
    getEmployees,
    testApi,
  };
}
