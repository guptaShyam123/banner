import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name: "counter",
  initialState: 0,
  reducer: {
    add: (state) => {
      state = state + 1;
    },
    deletes: (state) => {
      state = state - 1;
    },
  },
});

export const { add, deletes } = Counterslice.actions;
export default Counterslice.reducer;
