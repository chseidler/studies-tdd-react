import {Button, TextField} from '@mui/material';

export function NewRestaurantForm() {
  return (
    <form>
      <TextField placeholder="Add Restaurant" fullWidth variant="filled" />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default NewRestaurantForm;
