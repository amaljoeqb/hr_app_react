import { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";
import { HoverButton } from "../../components";
import SkillsFilter from "./components/SkillsFilter";
import { Employee, Skill } from "../../models";
import {
  getData,
  searchEmployees,
  sortEmployees,
} from "../../services/helpers";
import PaginationControl from "./components/PaginationControl";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "../../store/app.context";

export function EmployeeListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [sort, setSort] = useState<{ key: string; order: "asc" | "desc" }>({
    key: "employeeId",
    order: "asc",
  });
  const appContext = useAppContext();
  const { employees, skills } = appContext.state;

  useEffect(() => {
    let filtered = searchEmployees(employees, searchTerm);
    if (selectedSkills.length > 0) {
      filtered = filtered.filter((employee) => {
        return employee.skills.find((skill) => {
          return selectedSkills.includes(skill.skillId);
        });
      });
    }
    filtered =
      selectedSkills.length === 0
        ? filtered
        : filtered.filter((employee) => {
            return employee.skills.find((skill) => {
              return selectedSkills.includes(skill.skillId);
            });
          });
    filtered = sortEmployees(
      filtered,
      sort.key as keyof Employee,
      sort.order === "asc"
    );
    setFilteredEmployees(filtered);
    setPage(1);
  }, [searchTerm, selectedSkills, employees, sort]);

  return (
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
          <HoverButton>
            <span className="material-symbols-outlined"> add_circle </span>
            <p>Create</p>
          </HoverButton>
        </div>
      </div>
      <div className="table-container">
        <EmployeeTable
          employees={filteredEmployees.slice(page * 10 - 10, page * 10)}
          searchTerm={searchTerm}
          sort={sort}
          onChangeSort={(sort) => {
            setSort(sort);
            console.log(sort);
          }}
        />
      </div>
      <PaginationControl
        current={page}
        total={Math.ceil(filteredEmployees.length / 10)}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </main>
  );
}
