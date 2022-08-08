import _ from 'lodash';

import json_placeholder from '../apis/json_placeholder';


export const fetchPosts = () => async dispatch => {
  const response = await json_placeholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data});
};


export const fetchUser = (id) =>  dispatch => {
  _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await json_placeholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data});
})
