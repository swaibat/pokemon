import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../pages/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
