import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getPages } from './actions/get-pages';
import { getAppData } from './actions/get-app-data';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getPages());
store.dispatch(getAppData());

export default store;
