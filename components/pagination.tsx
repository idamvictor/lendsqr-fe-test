"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  // const startItem = (currentPage - 1) * itemsPerPage + 1;
  // const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination">
      <div className="pagination__info">
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {totalItems}</span>
      </div>

      <div className="pagination__pages">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination__button pagination__button--prev"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M7.5 10.5L3 6L7.5 1.5L6 0L0 6L6 12L7.5 10.5Z"
              fill="#213F7D"
            />
          </svg>
        </button>

        <div className="pagination__pages">
          {getPageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              onClick={() =>
                typeof pageNumber === "number" ? onPageChange(pageNumber) : null
              }
              className={`pagination__page-button ${
                pageNumber === currentPage
                  ? "pagination__page-button--active"
                  : ""
              } ${
                typeof pageNumber !== "number"
                  ? "pagination__page-button--dots"
                  : ""
              }`}
              disabled={typeof pageNumber !== "number"}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination__button pagination__button--next"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M0.5 10.5L5 6L0.5 1.5L2 0L8 6L2 12L0.5 10.5Z"
              fill="#213F7D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
