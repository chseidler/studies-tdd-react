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
  const [serverError, setServerError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      setServerError(false);

      try {
        await createRestaurant(name);

        setName('');
      } catch {
        setServerError(true);
      }
    } else {
      setValidationError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
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
