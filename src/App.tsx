import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppContext } from "./store/app.context";
import { useState, useEffect } from "react";
import data from "./data.json";
import { routes } from "./config";

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState(true);
  const appContext = useAppContext();

  const loadData = async () => {
    let employees =
      localStorage.getItem("employees") &&
      JSON.parse(localStorage.getItem("employees") as string);
    let skills =
      localStorage.getItem("skills") &&
      JSON.parse(localStorage.getItem("skills") as string);
    let departments =
      localStorage.getItem("departments") &&
      JSON.parse(localStorage.getItem("departments") as string);
    if (skills === null || employees === null || departments === null) {
      employees = data.employees;
      skills = data.skills;
      departments = data.departments;
    }
    appContext.dispatch({ type: "SET_EMPLOYEES", payload: employees });
    appContext.dispatch({ type: "SET_SKILLS", payload: skills });
    appContext.dispatch({ type: "SET_DEPARTMENTS", payload: departments });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading1...</div>;
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
