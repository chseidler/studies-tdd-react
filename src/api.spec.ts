import nock from 'nock';
import api from './api';

describe('api', () => {
  describe('loadRestaurants', () => {
    const responseHeaders = {'Access-Control-Allow-Origin': '*'};
    const restaurants = [{id: 1, name: 'Sushi Place'}];

    it('returns the response to the right endpoint', async () => {
      nock('https://api.outsidein.dev')
        .get(/^\/\w+\/restaurants$/)
        .reply(200, restaurants, responseHeaders);

      await expect(api.loadRestaurants()).resolves.toEqual(restaurants);
    });
  });
});
