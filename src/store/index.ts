import {applyMiddleware, legacy_createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import api from '../api';

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

export default store;
