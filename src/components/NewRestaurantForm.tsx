import {TextField} from '@mui/material';

export function NewRestaurantForm() {
  return (
    <form>
      <TextField placeholder="Add Restaurant" fullWidth variant="filled" />
    </form>
  );
}

export default NewRestaurantForm;
