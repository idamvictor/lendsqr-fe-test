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
    <div className="flex items-center">
      <button
        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#213F7D]/20 mr-2"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={14} className="text-[#213F7D]" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`w-6 h-6 flex items-center justify-center rounded-md mx-1 text-xs ${
            currentPage === page
              ? "bg-[#213F7D] text-white"
              : "text-[#545F7D] hover:bg-[#213F7D]/10"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <span className="mx-2 text-[#545F7D]">...</span>

      <button
        className="w-6 h-6 flex items-center justify-center rounded-md mx-1 text-xs text-[#545F7D] hover:bg-[#213F7D]/10"
        onClick={() => onPageChange(15)}
      >
        15
      </button>

      <button
        className="w-6 h-6 flex items-center justify-center rounded-md mx-1 text-xs text-[#545F7D] hover:bg-[#213F7D]/10"
        onClick={() => onPageChange(16)}
      >
        16
      </button>

      <button
        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#213F7D]/20 ml-2"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={14} className="text-[#213F7D]" />
      </button>
    </div>
  );
}
