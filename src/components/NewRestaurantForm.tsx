import {Button, TextField} from '@mui/material';
import {useState} from 'react';

interface IProps {
  createRestaurant: any;
}

export function NewRestaurantForm({createRestaurant}: IProps) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    createRestaurant(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default NewRestaurantForm;
