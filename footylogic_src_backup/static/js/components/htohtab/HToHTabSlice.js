import { createSlice } from "@reduxjs/toolkit";
// import { apiCaller } from '../../api/apiCaller';
// import { matchCenter } from '../../sharedfiles/EndpointConfig';
// import {languageId,channelId} from '../../sharedfiles/constants'

export const HToHTabSlice = createSlice({
  name: "htohtab",
  initialState: {
    selectedTab: "had",
  },
  reducers: {
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { selectTab } = HToHTabSlice.actions;

export const selectSelectedTab = (state) => state.home.selectedTab;

export default HToHTabSlice.reducer;
