function ResultTable({ results }) {
    return (
        <div className="app-table">
            <div className="app-header">
                <div><strong>Flight Number</strong></div>
                <div><strong>Launch Year</strong></div>
                <div><strong>Rocket Name</strong></div>
                <div><strong>Launch Name</strong></div>
                <div><strong>Details</strong></div>
            </div>
            <div className="app-body">
                {results?.map(result =>
                    <a href={result?.presskit} key={result?.flight_number} className={result?.presskit ? 'haveLink' : ''} target="_blank" rel="noreferrer">
                        <div>{result?.flight_number}</div>
                        <div>{result?.launch_year}</div>
                        <div>{result?.rocket_name}</div>
                        <div>{result?.launch_name}</div>
                        <div>{result?.details}</div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default ResultTable