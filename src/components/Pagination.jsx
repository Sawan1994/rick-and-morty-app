import React, { useState, useEffect, useCallback } from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalCount,
  itemsPerPage
}) => {
  const [pages, setPages] = useState([]);

  const setPage = useCallback(() => {
    let page_count = 0;

    let pages = [];
    /**
     * if total items in data is more than items per page then set the total pages,
     * e.g. total items in data/array = 26 and items per page = 10 then,
     * total pages i.e. page_count will beocome Math.ceil(26/10) = 3
     */
    if (totalCount > itemsPerPage) {
      page_count = Math.ceil(totalCount / itemsPerPage);
    }

    /**
     * if total pages to be shown is less than or equals to five then we show
     * all the page numbers
     */
    if (page_count <= 5) {
      pages = [...Array(page_count).keys()].map(i => i + 1);
    } else {
      if (currentPage + 1 <= 3) {
        pages = [...Array(4).keys()].map(i => i + 1);
        pages[pages.length - 1] = page_count;
      } else if (currentPage + 1 > 3 && currentPage + 1 < page_count) {
        let startPage = currentPage - 1;
        pages = [...Array(4).keys()].map(i => startPage + i);
        pages[pages.length - 1] = page_count;
      } else if (currentPage + 1 > 3 && currentPage + 1 >= page_count) {
        pages = [1, page_count - 2, page_count - 1, page_count];
      }
    }
    setPages(pages);
  }, [itemsPerPage, currentPage, totalCount]);

  useEffect(() => {
    setPage();
  }, [setPage]);

  return (
    <div className="row pagination-row">
      {pages.length > 0 ? (
        <ul className="col-12 pagination">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
            onClick={currentPage === 1 ? null : () => setCurrentPage(1)}
          >
            First
          </li>

          {pages.map((page_num, i) => {
            return (
              <li
                key={page_num}
                className={
                  currentPage === page_num ? "page-item active" : "page-item"
                }
                onClick={() => setCurrentPage(page_num)}
              >
                {page_num}
              </li>
            );
          })}

          <li
            className={
              currentPage === pages[pages.length - 1]
                ? "page-item disabled"
                : "page-item"
            }
            onClick={
              currentPage === pages[pages.length - 1]
                ? null
                : () => setCurrentPage(pages[pages.length - 1])
            }
          >
            Last
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Pagination;
