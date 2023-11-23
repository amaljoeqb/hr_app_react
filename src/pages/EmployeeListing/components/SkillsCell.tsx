import { useRef, useState } from "react";
import { Chip } from "../../../components";
import { Skill } from "../../../models";
import { skillsToString } from "../../../services";

export default function SkillsCell({ skills }: { skills: Skill[] }) {
  const [isActive, setIsActive] = useState(false);
  const cellRef = useRef<HTMLTableCellElement>(null);

  function onMouseEnter() {
    if (cellRef.current === null) return;
    console.log(cellRef.current.clientWidth, cellRef.current.scrollWidth);
    if (cellRef.current.clientWidth < cellRef.current.scrollWidth) {
      setIsActive(true);
    }
  }

  function onMouseLeave() {
    setIsActive(false);
  }

  return (
    <td
      ref={cellRef}
      className="skills-cell"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {skills.map((skill) => (
        <Chip key={skill.skillId}>{skill.skill}</Chip>
      ))}
      <div className={`skills-tooltip ${isActive ? "active" : ""}`}>
        {skillsToString(skills)}
      </div>
    </td>
  );
}
