import RestaurantList from './RestaurantList';

export default function RestaurantScreen() {
  const loadRestaurants = () => {};

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList loadRestaurants={loadRestaurants} />
    </div>
  );
}
