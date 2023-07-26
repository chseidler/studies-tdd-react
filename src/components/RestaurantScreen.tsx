import {TRestaurantResponse} from '../models/restaurants.model';
import RestaurantList from './RestaurantList';

export default function RestaurantScreen() {
  const loadRestaurants = () => {};
  const restaurants: TRestaurantResponse[] = [];
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    </div>
  );
}
