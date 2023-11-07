import { useState, useEffect } from "react";
import EmployeeTable from "../components/listing/EmployeeTable";
import { HoverButton } from "../components/common/HoverButton.style";
import SkillsFilter from "../components/listing/SkillsFilter";
import { Employee } from "../models/employee";
import { getData, searchEmployees } from "../services/helpers";
import { Skill } from "../models/skill";
import PaginationControl from "../components/listing/PaginationControl";
import SearchInput from "../components/listing/SearchInput";

export function EmployeeListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [sort, setSort] = useState<{ key: string; order: "asc" | "desc" }>({
    key: "employeeId",
    order: "asc",
  });

  const loadData = async () => {
    const data = await getData("data.json");
    setEmployees(data.employees);
    setSkills(data.skills);
    setLoading(false);
  };

  useEffect(() => {
    let filtered = searchEmployees(employees, searchTerm);
    filtered = filtered.slice(page * 10 - 10, page * 10);
    setFilteredEmployees(filtered);
  }, [searchTerm, selectedSkills, employees, page]);

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
          employees={filteredEmployees}
          searchTerm={searchTerm}
          sort={sort}
          onChangeSort={(sort) => {
            setSort(sort);
          }}
        />
      </div>
      <PaginationControl
        current={page}
        total={Math.ceil(employees.length / 10)}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </main>
  );
}
