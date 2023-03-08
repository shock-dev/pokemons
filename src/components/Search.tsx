import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
import { pokemonSlice } from '../store/reducers/PokemonSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export const Search = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector(state => state.pokemonReducer);
  const { setSearch } = pokemonSlice.actions;

  const searchHandler: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      type="search"
      value={search}
      onChange={searchHandler}
      fullWidth
    />
  );
};
