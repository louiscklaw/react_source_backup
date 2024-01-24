import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const StandingsSlice = createSlice({
  name: "standings",
  initialState: {
    selectedTab: 1,
    selectedSeasonFilter: 1,
    selectedHDCFilter: 1,
    selectedHiLoFTFilter: 1,
    selectedHiLoHTFilter: 1,
    selectedBetTypeFilter: 2,
    selectedCSGOptionId: 1,
  },
  reducers: {
    setTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setFilter: (state, action) => {
      if (action.payload.filter === "season") {
        state.selectedSeasonFilter = action.payload.value;
      } else if (action.payload.filter === "hdcType") {
        state.selectedHDCFilter = action.payload.value;
      } else if (action.payload.filter === "hiloFT") {
        state.selectedHiLoFTFilter = action.payload.value;
      } else if (action.payload.filter === "hiloHT") {
        state.selectedHiLoHTFilter = action.payload.value;
      } else if (action.payload.filter === "betType") {
        state.selectedBetTypeFilter = action.payload.value;
      }
    },
    csGraphOptionChanged: (state, action) => {
      if (action.payload && !isNaN(action.payload)) {
        state.selectedCSGOptionId = Number(action.payload);
      }
    },
  },
});

export const { setTab, setFilter, csGraphOptionChanged } =
  StandingsSlice.actions;

export default StandingsSlice.reducer;
