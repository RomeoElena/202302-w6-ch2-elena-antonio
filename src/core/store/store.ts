import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { characterReducer } from "../../features/characters/reducer/character.reducer";
import counterReducer from "../../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
