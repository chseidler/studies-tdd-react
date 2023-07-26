import {useEffect} from 'react';
import {TRestaurantResponse} from '../models/restaurants.model';

interface IProps {
  loadRestaurants: () => void;
  restaurants: TRestaurantResponse[];
}

export default function RestaurantList({loadRestaurants, restaurants}: IProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
