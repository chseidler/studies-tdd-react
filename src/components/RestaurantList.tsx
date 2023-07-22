import {useEffect} from 'react';

interface IProps {
  loadRestaurants: () => void;
}

export default function RestaurantList({loadRestaurants}: IProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return <div>RestaurantList</div>;
}
