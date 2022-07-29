import axios from 'axios';

const KEY = 'AIzaSyCmgnHiDHnl5-oMBBuPkVHuFQeykT-AbJI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
