import {useEffect} from 'react';
import {TRestaurantResponse} from '../models/restaurants.model';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

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

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
