import {useEffect} from 'react';
import {TRestaurantResponse} from '../models/restaurants.model';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import {List, ListItem, ListItemText} from '@mui/material';

interface IProps {
  loadRestaurants: () => void;
  restaurants: TRestaurantResponse[];
}

export function RestaurantList({loadRestaurants, restaurants}: IProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <List>
      {restaurants.map(restaurant => (
        <ListItem key={restaurant.id}>
          <ListItemText>{restaurant.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
