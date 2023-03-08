import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/PokemonSlice';

const rootReducer = combineReducers({
  pokemonReducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
