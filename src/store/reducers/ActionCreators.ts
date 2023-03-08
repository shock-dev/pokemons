import { AppDispatch } from '../store';
import { pokemonSlice } from './PokemonSlice';
import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

interface fetchPokemonsProps {
  offset: number;
  limit: number;
}

export const fetchPokemons =
  ({ offset, limit }: fetchPokemonsProps) =>
  async (dispatch: AppDispatch) => {
    const {
      pokemonsFetching,
      pokemonsFetchingSuccess,
      pokemonsFetchingError,
      setTotalCount,
    } = pokemonSlice.actions;
    try {
      dispatch(pokemonsFetching());
      const data = await api.listPokemons(offset, limit);
      dispatch(setTotalCount(data.count));
      const pokemons = await Promise.all(
        data.results.map(async i => await api.getPokemonByName(i.name)),
      );
      dispatch(pokemonsFetchingSuccess(pokemons));
    } catch (e) {
      dispatch(pokemonsFetchingError('Что-то пошло не так, попробуйте снова.'));
    }
  };
