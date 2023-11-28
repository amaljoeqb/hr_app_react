import { Popup } from "../../../components";
import { useApi } from "../../../hooks";

export interface EmployeeDeletePopupProps {
  employeeId: string;
  onClose: () => void;
}

export default function EmployeeDeletePopup({
  employeeId,
  onClose,
}: EmployeeDeletePopupProps) {
  const api = useApi();

  function onDelete() {
    api.deleteEmployee(employeeId);
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
