import { Pokemon } from 'pokenode-ts';

export const getTypeNamesFromPokemon = (pokemon: Pokemon) => {
  return pokemon.types.map(j => j.type.name);
};

export const getUniqTypeNamesFromPokemonList = (pokemons: Pokemon[]) => {
  const allTypes = pokemons.reduce((acc, curr) => {
    return [...acc, ...getTypeNamesFromPokemon(curr)];
  }, [] as string[]);

  return [...new Set(allTypes)];
};

export const filterPokemonsByName = (pokemons: Pokemon[], search: string) => {
  if (!search) return pokemons;
  return pokemons.filter(p => p.name.indexOf(search.toLowerCase()) !== -1);
};

export const filterPokemonsByTypeList = (
  pokemons: Pokemon[],
  types: string[],
) => {
  if (!types.length) return pokemons;

  return pokemons.filter(p =>
    getTypeNamesFromPokemon(p).some(i => types.indexOf(i) !== -1),
  );
};

export const filterPokemons = (
  pokemons: Pokemon[],
  search: string,
  activeTypes: string[],
) => {
  let filteredPokemons = pokemons;
  filteredPokemons = filterPokemonsByTypeList(filteredPokemons, activeTypes);
  filteredPokemons = filterPokemonsByName(filteredPokemons, search);
  return filteredPokemons;
};
