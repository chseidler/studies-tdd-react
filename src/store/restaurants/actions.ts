export const START_LOADING = 'START_LOADING';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const loadRestaurants =
  () => async (dispatch: any, getState: any, api: any) => {
    try {
      dispatch(startLoading());
      const records = await api.loadRestaurants();
      dispatch(storeRestaurants(records));
    } catch {
      dispatch(recordLoadingError());
    }
  };

const startLoading = () => ({type: START_LOADING});

const storeRestaurants = (records: any) => ({
  type: STORE_RESTAURANTS,
  records,
});

const recordLoadingError = () => ({type: RECORD_LOADING_ERROR});

export const createRestaurant =
  (name: string) => async (dispatch: any, getState: any, api: any) => {
    const record = await api.createRestaurant(name);
    dispatch(addRestaurant(record));
  };

const addRestaurant = (record: any) => ({
  type: ADD_RESTAURANT,
  record,
});
