import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";

export const MatchCenterSlice = createSlice({
  name: "matchcenter",
  initialState: {
    bannerData: {},
    winPredictorData: {},
    bestBetData: {},
    selectedTab: "RF",
    lastEncountersOptions: [],
  },
  reducers: {
    // setBanner: (state, action) => {
    //     state.bannerData = action.payload;
    // },
    setWinBest: (state, action) => {
      state.winPredictorData = action.payload.winData;
      state.bestBetData = action.payload.bestData;
      state.lastEncountersOptions = action.payload.lastEncountersOptions;
    },
    resetWinBest: (state, action) => {
      state.winPredictorData = {};
      state.bestBetData = {};
      state.lastEncountersOptions = [];
    },
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setBanner, setWinBest, selectTab, resetWinBest } =
  MatchCenterSlice.actions;

// export const getBanner = () => dispatch => {
//     var url = matchCenter.getBanner+'?languageId='+languageId+'&channelId='+channelId+'&eventId=1';
//     apiCaller(url, 'GET', {}).then(response => {
//       if(response.data !== null && response.data)
//         dispatch(setBanner(response.data));
//     });

// }

export const getWinBest = (eventId, languageId) => (dispatch) => {
  dispatch(resetWinBest());
  var url =
    matchCenter.getWinBest +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&eventId=" +
    eventId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data !== null && response.data) {
      var payloadData = {
        winData: {},
        bestData: {},
        lastEncountersOptions: [],
      };
      if (response.data.winPredictor) {
        payloadData.winData = response.data.winPredictor;
      }
      if (response.data.bestBet) {
        payloadData.bestData = response.data.bestBet;
      }
      if (response.data.options && response.data.options.length > 0) {
        payloadData.lastEncountersOptions = response.data.options;
      }
      dispatch(setWinBest(payloadData));
    }
    //dispatch(setBanner(response.data));
  });
};

export const selectBannerData = (state) => state.home.bannerData;

export default MatchCenterSlice.reducer;
