import { Popup } from "../../../components";

export interface EmployeeDeletePopupProps {
  employeeId: number;
  onClose: () => void;
}

export default function EmployeeDeletePopup({
  employeeId,
  onClose,
}: EmployeeDeletePopupProps) {
  return (
    <Popup
      content="Are you sure you want to delete this employee?"
      title="Delete Employee"
      actions={
        <>
          <button className="hover-btn primary confirm">Yes</button>
          <button className="hover-btn cancel">No</button>
        </>
      }
      onClose={onClose}
    />
  );
}
