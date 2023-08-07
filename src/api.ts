import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/uRBPB8sLZnMAKXjmmtoe97H4tKNKIPYZ',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },

  async createRestaurant(name: any) {
    const response = await client.post('/restaurants', {name});
    return response.data;
  },
};

export default api;
