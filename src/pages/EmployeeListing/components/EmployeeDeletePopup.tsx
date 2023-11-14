import { Popup } from "../../../components";
import { useAppContext } from "../../../store/app.context";

export interface EmployeeDeletePopupProps {
  employeeId: number;
  onClose: () => void;
}

export default function EmployeeDeletePopup({
  employeeId,
  onClose,
}: EmployeeDeletePopupProps) {
  const appContext = useAppContext();

  function onDelete() {
    console.log("delete employee", employeeId);
    appContext.dispatch({
      type: "DELETE_EMPLOYEE",
      payload: employeeId,
    });
    onClose();
  }

  return (
    <Popup
      content="Are you sure you want to delete this employee?"
      title="Delete Employee"
      actions={
        <>
          <button className="hover-btn primary confirm" onClick={onDelete}>
            Yes
          </button>
          <button className="hover-btn cancel" onClick={onClose}>
            No
          </button>
        </>
      }
      onClose={onClose}
    />
  );
}
