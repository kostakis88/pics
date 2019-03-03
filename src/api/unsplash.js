import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 2988d00045927d2dddae5fac472dcf7aa9884fe21d8310e9ecb07ea12251bf6a'
    }
});