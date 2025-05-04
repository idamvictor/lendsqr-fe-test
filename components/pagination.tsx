"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from(
    { length: Math.min(totalPages, 5) },
    (_, i) => i + 1
  );

  return (
    <div className="pagination">
      <button
        className="pagination__nav-button pagination__nav-button--prev"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={14} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__page-button ${
            currentPage === page ? "pagination__page-button--active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <span className="pagination__ellipsis">...</span>

      <button
        className="pagination__page-button"
        onClick={() => onPageChange(15)}
      >
        15
      </button>

      <button
        className="pagination__page-button"
        onClick={() => onPageChange(16)}
      >
        16
      </button>

      <button
        className="pagination__nav-button pagination__nav-button--next"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
