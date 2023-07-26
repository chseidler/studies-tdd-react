import {useEffect} from 'react';
import {TRestaurantResponse} from '../models/restaurants.model';
import {connect} from 'react-redux';

interface IProps {
  loadRestaurants: () => void;
  restaurants: TRestaurantResponse[];
}

export function RestaurantList({loadRestaurants, restaurants}: IProps) {
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

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants.records,
});

export default connect(mapStateToProps)(RestaurantList);
