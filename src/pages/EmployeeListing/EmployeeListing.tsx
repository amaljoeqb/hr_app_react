import { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";
import { HoverButton } from "../../components";
import SkillsFilter from "./components/SkillsFilter";
import { Employee } from "../../models";
import { searchEmployees, sortEmployees } from "../../services/helpers";
import PaginationControl from "./components/PaginationControl";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "../../store/app.context";
import { useNavigate } from "react-router-dom";
import EmployeeDeletePopup from "./components/EmployeeDeletePopup";
import useTable from "../../hooks/useTable";
import useEmployeeTable from "./hooks/useEmployeeTable";

export function EmployeeListing() {
  const appContext = useAppContext();
  const { employees, skills } = appContext.state;
  const navigate = useNavigate();
  const table = useEmployeeTable(employees);
  const {
    displayData,
    selectedSkills,
    setSelectedSkills,
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    page,
    setPage,
  } = table;

  return (
    <>
      <main className="card">
        <h1>Employees</h1>
        <div className="emp-listing-header">
          <div className="start-section">
            <SearchInput
              onChange={(text) => {
                setSearchTerm(text);
              }}
            />
          </div>
          <div className="next-section">
            <div className="filters-section">
              {/* <SkillsFilter
                skills={skills}
                employees={employees}
                selectedSkills={selectedSkills}
                onChange={(skills) => {
                  setSelectedSkills(skills);
                  setPage(1);
                }}
              /> */}
            </div>
            <HoverButton
              onClick={() => {
                navigate("/employee");
              }}
            >
              <span className="material-symbols-outlined"> add_circle </span>
              <p>Create</p>
            </HoverButton>
          </div>
        </div>
        <div className="table-container">
          <EmployeeTable
            employees={displayData.slice(page * 10 - 10, page * 10)}
            searchTerm={searchTerm}
            sort={sort}
            onChangeSort={(sort) => {
              setSort(sort);
            }}
          />
        </div>
        <PaginationControl
          current={page}
          total={Math.ceil(displayData.length / 10)}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </main>
      {/* <EmployeeDeletePopup employeeId={1} onClose={() => {}} /> */}
    </>
  );
}
