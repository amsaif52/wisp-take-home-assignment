function Pagination({ pagination, page, setPage, handlePaginationChange }) {
    return (
        <div className="pagination">
            <button className={!pagination.hasPrevPage ? 'notActive' : ''} onClick={() => handlePaginationChange(page - 1)}>❮</button>
            <div>{page}</div>
            <button className={!pagination.hasNextPage ? 'notActive' : ''} onClick={() => handlePaginationChange(page + 1)}>❯</button>
        </div>
    )
}
export default Pagination;