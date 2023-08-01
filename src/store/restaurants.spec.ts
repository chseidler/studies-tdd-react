import {applyMiddleware, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';

import restaurantsReducer from './restaurants/reducers';
import {loadRestaurants} from './restaurants/actions';

describe('restaurants', () => {
  describe('when loading succeeds', () => {
    const records = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    describe('loadRestaurants action', () => {
      let store: any;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => Promise.resolve(records),
        };

        const initalState = {
          records: [],
        };

        store = legacy_createStore(
          restaurantsReducer,
          initalState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        return store.dispatch(loadRestaurants());
      });

      it('stores the restaurants', () => {
        expect(store.getState().records).toEqual(records);
      });

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });
  });

  describe('when loading fails', () => {
    let store: any;

    beforeEach(() => {
      const api = {
        loadRestaurants: () => Promise.reject(),
      };

      const initalState = {};

      store = legacy_createStore(
        restaurantsReducer,
        initalState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      return store.dispatch(loadRestaurants());
    });

    it('sets an error flag', () => {
      expect(store.getState().loadError).toEqual(true);
    });
  });

  describe('while loading', () => {
    it('sets a loading flag', () => {
      const api = {
        loadRestaurants: () => new Promise(() => {}),
      };
      const initalState = {};
      const store = legacy_createStore(
        restaurantsReducer,
        initalState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      store.dispatch(loadRestaurants());

      expect(store.getState().loading).toEqual(true);
    });
  });

  describe('initially', () => {
    let store: any;

    beforeEach(() => {
      const initalState = {};

      store = legacy_createStore(
        restaurantsReducer,
        initalState,
        applyMiddleware(thunk),
      );
    });

    it('does not have the loading flag set', () => {
      expect(store.getState().loading).toEqual(false);
    });

    it('does not have the error flag set', () => {
      expect(store.getState().loadError).toEqual(false);
    });
  });
});
