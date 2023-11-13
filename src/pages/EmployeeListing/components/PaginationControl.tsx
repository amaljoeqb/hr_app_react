export interface PaginationControlProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export default function PaginationControl({
  current,
  total,
  onChange,
}: PaginationControlProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  console.log({ pages, current });
  return (
    <nav className="pagination-container">
      <div className="pagination">
        <button
          className="hover-btn page-first"
          onClick={() => {
            onChange(1);
          }}
        >
          <span className="material-symbols-outlined"> first_page </span>
        </button>
        <button
          className="hover-btn page-previous"
          onClick={() => {
            if (current > 1) {
              onChange(current - 1);
            }
          }}
        >
          <span className="material-symbols-outlined"> navigate_before </span>
        </button>
        <ul className="page-numbers">
          {pages.map((page) => (
            <li key={page}>
              <button
                id="page-1"
                data-num="1"
                className={`page-number hover-btn ${
                  page === current ? "active" : ""
                }`}
                onClick={() => onChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="hover-btn page-next"
          onClick={() => {
            if (current < total) {
              onChange(current + 1);
            }
          }}
        >
          <span className="material-symbols-outlined"> navigate_next </span>
        </button>
        <button
          className="hover-btn page-last"
          onClick={() => {
            onChange(total);
          }}
        >
          <span className="material-symbols-outlined"> last_page </span>
        </button>
      </div>
    </nav>
  );
}
