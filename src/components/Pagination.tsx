import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { pokemonSlice } from '../store/reducers/PokemonSlice';

const limits = [10, 20, 50, 100];

interface PaginationProps {
  showLimit?: boolean;
}

export const Pagination = ({ showLimit = false }: PaginationProps) => {
  const dispatch = useAppDispatch();
  const { offset, limit, isLoading } = useAppSelector(
    state => state.pokemonReducer,
  );
  const { nextPage, prevPage, setLimit } = pokemonSlice.actions;

  const onNextPage = () => {
    dispatch(nextPage());
  };

  const onPrevPage = () => {
    dispatch(prevPage());
  };

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setLimit(+event.target.value));
  };

  const isDisabledPrev = offset === 0 || isLoading;

  return (
    <Stack direction="row" justifyContent="center" spacing={2} my={2}>
      <Button
        variant="contained"
        onClick={onPrevPage}
        disabled={isDisabledPrev}
      >
        Prev
      </Button>
      <Button variant="contained" onClick={onNextPage} disabled={isLoading}>
        Next
      </Button>
      {showLimit && (
        <FormControl size="small" disabled={isLoading}>
          <InputLabel id="limit-label">Limit</InputLabel>
          <Select
            labelId="limit-label"
            id="limit"
            value={String(limit)}
            label="Limit"
            onChange={handleChange}
          >
            {limits.map(val => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
};
