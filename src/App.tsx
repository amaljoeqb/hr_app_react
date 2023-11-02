import "./css/buttons.css";
import "./css/form.css";
import "./css/normalize.css";
import "./css/popup.css";
import "./css/style.css";
import "./css/table.css";
import "./css/input.css";

import { EmployeeListing } from "./views/EmployeeListing";
import EmployeeForm from "./views/EmployeeForm";

function App() {
  return (
    <div className="App">
      <EmployeeForm />
    </div>
  );
}

export default App;
