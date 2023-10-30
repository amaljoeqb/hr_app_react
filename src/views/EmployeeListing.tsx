import { useState, useEffect } from "react";
import EmployeeTable from "../views/EmployeeTable";
import { HoverButton } from "../components/HoverButton.style";
import SkillsFilter from "../components/SkillsFilter";
import { Employee } from "../models/employee";
import { getData } from "../services/helpers";
import { Skill } from "../models/skill";

export function EmployeeListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const data = await getData("data.json");
    setEmployees(data.employees);
    setSkills(data.skills);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="card">
      <h1>Employees</h1>
      <div className="emp-listing-header">
        <div className="start-section">
          <SearchInput
            onChange={(text) => {
              setSearchTerm(text);
              setPage(1);
            }}
          />
        </div>
        <div className="next-section">
          <div className="filters-section">
            <SkillsFilter
              skills={skills}
              employees={employees}
              selectedSkills={selectedSkills}
              onChange={() => {
                setSelectedSkills(selectedSkills);
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
          pageNumber={page}
          employees={employees}
          searchTerm={searchTerm}
          skillsFilter={selectedSkills}
        />
      </div>
      <nav className="pagination-container">
        <div className="pagination">
          <button className="hover-btn page-first">
            <span className="material-symbols-outlined"> first_page </span>
          </button>
          <button className="hover-btn page-previous">
            <span className="material-symbols-outlined"> navigate_before </span>
          </button>
          <ul className="page-numbers">
            <li>
              <button
                id="page-1"
                data-num="1"
                className="page-number hover-btn active"
              >
                1
              </button>
            </li>
            <li>
              <button
                id="page-2"
                data-num="2"
                className="page-number hover-btn"
              >
                2
              </button>
            </li>
          </ul>
          <button className="hover-btn page-next">
            <span className="material-symbols-outlined"> navigate_next </span>
          </button>
          <button className="hover-btn page-last">
            <span className="material-symbols-outlined"> last_page </span>
          </button>
        </div>
      </nav>
    </main>
  );
}

function SearchInput({ onChange }: { onChange?: (text: string) => void }) {
  return (
    <input
      type="text"
      name="key"
      className="search-input"
      placeholder="Search employees..."
      autoComplete="off"
      onInput={(e) => {
        onChange && onChange(e.currentTarget.value.trim().toLowerCase());
      }}
    />
  );
}


