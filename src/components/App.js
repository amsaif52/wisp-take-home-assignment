import React, { useEffect, useState } from "react";
import { getSpacexLaunches } from '../services/LaunchesServices'
import { getRocketDetail } from '../services/RocketServices'
import { TITLE_TAG, LOADING } from '../const'
import Pagination from './Pagination'
import ResultTable from './ResultTable'
function App() {
  const [pagination, setPagination] = useState({})
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const normalizeValues = ({ docs }) => docs.map(async result => {
    const getRocketName = (await getRocketDetail(result?.rocket))?.name;
    return {
      "flight_number": result?.flight_number,
      "launch_year": new Date(result?.date_utc).getFullYear(),
      "rocket_name": getRocketName,
      "launch_name": result?.name,
      "details": result?.details,
      "presskit": result?.links?.presskit
    }
  })
  const normalizePagination = (response) => ({
    hasNextPage: response?.hasNextPage,
    hasPrevPage: response?.hasPrevPage
  })
  const handlePaginationChange = (page) => {
    setPage(page)
    setIsLoading(false)
  }
  useEffect(() => {
    async function fetchResults() {
      try {
        window.scrollTo(0, 0)
        const response = await getSpacexLaunches(page);
        setResults(await Promise.all(normalizeValues(response)))
        setPagination(normalizePagination(response))
        setIsLoading(true)
      } catch (e) {
        setError(e.message)
        setIsLoading(false)
      }
    }
    fetchResults()
  }, [page])
  return (
    <div className="App">
      <div className="title">{TITLE_TAG}</div>
      {
        isLoading ? (
          <>
            <ResultTable results={results} />
            <Pagination pagination={pagination} page={page} handlePaginationChange={handlePaginationChange} />
          </>
        ) : (
          error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="loader">{LOADING}</div>
          )
        )
      }
    </div>
  );
}

export default App;
