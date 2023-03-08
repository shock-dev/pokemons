import { Grid } from '@mui/material';
import { Search } from './Search';
import { MultipleSelect } from './MultipleSelect';

const filterGridSizes = {
  xs: 12,
  sm: 4,
  md: 3,
};

export const FilterPanel = () => {
  return (
    <Grid container spacing={2}>
      <Grid item {...filterGridSizes}>
        <Search />
      </Grid>
      <Grid item {...filterGridSizes}>
        <MultipleSelect />
      </Grid>
    </Grid>
  );
};
