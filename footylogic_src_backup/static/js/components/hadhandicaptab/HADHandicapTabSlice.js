import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const fetchh2hlastencouters = createAsyncThunk(
  "h2h/lastencounters",
  async (ids, thunkAPI) => {
    let url =
      matchCenter.getH2hInfo +
      "?languageId=" +
      ids.languageId +
      "&channelId=" +
      channelId +
      "&eventId=" +
      ids.eventId +
      "&marketGroupId=" +
      ids.marketGroupId +
      "&optionId=" +
      ids.optionId +
      "&mode=" +
      (ids.isBasic ? 1 : 2);
    const response = await apiCaller(url, "GET", {});
    return response.data;
  },
);
export const HADHandicapTabSlice = createSlice({
  name: "hadhandicap",
  initialState: {
    h2hLastEncounters: [],
    homeTeamName: "",
    awayTeamName: "",
    had: {},
    firstHalfHad: {},
    hdcHad: {},
    options: [],
    selectedOption: {},
    fullTime: {},
    halfTime: {},
    haFu: [],
    goalsPerGame: {},
    hdc: [],
    selectedOptionId: 1,
    tableRecentResults: {},
    loader: true,
    isData: true,
  },
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload;
      state.selectedOption = action.payload[0];
    },
    setSelectedOption: (state, action) => {
      state.selectedOptionId = action.payload;
    },
  },
  extraReducers: {
    [fetchh2hlastencouters.pending]: (state, action) => {
      state.loader = true;
      state.h2hLastEncounters = [];
      state.had = {};
      state.firstHalfHad = {};
      state.hdcHad = {};
      state.fullTime = {};
      state.halfTime = {};
      state.haFu = [];
      state.goalsPerGame = {};
      state.hdc = [];
      state.tableRecentResults = {};
    },
    [fetchh2hlastencouters.rejected]: (state, action) => {
      state.loader = false;
      state.h2hLastEncounters = [];
      state.isData = action.payload.isData;
    },
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchh2hlastencouters.fulfilled]: (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload);

      state.loader = false;
      if (action.payload) {
        state.isData = action.payload.isData;
        if (
          action.payload.h2hLast8Encounters &&
          action.payload.h2hLast8Encounters.length > 0
        ) {
          state.h2hLastEncounters = action.payload.h2hLast8Encounters;
        }
        if (
          action.payload.recentEncounter &&
          Object.keys(action.payload.recentEncounter).length > 0
        ) {
          state.tableRecentResults = action.payload.recentEncounter;
        }
        if (
          action.payload.homeTeamName &&
          action.payload.homeTeamName.length > 0
        ) {
          state.homeTeamName = action.payload.homeTeamName;
        }
        if (
          action.payload.awayTeamName &&
          action.payload.awayTeamName.length > 0
        ) {
          state.awayTeamName = action.payload.awayTeamName;
        }
        if (
          action.payload.homeAwayDraw &&
          action.payload.homeAwayDraw.had &&
          Object.keys(action.payload.homeAwayDraw.had).length > 0
        ) {
          state.had = action.payload.homeAwayDraw.had;
        }
        if (
          action.payload.homeAwayDraw &&
          action.payload.homeAwayDraw.firstHalfHad &&
          Object.keys(action.payload.homeAwayDraw.firstHalfHad).length > 0
        ) {
          state.firstHalfHad = action.payload.homeAwayDraw.firstHalfHad;
        }
        if (
          action.payload.homeAwayDraw &&
          action.payload.homeAwayDraw.goalsPerGame &&
          Object.keys(action.payload.homeAwayDraw.goalsPerGame).length > 0
        ) {
          state.goalsPerGame = action.payload.homeAwayDraw.goalsPerGame;
        }
        if (
          action.payload.handicap &&
          action.payload.handicap.hdcHad &&
          Object.keys(action.payload.handicap.hdcHad).length > 0
        ) {
          state.hdcHad = action.payload.handicap.hdcHad;
        }
        if (
          action.payload.handicap &&
          action.payload.handicap.hdc &&
          action.payload.handicap.hdc.length > 0
        ) {
          var hdcData = [];
          // var hdcresponseData = {"hdc":[
          //   {"outcomeName":"Full Win","homeTeamGoals":2,"awayTeamGoals":1},
          //   {"outcomeName":"Half Win","homeTeamGoals":2,"awayTeamGoals":1},
          //   {"outcomeName":"Half Loss","homeTeamGoals":1,"awayTeamGoals":2},
          //   {"outcomeName":"Draw","homeTeamGoals":1,"awayTeamGoals":1},
          //   {"outcomeName":"Full Loss","homeTeamGoals":0,"awayTeamGoals":2}]}
          for (var item of action.payload.handicap.hdc) {
            //action.payload.handicap.hdc
            hdcData.push({
              outcomeName: item.outcomeName,
              homeGoals: item.homeTeamGoals,
              awayGoals: item.awayTeamGoals,
            });
          }
          state.hdc = hdcData;
        }
        if (
          action.payload.correctScoreHaFu &&
          action.payload.correctScoreHaFu.fullTime &&
          Object.keys(action.payload.correctScoreHaFu.fullTime).length > 0
        ) {
          state.fullTime = action.payload.correctScoreHaFu.fullTime;
        }
        if (
          action.payload.correctScoreHaFu &&
          action.payload.correctScoreHaFu.halfTime &&
          Object.keys(action.payload.correctScoreHaFu.halfTime).length > 0
        ) {
          state.halfTime = action.payload.correctScoreHaFu.halfTime;
        }
        if (
          action.payload.correctScoreHaFu &&
          action.payload.correctScoreHaFu.haFu &&
          action.payload.correctScoreHaFu.haFu.length > 0
        ) {
          state.haFu = action.payload.correctScoreHaFu.haFu;
        }
      } else {
        state.h2hLastEncounters = [];
      }
    },
  },
});

export const { setBanner, setWinBest, setOptions, setSelectedOption } =
  HADHandicapTabSlice.actions;

export const selectBannerData = (state) => state.home.bannerData;

export default HADHandicapTabSlice.reducer;
