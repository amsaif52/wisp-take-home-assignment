import axios from "axios";
import { API_PATH } from '../const'

const path = {
    launches: 'launches/query'
}

const getSpacexLaunches = async (page) => {
    try {
        const response = await axios.post([API_PATH, path.launches].join('/'), {
            "options": {
                "sort": {
                    "date_utc": "asc"
                },
                "page": page
            }
        })
        return response.data
    } catch (e) {
        throw e
    }
}

export {
    getSpacexLaunches,
}