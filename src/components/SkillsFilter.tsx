import { useEffect, useState } from "react";
import { getData } from "../services/helpers";
import { Skill } from "../models/skill";
import { Employee } from "../models/employee";

type SkillOption = Skill & { count: number; checked: boolean };

export default function SkillsFilter({
  skills,
  employees,
  selectedSkills,
  onChange,
}: {
  skills: Skill[];
  employees: Employee[];
  selectedSkills: number[];
  onChange?: (text: number[]) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState<SkillOption[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onClickSkillOption(skillId: number) {
    if (selectedSkills.includes(skillId)) {
      onChange?.(selectedSkills.filter((id) => id !== skillId));
    } else {
      onChange?.([...selectedSkills, skillId]);
    }
  }

  useEffect(() => {
    const options = skills
      .filter((skill) => {
        return skill.skill.toLowerCase().includes(searchTerm);
      })
      .map((skill) => {
        return {
          skillId: skill.skillId,
          skill: skill.skill,
          count: employees.filter((employee) => {
            return employee.skills.find((skillItem) => {
              return skillItem.skillId == skill.skillId;
            });
          }).length,
          checked: selectedSkills.includes(skill.skillId),
        };
      })
      .filter((option) => option.count > 0)
      .sort((a, b) => b.count - a.count);
    setOptions(options);
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
        <ul className="filtered-items">
          {options.map((option) => {
            return (
              <li
                key={option.skillId}
                className="filtered-item"
                onClick={() => onClickSkillOption(option.skillId)}
              >
                <input
                  className="check"
                  type="checkbox"
                  checked={option.checked}
                />
                <p className="name">{option.skill}</p>
                <p className="count">{option.count}</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <button className="clear-filter">
          <p>Clear Filters</p>
        </button>
      </div>
    </div>
  );
}
