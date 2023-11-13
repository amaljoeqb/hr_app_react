import React from "react";

export interface Column {
  key: string;
  title: string;
  flex: number;
  sortable: boolean;
}

export interface TableProps {
  columns: Column[];
  sort?: {
    key: string;
    order: "asc" | "desc";
  };
  onClickColumnTitle?: (key: string) => void;
}

export default function Table({
  columns,
  sort,
  onClickColumnTitle,
  children,
}: React.PropsWithChildren<TableProps>) {
  const totalFlex = columns.reduce((total, column) => {
    return total + column.flex;
  }, 0);

  function getTitleClassName(key: string, sortable: boolean) {
    if (!sortable) {
      return "column-title no-click";
    }
    if (sort?.key === key) {
      return `column-title ${sort.order}`;
    }
    return "column-title";
  }

  return (
    <table className="emp-table">
      <colgroup>
        {columns.map((column) => {
          return (
            <col style={{ width: `${(column.flex / totalFlex) * 100}%` }} />
          );
        })}
      </colgroup>
      <thead>
        <tr className="header-row">
          {columns.map((column) => {
            return (
              <th key={column.key}>
                <div className="header-container">
                  <h3
                    className={getTitleClassName(column.key, column.sortable)}
                    data-key={column.key}
                    onClick={() => {
                      if (onClickColumnTitle) {
                        onClickColumnTitle(column.key);
                      }
                    }}
                  >
                    {column.title}
                    {column.sortable && (
                      <span className="sort-icon">
                        <span className="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span className="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    )}
                  </h3>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
