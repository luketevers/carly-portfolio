import {
  GET_APP_DATA_SUCCESS,
} from '../action-types.js';

let initialState = {};

const getAppData = (state = initialState, action) => {
  switch (action.type) {
    case GET_APP_DATA_SUCCESS:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}

export default getAppData
