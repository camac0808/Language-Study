import { faAngleRight, faAnglesRight, faAngleLeft, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ pageClick, count, currentPage }) => {
  let totalPage = Math.ceil(count / 20);
  let pageGroup = Math.ceil(currentPage / 5);
  let lastPage = pageGroup * 5;
  if (lastPage > totalPage) {
    lastPage = totalPage;
  }
  // 총페이지 수가 5이하일 경우 또는 마지막 페이지 그룹이 5개 이하일 경우
  let firstPage = lastPage - 4 <= 0 ? 1 : lastPage - 4;

  let paginationHtml = [];
  let prev = firstPage - 1;
  let next = lastPage + 1;

  for (let i = firstPage; i <= lastPage; i++) {
    paginationHtml.push(
      <li className={currentPage === i ? "page-item active" : "page-item"} key={i}>
        <a className="page-link pageNum" onClick={(event) => pageClick(i)} href="#pagemove">
          {i}
        </a>
      </li>
    );
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${firstPage === 1 ? "hidden" : ""}`}
            onClick={() => pageClick(1)}
          >
            <a className="page-link" href="#js-bottom">
            <FontAwesomeIcon icon={faAnglesLeft} />
            </a>
          </li>
          <li
            className={`page-item ${firstPage === 1 ? "hidden" : ""}`}
            onClick={() => pageClick(prev)}
          >
            <a className="page-link" href="#js-bottom">
            <FontAwesomeIcon icon={faAngleLeft} />
            </a>
          </li>
          {paginationHtml}
          <li
            className={`page-item ${lastPage === totalPage ? "hidden" : ""}`}
            onClick={() => pageClick(next)}
          >
            <a className="page-link" href="#js-program-detail-bottom">
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </li>
          <li
            className={`page-item ${lastPage === totalPage ? "hidden" : ""}`}
            onClick={() => pageClick(totalPage)}
          >
            <a className="page-link" href="#js-bottom">
            <FontAwesomeIcon icon={faAnglesRight} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
