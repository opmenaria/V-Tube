import axios from 'axios'

const KEY = 'AIzaSyDx0v3CPJn8HFnPSEbW_ed8OGmtbmMIrGI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})