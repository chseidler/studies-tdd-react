export const START_LOADING = 'START_LOADING';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants =
  () => async (dispatch: any, getState: any, api: any) => {
    try {
      dispatch(startLoading());
      const records = await api.loadRestaurants();
      dispatch(storeRestaurants(records));
    } catch {}
  };

const startLoading = () => ({type: START_LOADING});

const storeRestaurants = (records: any) => ({
  type: STORE_RESTAURANTS,
  records,
});
