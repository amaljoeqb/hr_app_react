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
import { routes } from "./config";
import EmployeeDeletePopup from "./pages/EmployeeListing/components/EmployeeDeletePopup";
import useLoadData from "./hooks/useLoadData";

const router = createBrowserRouter(routes, {
  basename: "/hr_app_react",
});

function App() {
  const loading = useLoadData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
