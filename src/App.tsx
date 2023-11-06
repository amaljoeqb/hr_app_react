import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EmployeeListing } from "./views/EmployeeListing";
import EmployeeForm from "./components/form/EmployeeForm";
import ErrorPage from "./views/ErrorPage";
import EmployeePage from "./views/EmployeePage";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeListing />, errorElement: <ErrorPage /> },
  { path: "/employee/:employeeId", element: <EmployeePage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
