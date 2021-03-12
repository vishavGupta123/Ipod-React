import axios from 'axios';
const KEY = 'AIzaSyAzZKHKL78fShFYpvHvgSJWEzrnrqLAscY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})