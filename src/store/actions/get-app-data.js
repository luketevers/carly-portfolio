import axios from 'axios';
import api from '../api'

import {
  GET_APP_DATA_SUCCESS,
} from '../action-types.js';

export const getAppData = () => {
  return dispatch => {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`);
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: { ...data.acf } }),
          {}
        );
        dispatch(getAppDataSuccess(data));
      } catch (e) {
        console.log('APP API: ' + e);
      }
    })();
  }
};

const getAppDataSuccess = data => ({
  type: GET_APP_DATA_SUCCESS,
  data
});
