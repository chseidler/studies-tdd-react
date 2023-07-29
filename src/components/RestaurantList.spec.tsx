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
  const loading = false;

  function renderComponent(propOverrides = {}) {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      loading,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;

    render(<RestaurantList {...props} />);
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

  describe('when loading succesds', () => {
    it('displays the loading indicator while loading', () => {
      renderComponent({loading: true});
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('does not display the loading indicator while loading', () => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
