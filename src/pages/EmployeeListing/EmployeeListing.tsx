import EmployeeTable from "./components/EmployeeTable";
import { HoverButton } from "../../components";
import PaginationControl from "./components/PaginationControl";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "../../store/app.context";
import { useNavigate } from "react-router-dom";
import useEmployeeTable from "./hooks/useEmployeeTable";
import SkillsFilter from "./components/SkillsFilter";
import EmployeeDeletePopup from "./components/EmployeeDeletePopup";
import { useApi, useQuery } from "../../hooks";

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
  const PER_PAGE = 10;

  const urlParams = useQuery();
  const api = useApi();

  const deleteEmployeeId = urlParams.get("delete");
  const totalPages = Math.ceil(filteredData.length / PER_PAGE);

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
                navigate("/employee/?edit=true");
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
        {totalPages > 1 && (
          <PaginationControl
            current={page}
            total={totalPages}
            onChange={(page) => {
              setPage(page);
            }}
          />
        )}
      </main>
      {deleteEmployeeId && (
        <EmployeeDeletePopup
          employeeId={deleteEmployeeId}
          onClose={() => {
            navigate(-1);
          }}
        />
      )}
    </>
  );
}
