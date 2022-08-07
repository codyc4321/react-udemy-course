import json_placeholder from '../apis/json_placeholder';


export const fetchPosts = () => {
  const promise = json_placeholder.get('/posts');
  return {
    type: 'FETCH_POSTS',
    payload: promise
  }
}
