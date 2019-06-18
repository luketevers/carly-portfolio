import axios from 'axios';
import api from '../api'

import {
  GET_PAGES_STARTED,
  GET_PAGES_SUCCESS,
} from '../action-types.js';

export const getPages = () => {
  return dispatch => {
    dispatch(getPagesStarted());
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`);
        const total = response.headers['x-wp-totalpages'];
        let page = 1;

        while (page < total) {
          page++
          let res = axios.get(`${api}/wp/v2/pages?page=${page}&per_page=100`)
          response.data.concat(res.data)
        };

        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: {title: data.title.rendered, ...data.acf} }),
          {}
        );
        console.log(data);
        dispatch(getPagesSuccess(data));
      } catch (e) {
        console.log('PAGES API: ' + e);
      }
    })();
  }
};

const getPagesStarted = () => ({
  type: GET_PAGES_STARTED
});

const getPagesSuccess = data => ({
  type: GET_PAGES_SUCCESS,
  data
});
