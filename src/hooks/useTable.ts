import { useState, useEffect } from "react";

export interface TableProps<T> {
  data: T[];
  searchFunction: (data: T[], term: string) => T[];
  sortFunction: (data: T[], key: keyof T, order: "asc" | "desc") => T[];
  id: keyof T;
}

export default function useTable<T>(props: TableProps<T>) {
  const { data, searchFunction, sortFunction, id } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<{ key: keyof T; order: "asc" | "desc" }>({
    key: id,
    order: "asc",
  });
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [page, setPage] = useState(1);
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    let filtered = searchFunction(data, searchTerm);
    // if (selectedSkills.length > 0) {
    //   filtered = filtered.filter((item) => {
    //     return item.skills.find((skill) => {
    //       return selectedSkills.includes(skill.skillId);
    //     });
    //   });
    // }
    filtered = sortFunction(
      filtered,
      sort.key,
      sort.order === "asc" ? "asc" : "desc"
    );
    setDisplayData(filtered);
    setPage(1);
  }, [searchTerm, selectedSkills, data, sort]);

  return {
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    selectedSkills,
    setSelectedSkills,
    page,
    setPage,
    displayData,
  };
}
