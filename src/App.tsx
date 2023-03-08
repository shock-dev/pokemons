import { Header } from './components/Header';
import { Box, Container, Grid, TextField } from '@mui/material';
import { PokemonCard } from './components/PokemonCard';
import { ChangeEventHandler, useCallback, useEffect } from 'react';
import { Pokemon } from 'pokenode-ts';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { pokemonSlice } from './store/reducers/PokemonSlice';
import { fetchPokemons } from './store/reducers/ActionCreators';
import { PokemonModalInfo } from './components/PokemonModalInfo';
import { Pagination } from './components/Pagination';
import {
  filterPokemonsByName,
  filterPokemonsByTypeList,
} from './helpers/pokemon';
import { SkeletonCard } from './components/Skeleton';
import { MultipleSelect } from './components/MultipleSelect';

const cardGridSizes = {
  xs: 12,
  sm: 6,
  md: 6,
  lg: 3,
};

export const App = () => {
  const dispatch = useAppDispatch();
  const { pokemons, limit, offset, search, isLoading, activeTypes } =
    useAppSelector(state => state.pokemonReducer);
  const { openPokemonsModal, setSearch } = pokemonSlice.actions;

  useEffect(() => {
    dispatch(fetchPokemons({ offset, limit }));
  }, [offset, limit]);

  const openInfo = useCallback((pokemon: Pokemon) => {
    dispatch(openPokemonsModal(pokemon));
  }, []);

  const searchHandler: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setSearch(e.target.value));
  };

  const filteredByTags = filterPokemonsByTypeList(pokemons, activeTypes);
  const filteredPokemons = filterPokemonsByName(filteredByTags, search);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            onChange={searchHandler}
          />
          <MultipleSelect />
        </Box>
        <Pagination showLimit />
        <Grid container spacing={2}>
          {isLoading &&
            new Array(20).fill(null).map((s, index) => (
              <Grid key={index} item {...cardGridSizes}>
                <SkeletonCard />
              </Grid>
            ))}
          {!isLoading &&
            filteredPokemons.map((i, index) => (
              <Grid key={index} item {...cardGridSizes}>
                <PokemonCard pokemon={i} onInfo={() => openInfo(i)} />
              </Grid>
            ))}
        </Grid>
        <Pagination />
      </Container>
      <PokemonModalInfo />
    </>
  );
};
