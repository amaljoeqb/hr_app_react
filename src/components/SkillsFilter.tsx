import { useEffect, useState } from "react";
import { getData } from "../services/helpers";
import { Skill } from "../models/skill";
import { Employee } from "../models/employee";

export default function SkillsFilter({
  skills,
  employees,
  selectedSkills,
  onChange,
}: {
  skills: Skill[];
  employees: Employee[];
  selectedSkills: number[];
  onChange?: (text: string[]) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {

  }, [employees, skills, selectedSkills]);

  return (
    <div
      id="skills-filter"
      className={
        isActive ? "filter-btn-container active" : "filter-btn-container"
      }
    >
      <button
        className="filter-btn hover-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span className="material-symbols-outlined"> tune </span>
        <p>Skills</p>
        <ul className="selected-items"></ul>
      </button>
      <div className="filter-dropdown">
        <form className="filter-form">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            className="filter-search"
            type="text"
            id="skill-filter"
            name="skill-filter"
            placeholder="Search Skills"
            autoComplete="off"
          />
        </form>
        <hr />
        <ul className="filtered-items"></ul>
        <hr />
        <button className="clear-filter">
          <p>Clear Filters</p>
        </button>
      </div>
    </div>
  );
}
