function ResultTable({ results }) {
    const onPresskitClick = (link) => {
        window.open(link, "_blank");
    }
    return (
        <>
            <div role="region" aria-labelledby="Cap1" tabindex="0">
                <table id="Books">
                    <tr>
                        <th>Flight Number</th>
                        <th>Launch Year</th>
                        <th>Rocket Name</th>
                        <th>Launch Name</th>
                        <th>Details</th>
                    </tr>
                    {results?.map(result => (
                        <tr key={result?.flight_number} onClick={() => onPresskitClick(result?.presskit)} className={result?.presskit ? 'pressKitActive' : ''}>
                            <td>{result?.flight_number}</td>
                            <td>{result?.launch_year}</td>
                            <td>{result?.rocket_name}</td>
                            <td>{result?.launch_name}</td>
                            <td>{result?.details}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default ResultTable