import { Pokemon } from 'pokenode-ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string;
  isModalOpen: boolean;
  modalContent: Pokemon | null;
  offset: number;
  limit: number;
  totalCount: number;
  search: string;
}

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
  error: '',
  isModalOpen: false,
  modalContent: null,
  offset: 0,
  limit: 20,
  totalCount: 0,
  search: '',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    pokemonsFetching(state) {
      state.isLoading = true;
    },
    pokemonsFetchingSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.isLoading = false;
      state.error = '';
      state.pokemons = action.payload;
    },
    pokemonsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
    openPokemonsModal(state, action: PayloadAction<Pokemon>) {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closePokemonsModal(state) {
      state.isModalOpen = false;
      state.modalContent = null;
    },
    nextPage(state) {
      state.offset += state.limit;
    },
    prevPage(state) {
      if (state.offset - state.limit < 0) {
        state.offset = 0;
        return;
      }
      state.offset -= state.limit;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export default pokemonSlice.reducer;
