import { createSlice } from "@reduxjs/toolkit";

export const PopOverSlice = createSlice({
  name: "popover",
  initialState: {
    activeIdx: {
      home: 0 + "_home",
      away: 0 + "_away",
    },
  },
  reducers: {
    setActiveIdx: (state, actions) => {
      if (actions.payload.isHome) {
        state.activeIdx.home = actions.payload.keyValue;
      } else {
        state.activeIdx.away = actions.payload.keyValue;
      }
    },
  },
});

export const { setActiveIdx } = PopOverSlice.actions;
export const setPopOverIdx = (status, isHome, keyValue) => (dipatch) => {
  dipatch(setActiveIdx({ status, isHome, keyValue }));
};

export default PopOverSlice.reducer;
