import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { EmployeeListing } from "./views/EmployeeListing";
import EmployeeForm from "./views/EmployeeForm";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter(
  [
    {path: "/", element: <EmployeeListing />, errorElement: <ErrorPage />},
    {path: "/employee/:employeeId", element: <EmployeeForm />},
  ]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
