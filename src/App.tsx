import { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Header } from './components/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPokemons } from './store/reducers/ActionCreators';
import { PokemonModalInfo } from './components/PokemonModalInfo';
import { Pagination } from './components/Pagination';
import { filterPokemons } from './helpers/pokemon';
import { SkeletonList } from './components/SkeletonList';
import { PokemonList } from './components/PokemonList';
import { ErrorBox } from './components/ErrorBox';
import { FilterPanel } from './components/FilterPanel';

export const App = () => {
  const dispatch = useAppDispatch();
  const { pokemons, limit, offset, search, isLoading, activeTypes, error } =
    useAppSelector(state => state.pokemonReducer);

  useEffect(() => {
    dispatch(fetchPokemons({ offset, limit }));
  }, [offset, limit]);

  const filteredPokemons = filterPokemons(pokemons, search, activeTypes);

  return (
    <>
      <Header />
      <Container>
        <Box py={2}>
          <FilterPanel />
          <Pagination showLimit />
          <Grid container spacing={2}>
            {isLoading && <SkeletonList count={limit} />}
            {!isLoading && error && <ErrorBox message={error} />}
            {!isLoading && !error && filteredPokemons.length > 0 && (
              <PokemonList pokemons={filteredPokemons} />
            )}
          </Grid>
          {filteredPokemons.length > 5 && !error && <Pagination />}
        </Box>
      </Container>
      <PokemonModalInfo />
    </>
  );
};
