import { useState } from "react";
import { ClickAwayListener } from "../../../components";

export interface EmployeeActionMenuProps {
  onDelete: () => void;
  onEdit: () => void;
}

export default function EmployeeActionMenu(props: EmployeeActionMenuProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <ClickAwayListener
      onClickOutside={() => {
        setIsActive(false);
      }}
    >
      <div className={`action-container ${isActive ? "active" : ""}`}>
        <button
          className="action-btn"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span className="material-symbols-outlined"> more_horiz </span>
        </button>
        <div className="action-menu">
          <ul>
            <li>
              <button className="edit-btn">Edit</button>
            </li>
            <li>
              <button className="delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
}
