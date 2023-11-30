import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 64px;
  min-height: 620px;

  .emp-table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    position: relative;
  }

  .emp-table th {
    border: none;
    border-bottom: 1px solid var(--border-color);
  }

  .emp-table td {
    border: none;
    border-bottom: 1px solid var(--border-color);
    padding: 6px 8px;
    max-width: 300px;
    text-overflow: ellipsis;
    border-radius: 8px;
    white-space: nowrap;
  }

  .emp-table td:not(.overflow) {
    overflow: hidden;
  }

  .header-container {
    display: flex;
    align-items: flex-start;
    justify-content: stretch;
  }

  .checkbox-container {
    align-items: flex-start;
    display: flex;
    padding: 8px;
  }

  .column-title {
    font-weight: 500;
    font-size: 14px;
    text-align: flex-start;
    margin: 4px 0;
    display: flex;
    align-items: center;
    padding: 8px 8px;
    border-radius: 8px;
    user-select: none;
  }

  .column-title button,
  .column-title {
    color: var(--grey-title-color);
    transition: all 0.2s ease-in-out;
  }

  .column-title:not(.no-click) {
    cursor: pointer;
  }

  .sort-icon {
    display: flex;
    flex-direction: column;
    transform: scale(0.8, 0.8);
  }

  .sort-icon .up,
  .sort-icon .down {
    padding: 0;
    margin-left: 0.5rem;
    line-height: 0.45;
    font-size: 14px;
    color: var(--grey-title-color);
    transition: all 0.2s ease-in-out;
    user-select: none;
  }

  .column-title:not(.no-click):hover {
    background-color: var(--grey-bg-color);
  }

  .column-title.asc .down {
    color: var(--primary-color);
    font-weight: 700;
  }

  .column-title.desc .up {
    color: var(--primary-color);
    font-weight: 700;
  }

  .column-title.asc a,
  .column-title.desc a {
    color: var(--primary-color);
  }

  .name-container {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  .name-container .name {
    font-weight: 600;
    color: var(--text-color);
    display: flex;
    align-items: center;
  }

  .name-container .name span.material-symbols-outlined {
    font-size: 16px;
    margin-left: 4px;
  }

  .name-container .email {
    font-size: 12px;
    color: var(--grey-title-color);
    margin: 0;
  }

  .filter {
    font-weight: 400;
    font-size: 16px;
    display: none;
    user-select: none;
  }

  .filter-form-container {
    position: relative;
    height: 100%;
    align-self: flex-end;
  }

  .filter-form button {
    margin-right: 8px;
    cursor: pointer;
  }

  .filter-form input {
    font-size: 18px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    outline-color: var(--primary-color);
  }

  .highlight {
    background-color: rgba(80, 151, 255, 0.4);
  }

  table .name:hover {
    color: var(--text-overlay);
    cursor: pointer;
  }

  .action-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: relative;
    margin: 0px 8px;
  }

  .action-btn {
    color: var(--text-color);
    padding: 4px;
    cursor: pointer;
    border-radius: 8px;
  }

  .action-btn span {
    font-size: 16px;
  }

  .action-btn:hover {
    background-color: var(--grey-bg-color);
  }

  .action-menu {
    position: absolute;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    display: none;
    border-radius: 6px;
    align-self: flex-end;
    top: 100%;
    box-shadow: var(--shadow);
    z-index: 60;
    overflow: hidden;
    padding: 4px;
  }

  .action-container.active .action-menu {
    display: block;
  }

  .action-menu ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .action-menu li button {
    padding: 8px;
    display: flex;
    align-items: center;
    font-weight: 400;
    min-width: 120px;
    border-radius: 4px;
  }

  .action-menu li button:hover {
    background-color: var(--grey-bg-color);
  }

  .check-cell {
    display: none;
  }

  .skills-cell {
    font-size: 16px;
    max-lines: 2;
    text-wrap: wrap;
  }

  .skills-cell .skills-tooltip {
    position: absolute;
    background-color: white;
    border: 1px solid var(--border-color);
    font-size: 12px;
    border-radius: 4px;
    text-wrap: wrap;
    z-index: 60;
    margin-right: 120px;
    padding: 8px;
    margin-left: -4px;
    box-shadow: var(--light-shadow);
    display: none;
  }

  .skills-tooltip.active {
    display: block;
  }

  .no-data {
    text-align: center;
  }
`;
