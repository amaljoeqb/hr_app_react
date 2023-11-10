import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EmployeeListing } from "./pages/EmployeeListing/EmployeeListing";
import EmployeeForm from "./pages/EmployeeDetail/components/EmployeeForm";
import ErrorPage from "./pages/Error/ErrorScreen";
import EmployeePage from "./pages/EmployeeDetail/EmployeeDetail";
import { AppProvider, useAppContext } from "./store/app.context";
import { getData } from "./services/helpers";
import { useState, useEffect } from "react";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeListing />, errorElement: <ErrorPage /> },
  { path: "/employee/:employeeId", element: <EmployeePage /> },
]);

function App() {
  const [loading, setLoading] = useState(true);
  const appContext = useAppContext();

  const loadData = async () => {
    const data = await getData("data.json");
    appContext.dispatch({ type: "SET_EMPLOYEES", payload: data.employees });
    appContext.dispatch({ type: "SET_SKILLS", payload: data.skills });
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
