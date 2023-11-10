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
import { AppProvider } from "./store/app.context";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeListing />, errorElement: <ErrorPage /> },
  { path: "/employee/:employeeId", element: <EmployeePage /> },
]);

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
