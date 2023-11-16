import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./config";
import useLoadData from "./hooks/useLoadData";

const basename = process.env.NODE_ENV === "development" ? "/" : "/hr_app_react";

const router = createBrowserRouter(routes, {
  basename,
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
