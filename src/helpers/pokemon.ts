import { Pokemon } from 'pokenode-ts';

export const getTypeNamesFromPokemon = (pokemon: Pokemon) => {
  return pokemon.types.map(j => j.type.name);
};

export const filterPokemonsByName = (pokemons: Pokemon[], search: string) => {
  return pokemons.filter(p => p.name.startsWith(search.toLowerCase()));
};
