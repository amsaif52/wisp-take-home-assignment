import axios from "axios";
import { API_PATH } from '../const'

const path = {
    rockets: 'rockets'
}

const getRocketDetail = async (rocketId) => {
    try {
        const response = await axios.get([API_PATH, path.rockets, rocketId].join('/'))
        return response.data
    } catch (e) {
        throw e
    }
}

export {
    getRocketDetail,
}