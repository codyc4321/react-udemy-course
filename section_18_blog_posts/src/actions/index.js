import json_placeholder from '../apis/json_placeholder';


export const fetchPosts = () => async dispatch => {
  const response = await json_placeholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data});
};
