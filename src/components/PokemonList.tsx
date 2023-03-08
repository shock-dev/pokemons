import { Pokemon } from 'pokenode-ts';
import { Grid } from '@mui/material';
import { PokemonCard } from './PokemonCard';
import * as React from 'react';
import { useCallback } from 'react';
import { pokemonSlice } from '../store/reducers/PokemonSlice';
import { useAppDispatch } from '../hooks/redux';

export const cardGridSizes = {
  xs: 12,
  sm: 6,
  md: 6,
  lg: 3,
};

interface PokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  const dispatch = useAppDispatch();

  const { openPokemonsModal } = pokemonSlice.actions;

  const openInfo = useCallback((pokemon: Pokemon) => {
    dispatch(openPokemonsModal(pokemon));
  }, []);

  return (
    <>
      {pokemons.map((i, index) => (
        <Grid key={index} item {...cardGridSizes}>
          <PokemonCard pokemon={i} onInfo={() => openInfo(i)} />
        </Grid>
      ))}
    </>
  );
};
