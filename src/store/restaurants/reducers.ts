import {combineReducers} from 'redux';
import {
  RECORD_LOADING_ERROR,
  START_LOADING,
  STORE_RESTAURANTS,
} from './actions';

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
    case RECORD_LOADING_ERROR:
      return false;
    default:
      return state;
  }
}

function loadError(state = false, action: any) {
  switch (action.type) {
    case START_LOADING:
      return false;
    case RECORD_LOADING_ERROR:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  records,
  loading,
  loadError,
});
