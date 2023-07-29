import {useEffect} from 'react';
import {TRestaurantResponse} from '../models/restaurants.model';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import {List, ListItem, ListItemText, CircularProgress} from '@mui/material';

interface IProps {
  loadRestaurants: () => void;
  restaurants: TRestaurantResponse[];
  loading: boolean;
}

export function RestaurantList({
  loadRestaurants,
  restaurants,
  loading,
}: IProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress />}
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            <ListItemText>{restaurant.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
