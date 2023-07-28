import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {RestaurantList} from './RestaurantList';
import {TRestaurantResponse} from '../models/restaurants.model';

describe('RestaurantList', () => {
  const restaurants: TRestaurantResponse[] = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants: jest.Mock<any, any, any>;

  function renderComponent() {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  }

  it('loads restaurants on first render', () => {
    renderComponent();

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    renderComponent();

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
