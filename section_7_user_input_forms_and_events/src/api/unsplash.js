import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'client id here',
  },
})
