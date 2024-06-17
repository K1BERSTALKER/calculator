import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator/calculatorSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
