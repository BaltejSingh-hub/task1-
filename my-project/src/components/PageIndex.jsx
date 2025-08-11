import React from "react";

const PageIndex = ({ currentPage, totalPages, onPageChange, PrevPage, NextPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-6">


      {/* Previous Button */}
      <button
        onClick={PrevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-lg border text-sm font-medium
          ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100"}
        `}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={()=>{setCurrentPage(page)}}
          className={`px-3 py-1 rounded-lg border text-sm font-medium
            ${currentPage === page ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}
          `}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={NextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-lg border text-sm font-medium
          ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100"}
        `}
      >
        Next
      </button>
    </div>
  );
};

export default PageIndex;
