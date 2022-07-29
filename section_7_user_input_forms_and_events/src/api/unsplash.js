import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'client id here',
  },
})

// export default axios.create({
//   baseURL: 'https://api.pexels.com/v1',
//   headers: {
//     Authorization: '563492ad6f91700001000001e2666acce9964b20979109a9599e0867',
//   },
// })
