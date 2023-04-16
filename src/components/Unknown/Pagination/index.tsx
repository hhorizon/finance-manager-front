import React from "react";
import ReactPaginate from "react-paginate";

import "./styles.scss";

interface PaginationProps {
  totalPages: number;
  onPaginationChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPaginationChange,
}) => {
  return (
    <>
      <ReactPaginate
        onPageChange={(selected) => onPaginationChange(selected.selected + 1)}
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </>
  );
};

export default Pagination;
