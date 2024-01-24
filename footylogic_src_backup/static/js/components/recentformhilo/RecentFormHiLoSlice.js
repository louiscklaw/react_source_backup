import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const RecentFormHiLoSlice = createSlice({
  name: "recentfromhilo",
  initialState: {
    // selectedTab:'had',
    homeSelectedOptionId: 2,
    awaySelectedOptionId: 3,
  },
  reducers: {
    // selectTab:(state,action)=>{
    //   console.log(action.payload)
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

export const { setOption } = RecentFormHiLoSlice.actions;

// export const selectSelectedTab = state => state.recentfromhilo.selectedTab;

export default RecentFormHiLoSlice.reducer;
