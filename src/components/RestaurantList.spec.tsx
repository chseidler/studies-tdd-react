import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import RestaurantList from './RestaurantList';
import {TRestaurantResponse} from '../models/restaurants.model';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants: TRestaurantResponse[] = [];

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const noop = () => {};
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />);

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
