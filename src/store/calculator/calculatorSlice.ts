import { createSlice } from "@reduxjs/toolkit";

interface calculatorState {
  value: string;
  oldValue: string;
}

const initialState: calculatorState = {
  value: "",
  oldValue: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    appendValue: (state, action) => {
      state.value += action.payload;
    },
    calculate: (state) => {
      state.oldValue = state.value;
      state.value = eval(state.value).toString();
    },
    clear: (state) => {
      state.value = "";
      state.oldValue = "";
    },
    backspace: (state) => {
      if (state.value.length > 1) {
        state.value = state.value.slice(0, -1);
      } else {
        state.value = "0";
      }
    },
  },
});

export const { appendValue, calculate, clear, backspace } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
