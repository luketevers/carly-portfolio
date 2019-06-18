import { combineReducers } from 'redux';
import GET_APP_DATA from './reducers/get-app-data'
import GET_PAGES from './reducers/get-pages'

const rootReducer = combineReducers({ appData: GET_APP_DATA, pages: GET_PAGES, });

export default rootReducer
