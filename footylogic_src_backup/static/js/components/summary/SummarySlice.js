import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { summary } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const SummarySlice = createSlice({
  name: "summary",
  initialState: {
    h2hLastResultsTableData: [],
    lastResultsGraphData: {},
    hadGraphData: {},
    goalsPerGame: {},
    fhHiLoGraphData: [],
    fhHiLoTablesData: {},
    hiLoGraphData: [],
    hiLoTablesData: {},
    cornorsHiLoGraphData: [],
    cornorsHiLoTablesData: {},
    goalScoringTimesData: [],
    last8Results: {},
    hiloCornersColumns: {},
    seledtedFilter: {
      homehalf: "",
      homefull: "",
      awayhalf: "",
      awayfull: "",
      homecornerfull: "",
      awaycornerfull: "",
    },
    cornersFilters: {
      homeCornersFullTimeGoals: [],
      awayCornersFullTimeGoals: [],
    },
    hiloFilters: {
      homeHalfTimeGoals: [],
      homeFullTimeGoals: [],
      awayHalfTimeGoals: [],
      awayFullTimeGoals: [],
    },
    cornersHiloColumns: [],
  },
  reducers: {
    setLastResults: (state, action) => {
      state.data = action.payload;
      var data = action.payload;
      if (data.tableInfo && data.tableInfo.length > 0) {
        state.h2hLastResultsTableData = data.tableInfo;
      }
      if (data.chartInfo && Object.keys(data.chartInfo).length > 0) {
        if (
          data.chartInfo.homeAwayDraw &&
          Object.keys(data.chartInfo.homeAwayDraw).length > 0
        ) {
          state.hadGraphData = data.chartInfo.homeAwayDraw;
        }
        if (
          data.chartInfo.goalsPerGame &&
          Object.keys(data.chartInfo.goalsPerGame).length > 0
        ) {
          state.goalsPerGame = data.chartInfo.goalsPerGame;
        }
      }
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.hiloCornersColumns = {
        mainColumns: [
          {
            column: staticKeyWords.halfTime,
            header: "Goal Line",
            rowspan: true,
          },
          {
            column: staticKeyWords.fullTime,
            header: "Goal Line",
            rowspan: false,
          },
        ],
        subColumns: [
          { column: "", key: "" },
          { column: staticKeyWords.hi, key: "half.high" },
          { column: staticKeyWords.lo, key: "half.low" },
          { column: "", key: "" },
          { column: staticKeyWords.hi, key: "full.high" },
          { column: staticKeyWords.lo, key: "full.low" },
        ],
      };
      state.cornersHiloColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.hi, key: "", class: "w-100px" },
        { column: staticKeyWords.lo, key: "", class: "w-100px" },
      ];
    },

    setMarketsData: (state, action) => {
      var data = action.payload;
      // if(data.firstHalfHiLo && Object.keys(data.firstHalfHiLo).length>0){
      //   if(data.firstHalfHiLo.lastResults && data.firstHalfHiLo.lastResults.length>0){
      //     state.fhHiLoGraphData = data.firstHalfHiLo.lastResults;
      //   }
      //   if(data.firstHalfHiLo.seasonSummary && Object.keys(data.firstHalfHiLo.seasonSummary).length>0){
      //     state.fhHiLoTablesData = data.firstHalfHiLo.seasonSummary;
      //   }
      // }
      if (data.hiLo && Object.keys(data.hiLo).length > 0) {
        if (
          data.hiLo.lastResults &&
          Object.keys(data.hiLo.lastResults).length > 0
        ) {
          if (
            data.hiLo.lastResults.hasOwnProperty("fullTime") &&
            data.hiLo.lastResults.fullTime.length > 0
          ) {
            state.hiLoGraphData = data.hiLo.lastResults.fullTime;
          }
          if (
            data.hiLo.lastResults.hasOwnProperty("halfTime") &&
            data.hiLo.lastResults.halfTime.length > 0
          ) {
            state.fhHiLoGraphData = data.hiLo.lastResults.halfTime;
          }
        }
        if (
          data.hiLo.seasonSummary &&
          Object.keys(data.hiLo.seasonSummary).length > 0
        ) {
          state.hiLoTablesData = data.hiLo.seasonSummary;

          var homeHalfTimeGoals = [];
          var homeFullTimeGoals = [];
          var awayHalfTimeGoals = [];
          var awayFullTimeGoals = [];
          var hiloData = data.hiLo.seasonSummary;
          for (var key in hiloData) {
            for (var subkey in hiloData[key]) {
              for (var innersubkey in hiloData[key][subkey]) {
                for (
                  var i = 0;
                  i < hiloData[key][subkey][innersubkey].length > 0;
                  i++
                ) {
                  var val = hiloData[key][subkey][innersubkey][i].line;
                  if (innersubkey == "halfTime") {
                    if (key == "homeTeam") {
                      if (homeHalfTimeGoals.indexOf(val) == -1) {
                        homeHalfTimeGoals.push(val);
                      }
                    } else if (key == "awayTeam") {
                      if (awayHalfTimeGoals.indexOf(val) == -1) {
                        awayHalfTimeGoals.push(val);
                      }
                    }
                  } else if (innersubkey == "fullTime") {
                    if (key == "homeTeam") {
                      if (homeFullTimeGoals.indexOf(val) == -1) {
                        homeFullTimeGoals.push(val);
                      }
                    } else if (key == "awayTeam") {
                      if (awayFullTimeGoals.indexOf(val) == -1) {
                        awayFullTimeGoals.push(val);
                      }
                    }
                  }
                }
              }
            }
          }
          state.seledtedFilter.homehalf = homeHalfTimeGoals[1];
          state.seledtedFilter.homefull = homeFullTimeGoals[1];
          state.seledtedFilter.awayhalf = awayHalfTimeGoals[1];
          state.seledtedFilter.awayfull = awayFullTimeGoals[1];
          state.hiloFilters = {
            homeHalfTimeGoals: homeHalfTimeGoals,
            homeFullTimeGoals: homeFullTimeGoals,
            awayHalfTimeGoals: awayHalfTimeGoals,
            awayFullTimeGoals: awayFullTimeGoals,
          };
        }
      }
      if (data.cornerHiLo && Object.keys(data.cornerHiLo).length > 0) {
        if (
          data.cornerHiLo.lastResults &&
          data.cornerHiLo.lastResults.length > 0
        ) {
          state.cornorsHiLoGraphData = data.cornerHiLo.lastResults;
        }
        if (
          data.cornerHiLo.seasonSummary &&
          Object.keys(data.cornerHiLo.seasonSummary).length > 0
        ) {
          state.cornorsHiLoTablesData = data.cornerHiLo.seasonSummary;
          if (true) {
            var homeCornersFullTimeGoals = [];
            var awayCornersFullTimeGoals = [];
            var cornersData = data.cornerHiLo.seasonSummary;
            for (var key in cornersData) {
              for (var subkey in cornersData[key]) {
                //for(var innersubkey in cornersData[key][subkey]){
                for (var i = 0; i < cornersData[key][subkey].length; i++) {
                  var val = cornersData[key][subkey][i].line;
                  if (innersubkey == "fullTime") {
                    if (key == "homeTeam") {
                      if (homeCornersFullTimeGoals.indexOf(val) == -1) {
                        homeCornersFullTimeGoals.push(val);
                        // homeCornersFullTimeGoals.push("9.5")
                      }
                    } else if (key == "awayTeam") {
                      if (awayCornersFullTimeGoals.indexOf(val) == -1) {
                        awayCornersFullTimeGoals.push(val);
                        // awayCornersFullTimeGoals.push("9.5")
                      }
                    }
                  }
                }
                //}
              }
            }
            state.seledtedFilter.homecornerfull = homeCornersFullTimeGoals[1];
            state.seledtedFilter.awaycornerfull = awayCornersFullTimeGoals[1];
            state.cornersFilters = {
              homeCornersFullTimeGoals: homeCornersFullTimeGoals,
              awayCornersFullTimeGoals: awayCornersFullTimeGoals,
            };
          }
        }
      }
      if (data.goalTimes && data.goalTimes.length > 0) {
        state.goalScoringTimesData = data.goalTimes;
      }
    },
    setLast8Results: (state, action) => {
      state.last8Results = action.payload;
    },
    selectCornersFilter: (state, action) => {
      if (action.payload.text == "homecornerfull") {
        state.seledtedFilter.homecornerfull = action.payload.value;
      } else if (action.payload.text == "awaycornerfull") {
        state.seledtedFilter.awaycornerfull = action.payload.value;
      }
    },
    selectFilter: (state, action) => {
      if (action.payload.text == "homehalf") {
        state.seledtedFilter.homehalf = action.payload.value;
      } else if (action.payload.text == "homefull") {
        state.seledtedFilter.homefull = action.payload.value;
      } else if (action.payload.text == "awayhalf") {
        state.seledtedFilter.awayhalf = action.payload.value;
      } else if (action.payload.text == "awayfull") {
        state.seledtedFilter.awayfull = action.payload.value;
      }
    },
    resetHiloFilters: (state, action) => {
      state.hiloFilters = {
        homeHalfTimeGoals: [],
        homeFullTimeGoals: [],
        awayHalfTimeGoals: [],
        awayFullTimeGoals: [],
      };
      state.cornersFilters = {
        homeCornersFullTimeGoals: [],
        awayCornersFullTimeGoals: [],
      };
      state.cornorsHiLoTablesData = {};
      state.hiLoTablesData = {};
    },
  },
});

export const {
  setLastResults,
  setMarketsData,
  setLast8Results,
  setTableHeaders,
  selectCornersFilter,
  selectFilter,
  resetHiloFilters,
} = SummarySlice.actions;

export const getLastResults = (eventId, languageId) => (dispatch) => {
  var url =
    summary.getLastResults +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&eventId=" +
    eventId;
  apiCaller(url, "GET", {}).then((response) => {
    if (
      response.data !== null &&
      response.data &&
      Object.keys(response.data).length > 0
    ) {
      dispatch(setLastResults(response.data));
    }
  });
};

export const getMarketsInfo =
  (eventId, languageId, homeTeamId, awayTeamId, competitionId) =>
  (dispatch) => {
    var url =
      summary.getMarketsInfo +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&eventId=" +
      eventId +
      "&homeTeamId=" +
      homeTeamId +
      "&awayTeamId=" +
      awayTeamId +
      "&competitionId=" +
      competitionId;
    dispatch(resetHiloFilters());
    apiCaller(url, "GET", {}).then((response) => {
      console.log(response.data, "market");
      if (
        response.data !== null &&
        response.data &&
        Object.keys(response.data).length > 0
      ) {
        dispatch(setMarketsData(response.data));
      }
    });
  };

export const getLast8Results =
  (homeTeamId, awayTeamId, languageId, competitionId) => (dispatch) => {
    var url =
      summary.getResults +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&homeTeamId=" +
      homeTeamId +
      "&awayTeamId=" +
      awayTeamId +
      "&competitionId=" +
      competitionId;
    apiCaller(url, "GET", {}).then((response) => {
      if (
        response.data !== null &&
        response.data &&
        Object.keys(response.data).length > 0
      ) {
        dispatch(setLast8Results(response.data));
      } else dispatch(setLast8Results());
    });
  };

export default SummarySlice.reducer;
