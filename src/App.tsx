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

const router = createBrowserRouter(
  [
    {path: "/", element: <EmployeeListing />},
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
