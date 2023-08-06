import {Alert, Button, TextField} from '@mui/material';
import {useState} from 'react';
import {createRestaurant} from '../store/restaurants/actions';
import {connect} from 'react-redux';

interface IProps {
  createRestaurant: any;
}

export function NewRestaurantForm({createRestaurant}: IProps) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      await createRestaurant(name);
    } else {
      setValidationError(true);
    }

    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      {validationError && <Alert severity="error">Name is required</Alert>}
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
