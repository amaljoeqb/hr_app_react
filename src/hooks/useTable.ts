import { useState, useEffect } from "react";

export interface TableProps<T> {
  data: T[];
  searchFunction: (data: T[], term: string) => T[];
  filterFunction: (data: T[]) => T[];
  sortFunction: (data: T[], key: keyof T, order: "asc" | "desc") => T[];
  id: keyof T;
}

export default function useTable<T>(props: TableProps<T>) {
  const { data, searchFunction, sortFunction, filterFunction, id } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<{ key: keyof T; order: "asc" | "desc" }>({
    key: id,
    order: "asc",
  });
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [displayData, setDisplayData] = useState<T[]>([]);

  useEffect(() => {
    let filtered = searchFunction(data, searchTerm);
    filtered = filterFunction(filtered);
    filtered = sortFunction(
      filtered,
      sort.key,
      sort.order === "asc" ? "asc" : "desc"
    );
    setFilteredData(filtered);
    setPage(1);
  }, [searchTerm, data, sort, searchFunction, sortFunction, filterFunction]);

  useEffect(() => {
    console.log("useEffect");
    const start = (page - 1) * 10;
    const end = start + 10;
    setDisplayData(filteredData.slice(start, end));
  }, [page, filteredData]);

  return {
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    page,
    setPage,
    filteredData,
    displayData,
  };
}
