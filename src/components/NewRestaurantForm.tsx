import {Button, TextField} from '@mui/material';
import {useState} from 'react';
import {createRestaurant} from '../store/restaurants/actions';
import {connect} from 'react-redux';

interface IProps {
  createRestaurant: any;
}

export function NewRestaurantForm({createRestaurant}: IProps) {
  const [name, setName] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
