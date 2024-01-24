import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import { setLoader } from "../../AppSlice";

export const fetchhilolastencouters = createAsyncThunk(
  "hilo/lastencounters",
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
export const HiloCornersTabSlice = createSlice({
  name: "hilocorners",
  initialState: {
    hiLoLastEncounters: [],
    homeTeamName: "",
    awayTeamName: "",
    hiLo: {},
    firstHalfHad: {},
    hdcHad: {},
    options: [],
    selectedOption: {},
    fullTime: {},
    halfTime: {},
    cornersHiLo: [],
    data: {},
    ftHiLo: [],
    htHiLo: [],
    firstToScore: {},
    goalTimes: [],
    cornersPerGame: {},
    selectedOptionId: 1,
    totalGoals: [],
    teamsToScore: {},
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
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchhilolastencouters.pending]: (state, action) => {
      state.loader = true;
      state.hiLoLastEncounters = [];
      state.hiLo = {};
      state.cornersHiLo = [];
      state.ftHiLo = [];
      state.htHiLo = [];
      state.firstToScore = {};
      state.goalTimes = [];
      state.cornersPerGame = {};
      state.totalGoals = [];
      state.teamsToScore = {};
    },
    [fetchhilolastencouters.rejected]: (state, action) => {
      state.loader = false;
      state.hiLoLastEncounters = [];
      state.isData = action.payload.isData;
    },
    [fetchhilolastencouters.fulfilled]: (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload);
      state.loader = false;
      if (action.payload) {
        state.isData = action.payload.isData;
        state.data = action.payload;
        if (
          action.payload.h2hLast8Encounters &&
          action.payload.h2hLast8Encounters.length > 0
        ) {
          state.hiLoLastEncounters = action.payload.h2hLast8Encounters;
        }
        if (
          action.payload.recentEncounter &&
          Object.keys(action.payload.recentEncounter).length > 0
        ) {
          state.tableRecentResults = action.payload.recentEncounter;
        }
        if (
          action.payload.hiLo &&
          action.payload.hiLo.ftHiLo &&
          action.payload.hiLo.ftHiLo.length > 0
        ) {
          state.ftHiLo = action.payload.hiLo.ftHiLo;
        }
        if (
          action.payload.hiLo &&
          action.payload.hiLo.htHiLo &&
          action.payload.hiLo.htHiLo.length > 0
        ) {
          state.htHiLo = action.payload.hiLo.htHiLo;
        }
        if (
          action.payload.corners &&
          action.payload.corners.cornersHiLo &&
          action.payload.corners.cornersHiLo.length > 0
        ) {
          state.cornersHiLo = action.payload.corners.cornersHiLo;
        }
        if (
          action.payload.corners &&
          action.payload.corners.cornersPerGame &&
          Object.keys(action.payload.corners.cornersPerGame).length > 0
        ) {
          state.cornersPerGame = action.payload.corners.cornersPerGame;
        }
        if (
          action.payload.totalGoals &&
          action.payload.totalGoals.firstTeamToScore &&
          Object.keys(action.payload.totalGoals.firstTeamToScore).length > 0
        ) {
          state.firstToScore = action.payload.totalGoals.firstTeamToScore;
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
          action.payload.totalGoals &&
          action.payload.totalGoals.goalTimes &&
          Object.keys(action.payload.totalGoals.goalTimes).length > 0
        ) {
          state.goalTimes = action.payload.totalGoals.goalTimes;
        }
        if (
          action.payload.totalGoals &&
          action.payload.totalGoals.teamsToScore &&
          Object.keys(action.payload.totalGoals.teamsToScore).length > 0
        ) {
          state.teamsToScore = action.payload.totalGoals.teamsToScore;
        }
        if (
          action.payload.totalGoals &&
          action.payload.totalGoals.totalGoalsAnalysis &&
          action.payload.totalGoals.totalGoalsAnalysis.length > 0
        ) {
          state.totalGoals = action.payload.totalGoals.totalGoalsAnalysis;
        }
        // if(action.payload.handicap && action.payload.handicap.hdcHad && Object.keys(action.payload.handicap.hdcHad).length>0){
        //   state.hdcHad = action.payload.handicap.hdcHad;
        // }
        // if(action.payload.correctScoreHaFu && action.payload.correctScoreHaFu.fullTime && Object.keys(action.payload.correctScoreHaFu.fullTime).length>0){
        //   state.fullTime = action.payload.correctScoreHaFu.fullTime;
        // }
        // if(action.payload.correctScoreHaFu && action.payload.correctScoreHaFu.halfTime && Object.keys(action.payload.correctScoreHaFu.halfTime).length>0){
        //   state.halfTime = action.payload.correctScoreHaFu.halfTime;
        // }
        // if(action.payload.correctScoreHaFu && action.payload.correctScoreHaFu.haFu && action.payload.correctScoreHaFu.haFu.length>0){
        //   state.haFu = action.payload.correctScoreHaFu.haFu;
        // }
      }
    },
  },
});

export const { setOptions, setSelectedOption } = HiloCornersTabSlice.actions;

export const selectBannerData = (state) => state.home.bannerData;

export default HiloCornersTabSlice.reducer;
