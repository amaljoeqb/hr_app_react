import { useEffect, useState } from "react";
import { useAppContext } from "../store/app.context";
import data from "../data.json";
import { useApi } from "./";

export default function useLoadData() {
  const [loading, setLoading] = useState(true);
  const api = useApi();
  const appContext = useAppContext();

  const loadData = async () => {
    try {
      let employees = await api.getEmployees();
      let skills =
        localStorage.getItem("skills") &&
        JSON.parse(localStorage.getItem("skills") as string);
      let departments =
        localStorage.getItem("departments") &&
        JSON.parse(localStorage.getItem("departments") as string);
      if (skills === null || employees === null || departments === null) {
        skills = data.skills;
        departments = data.departments;
      }
      appContext.dispatch({ type: "SET_EMPLOYEES", payload: employees });
      appContext.dispatch({ type: "SET_SKILLS", payload: skills });
      appContext.dispatch({ type: "SET_DEPARTMENTS", payload: departments });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return loading;
}
