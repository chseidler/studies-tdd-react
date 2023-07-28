export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants =
  () => async (dispatch: any, getState: any, api: any) => {
    const records = await api.loadRestaurants();
    dispatch(storeRestaurants(records));
  };

const storeRestaurants = (records: any) => ({
  type: STORE_RESTAURANTS,
  records,
});
