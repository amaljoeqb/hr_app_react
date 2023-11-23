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
import { useAppContext } from "./store/app.context";
import Toast from "./components/ui/Toast/Toast";
import ToastContainer from "./components/ui/Toast/ToastContainer";
import { Loader } from "./components";
import { Footer, Header } from "./layout";

const basename = "/hr_app_react";

const router = createBrowserRouter(routes, {
  basename,
});

function App() {
  const loading = useLoadData();
  const { toasts, closeToast } = useAppContext();

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </>
      )}
      <ToastContainer toasts={toasts} onCloseToast={closeToast} />
    </div>
  );
}

export default App;
