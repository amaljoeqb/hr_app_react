import EmployeeTable from "./components/EmployeeTable";
import { HoverButton } from "../../components";
import PaginationControl from "./components/PaginationControl";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "../../store/app.context";
import { useNavigate } from "react-router-dom";
import useEmployeeTable from "./hooks/useEmployeeTable";
import SkillsFilter from "./components/SkillsFilter";
import EmployeeDeletePopup from "./components/EmployeeDeletePopup";
import { useQuery } from "../../hooks";
import { useCallback, useMemo } from "react";

export function EmployeeListing() {
  const appContext = useAppContext();
  const { employees, skills } = appContext.state;
  const navigate = useNavigate();
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
    filteredData,
  } = useEmployeeTable(employees);

  const urlParams = useQuery();
  const deleteEmployeeId = urlParams.get("delete");

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
              <SkillsFilter
                skills={skills}
                employees={employees}
                selectedSkills={selectedSkills}
                onChange={(skills) => {
                  setSelectedSkills(skills);
                  setPage(1);
                }}
              />
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
            employees={displayData}
            searchTerm={searchTerm}
            sort={sort}
            onChangeSort={(sort) => {
              setSort(sort);
            }}
          />
        </div>
        <PaginationControl
          current={page}
          total={Math.ceil(filteredData.length / 10)}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </main>
      {deleteEmployeeId && (
        <EmployeeDeletePopup
          employeeId={parseInt(deleteEmployeeId)}
          onClose={() => {
            navigate("/");
          }}
        />
      )}
    </>
  );
}
