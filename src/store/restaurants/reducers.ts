import {combineReducers} from 'redux';
import {START_LOADING, STORE_RESTAURANTS} from './actions';

function records(state = [], action: any) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
}

function loading(state = false, action: any) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_RESTAURANTS:
      return false;
    default:
      return state;
  }
}

function loadError() {
  return true;
}

export default combineReducers({
  records,
  loading,
  loadError,
});
