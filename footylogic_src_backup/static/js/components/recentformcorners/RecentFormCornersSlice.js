import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const RecentFormCornersSlice = createSlice({
  name: "recentfromcorners",
  initialState: {
    // selectedTab:'had',
    homeSelectedOptionId: 2,
    awaySelectedOptionId: 3,
  },
  reducers: {
    // selectTab:(state,action)=>{
    //   state.selectedTab = action.payload;
    // }
    setOption: (state, action) => {
      if (action.payload.type === "home" && Number(action.payload.id) > 0) {
        state.homeSelectedOptionId = Number(action.payload.id);
      }
      if (action.payload.type === "away" && Number(action.payload.id) > 0) {
        state.awaySelectedOptionId = Number(action.payload.id);
      }
    },
  },
});

export const { setOption } = RecentFormCornersSlice.actions;

// export const selectSelectedTab = state => state.recentfromcorners.selectedTab;

export default RecentFormCornersSlice.reducer;
