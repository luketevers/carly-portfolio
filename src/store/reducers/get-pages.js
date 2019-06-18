import {
  GET_PAGES_SUCCESS,
  GET_PAGES_STARTED
} from '../action-types'

let initialState = {};

const getPages = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGES_STARTED:
      return {
        loading: true
      };
    case GET_PAGES_SUCCESS:
      return {
        ...action.data
      };
    default:
      return state;
  }
}

export default getPages
