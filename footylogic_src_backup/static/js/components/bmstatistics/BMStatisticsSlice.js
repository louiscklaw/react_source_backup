import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { statistics } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import { setLoader } from "../../AppSlice";

export const BMStatisticsSlice = createSlice({
  name: "bmstatistics",
  initialState: {
    marketsInfo: {},
    // seasonsList:[
    //   {"seasonId":1,"seasonName":"Current Season"},
    //   {"seasonId":2,"seasonName":"Last Season"}
    // ],
    selectedSeasonId: "",
    hiloFilters: {
      homeHalfTimeGoals: [],
      homeFullTimeGoals: [],
      awayHalfTimeGoals: [],
      awayFullTimeGoals: [],
    },
    cornersFilters: {
      homeCornersFullTimeGoals: [],
      awayCornersFullTimeGoals: [],
    },
    seledtedFilter: {
      homehalf: "",
      homefull: "",
      awayhalf: "",
      awayfull: "",
      homecornerfull: "",
      awaycornerfull: "",
    },
    leagueColumns: [],
    fhHadColumns: [],
    handicapColumns: [],
    oddEvenColumns: [],
    teamsToScoreColumns: [],
    htftColumns: [],
    goalsColumns: [],
    fhCorrectScoreColumns: [
      { column: "", key: "" },
      { column: "1:0", key: "score1_0" },
      { column: "2:0", key: "score2_0" },
      { column: "2:1", key: "score2_1" },
      { column: "0:0", key: "score0_0" },
      { column: "1:1", key: "score1_1" },
      { column: "2:2", key: "score2_2" },
      { column: "0:1", key: "score0_1" },
      { column: "0:2", key: "score0_2" },
      { column: "1:2", key: "score1_2" },
    ],
    hilpCornersColumns: {
      mainColumns: [
        { column: "Half Time", header: "Goal Line", rowspan: true },
        { column: "Full Time", header: "Goal Line", rowspan: false },
      ],
      subColumns: [
        { column: "", key: "" },
        { column: "H", key: "half.high" },
        { column: "L", key: "half.low" },
        { column: "", key: "" },
        { column: "H", key: "full.high" },
        { column: "L", key: "full.low" },
      ],
    },
    cornersHiloColumns: [],
    teamToScoreColumns: [],
    teamToWinColumns: [],
  },
  reducers: {
    setMarketsInfo: (state, action) => {
      state.marketsInfo = action.payload;
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.leagueColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.p, key: "teamPlayed" },
        { column: staticKeyWords.w, key: "teamWin" },
        { column: staticKeyWords.d, key: "teamDraw" },
        { column: staticKeyWords.l, key: "teamLoss" },
        { column: staticKeyWords.gf, key: "teamGF" },
        { column: staticKeyWords.ga, key: "teamGA" },
        { column: staticKeyWords.point, key: "points" },
        { column: staticKeyWords.wprc, key: "winpercentage" },
      ];
      state.fhHadColumns = [
        { column: "", key: "", class: "" },
        { column: staticKeyWords.w, key: "teamWin", class: "w-100px" },
        { column: staticKeyWords.d, key: "teamDraw", class: "w-100px" },
        { column: staticKeyWords.l, key: "teamLoss", class: "w-100px" },
      ];
      state.handicapColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.w, key: "teamWin" },
        { column: staticKeyWords.halfWin, key: "teamHalfWin" },
        { column: staticKeyWords.d, key: "teamDraw" },
        { column: staticKeyWords.halfLoss, key: "teamHalfLoss" },
        { column: staticKeyWords.l, key: "teamLoss" },
      ];
      state.oddEvenColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.odd, key: "teamOdd", class: "w-100px" },
        { column: staticKeyWords.even, key: "teamEven", class: "w-100px" },
      ];
      state.teamsToScoreColumns = [
        { column: "", key: "", class: "" },
        { column: "0", key: "neither_score", class: "w-100px" },
        { column: "1", key: "one_score", class: "w-100px" },
        { column: staticKeyWords.both, key: "both_Score", class: "w-100px" },
      ];
      state.htftColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.ww, key: "teamWinWin" },
        { column: staticKeyWords.wd, key: "teamWinDraw" },
        { column: staticKeyWords.wl, key: "teamWinLoss" },
        { column: staticKeyWords.dw, key: "teamDrawWin" },
        { column: staticKeyWords.dd, key: "teamDrawDraw" },
        { column: staticKeyWords.dl, key: "teamDrawLoss" },
        { column: staticKeyWords.lw, key: "teamLossWin" },
        { column: staticKeyWords.ld, key: "teamLossDraw" },
        { column: staticKeyWords.ll, key: "teamLossLoss" },
      ];
      state.goalsColumns = [
        { column: "", key: "" },
        { column: "0", key: "goalsZero" },
        { column: "1", key: "goalsOne" },
        { column: "2", key: "goalsTwo" },
        { column: "3", key: "goalsThree" },
        { column: "4", key: "goalsFour" },
        { column: "5", key: "goalsFive" },
        { column: "6", key: "goalsSix" },
        { column: "7+", key: "goalsSevenplus" },
        { column: staticKeyWords.average, key: "average" },
      ];
      state.hilpCornersColumns = {
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
      state.teamToScoreColumns = [
        { column: "", key: "" },
        { column: staticKeyWords.matches, key: "matches", class: "w-100px" },
        {
          column: staticKeyWords.scoreFirst,
          key: "scoreFirst",
          class: "w-100px",
        },
        {
          column: staticKeyWords.oppositScoreFirst,
          key: "oppositeScoreFirst",
          class: "w-150",
        },
      ];
      state.teamToWinColumns = [
        { column: staticKeyWords.scoreFirstAndWin, key: "" },
        {
          column: staticKeyWords.scoreFirst,
          key: "scoreFirst",
          class: "w-100px",
        },
        {
          column: staticKeyWords.oppositScoreFirst,
          key: "oppositeScoreFirst",
          class: "w-150",
        },
      ];
    },
    setHiloFilters: (state, action) => {
      state.hiloFilters = {
        homeHalfTimeGoals: action.payload.homeHalfTimeGoals,
        homeFullTimeGoals: action.payload.homeFullTimeGoals,
        awayHalfTimeGoals: action.payload.awayHalfTimeGoals,
        awayFullTimeGoals: action.payload.awayFullTimeGoals,
      };
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
    selectCornersFilter: (state, action) => {
      if (action.payload.text == "homecornerfull") {
        state.seledtedFilter.homecornerfull = action.payload.value;
      } else if (action.payload.text == "awaycornerfull") {
        state.seledtedFilter.awaycornerfull = action.payload.value;
      }
    },
    setCornersFilters: (state, action) => {
      state.cornersFilters = {
        homeCornersFullTimeGoals: action.payload.homeCornersFullTimeGoals,
        awayCornersFullTimeGoals: action.payload.awayCornersFullTimeGoals,
      };
    },
    setSeason: (state, action) => {
      state.selectedSeasonId = action.payload;
    },
  },
});

export const {
  setMarketsInfo,
  setHiloFilters,
  selectFilter,
  selectCornersFilter,
  setCornersFilters,
  setTableHeaders,
  setSeason,
} = BMStatisticsSlice.actions;

export const getMarketsInfo =
  (eventId, seasonId = 1, homeTeamId, awayTeamId, competitionId) =>
  (dispatch) => {
    dispatch(setSeason(seasonId));
    dispatch(setLoader(true));
    dispatch(setMarketsInfo({}));
    var url =
      statistics.getMarketsInfo +
      "?channelId=" +
      channelId +
      "&languageId=" +
      languageId +
      "&eventId=" +
      eventId +
      "&seasonId=" +
      seasonId +
      "&homeTeamId=" +
      homeTeamId +
      "&awayTeamId=" +
      awayTeamId +
      "&competitionId=" +
      competitionId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response && Object.keys(response.data).length > 0) {
        if (response.data.hasOwnProperty("hiLoTable")) {
          var homeHalfTimeGoals = [];
          var homeFullTimeGoals = [];
          var awayHalfTimeGoals = [];
          var awayFullTimeGoals = [];
          var data = response.data.hiLoTable;
          for (var key in data) {
            for (var subkey in data[key]) {
              for (var innersubkey in data[key][subkey]) {
                for (
                  var i = 0;
                  i < data[key][subkey][innersubkey].length;
                  i++
                ) {
                  var val = data[key][subkey][innersubkey][i].line;
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
          dispatch(
            selectFilter({ text: "homehalf", value: homeHalfTimeGoals[1] }),
          );
          dispatch(
            selectFilter({ text: "homefull", value: homeFullTimeGoals[1] }),
          );
          dispatch(
            selectFilter({ text: "awayhalf", value: awayHalfTimeGoals[1] }),
          );
          dispatch(
            selectFilter({ text: "awayfull", value: awayFullTimeGoals[1] }),
          );
          dispatch(
            setHiloFilters({
              homeHalfTimeGoals: homeHalfTimeGoals,
              homeFullTimeGoals: homeFullTimeGoals,
              awayHalfTimeGoals: awayHalfTimeGoals,
              awayFullTimeGoals: awayFullTimeGoals,
            }),
          );
        }
        if (response.data.hasOwnProperty("cornerHiLoTable")) {
          var homeCornersFullTimeGoals = [];
          var awayCornersFullTimeGoals = [];
          var data = response.data.cornerHiLoTable;
          for (var key in data) {
            for (var subkey in data[key]) {
              // for(var innersubkey in data[key][subkey]){
              for (var i = 0; i < data[key][subkey].length; i++) {
                var val = data[key][subkey][i].line;
                // if(innersubkey == 'fullTime'){
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
                // }
              }
              // }
            }
          }
          dispatch(
            selectCornersFilter({
              text: "homecornerfull",
              value: homeCornersFullTimeGoals[1],
            }),
          );
          dispatch(
            selectCornersFilter({
              text: "awaycornerfull",
              value: awayCornersFullTimeGoals[1],
            }),
          );
          dispatch(
            setCornersFilters({
              homeCornersFullTimeGoals: homeCornersFullTimeGoals,
              awayCornersFullTimeGoals: awayCornersFullTimeGoals,
            }),
          );
        }

        dispatch(setMarketsInfo(response.data));
        // dispatch(setLoader(false));
      } else {
        // dispatch(setMarketsInfo({}))
        // dispatch(setLoader(false));
      }
      dispatch(setLoader(false));
    });
  };

export default BMStatisticsSlice.reducer;
