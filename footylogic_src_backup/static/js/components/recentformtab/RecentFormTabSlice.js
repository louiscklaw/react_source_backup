import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";
import { setLoader } from "../../AppSlice";

export const RecentFormTabSlice = createSlice({
  name: "recentfromtab",
  initialState: {
    selectedTab: "had",
    graphData: [],
    homeTeamData: [],
    awayTeamData: [],
    homeTeamName: "",
    awayTeamName: "",
    rfHadData: {},
    firstHalfHad: {},
    halfTime: [],
    fullTime: [],
    haFu: [],
    hdcHad: [],
    hdc: { homeTeam: {}, awayTeam: {} },
    fullTimeHiLo: [],
    halfTimeHiLo: [],
    firstToScore: {},
    goalTimes: [],
    totalGoalsAnalysis: [],
    cornersPerGame: {},
    cornersAgainstPerGame: {},
    goalsPerGame: {},
    homefhHiLo: [],
    homehiLo: [],
    awayfhHiLo: [],
    awayhiLo: [],
    homeCorners: [],
    awayCorners: [],
    selectedHomeCornerTab: "",
    selectedAwayCornerTab: "",
    selectedHomeFhHiloTab: "",
    selectedHomeHiloTab: "",
    selectedAwayFhHiloTab: "",
    selectedAwayHiloTab: "",
    selectedFilterOption: "",
    selectedFilterOptionFrom: "",
    cornersInfo: [],
    teamsToScore: [],
    defaultHomeOptionId: 1,
    defaultAwayOptionId: 1,
    homeOption: 1, //  by default setting the Home value
    awayOption: 1, // by default setting the away value
  },
  reducers: {
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    selectFilterOption: (state, action) => {
      state.selectedFilterOption = action.payload[0];
      state.selectedFilterOptionFrom = action.payload[1];
    },
    resetTableData: (state, action) => {
      state.homeTeamData = [];
      state.awayTeamData = [];
    },
    resetGraphsData: (state, action) => {
      // had
      state.rfHadData = {};
      state.firstHalfHad = {};
      state.halfTime = [];
      state.fullTime = [];
      state.haFu = [];
      state.goalsPerGame = {};

      // handcap
      state.hdcHad = [];
      state.hdc = { homeTeam: {}, awayTeam: {} };

      //HiLo
      state.fullTimeHiLo = [];
      state.halfTimeHiLo = [];
      state.firstToScore = {};
      state.goalTimes = [];
      state.totalGoalsAnalysis = [];

      //corners
      state.cornersPerGame = {};
      state.cornersAgainstPerGame = {};
      state.cornersInfo = [];
    },
    setGraphData: (state, action) => {
      // if(action.payload!=''){
      if (action.payload != "" && Object.keys(action.payload).length > 0) {
        if (state.selectedTab == "hilo") {
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "home"
          ) {
            var homefhHiLo = [];
            var homehiLo = [];
          }
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "away"
          ) {
            var awayfhHiLo = [];
            var awayhiLo = [];
          }
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "home"
          ) {
            // ((state.selectedFilterOptionFrom == '')?action.payload.recent8Results.homeTeam:action.payload).map((obj)=>{
            (
              action.payload.hasOwnProperty("recent8Results") &&
              action.payload.recent8Results.homeTeam
            ).map((obj) => {
              obj["fhHiLo"].map((item) => {
                var val = item.line;
                if (homefhHiLo.indexOf(val) == -1) {
                  homefhHiLo.push(val);
                }
              });
              state.homefhHiLo = homefhHiLo;
              state.selectedHomeFhHiloTab = homefhHiLo[0];

              obj["hiLo"].map((item) => {
                var val = item.line;
                if (homehiLo.indexOf(val) == -1) {
                  homehiLo.push(val);
                }
              });
              state.homehiLo = homehiLo;
              state.selectedHomeHiloTab = homehiLo[0];
            });
          }
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "away"
          ) {
            // ((state.selectedFilterOptionFrom == '')?action.payload.recent8Results.awayTeam:action.payload).map((obj)=>{
            (
              action.payload.hasOwnProperty("recent8Results") &&
              action.payload.recent8Results.awayTeam
            ).map((obj) => {
              obj["fhHiLo"].map((item) => {
                var val = item.line;
                if (awayfhHiLo.indexOf(val) == -1) {
                  awayfhHiLo.push(val);
                }
              });
              state.awayfhHiLo = awayfhHiLo;
              state.selectedAwayFhHiloTab = awayfhHiLo[0];

              obj["hiLo"].map((item) => {
                var val = item.line;
                if (awayhiLo.indexOf(val) == -1) {
                  awayhiLo.push(val);
                }
              });
              state.awayhiLo = awayhiLo;
              state.selectedAwayHiloTab = awayhiLo[0];
            });
          }
        } else if (state.selectedTab == "corners") {
          var homeCorners = [];
          var awayCorners = [];
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "home"
          ) {
            // ((state.selectedFilterOptionFrom == '')?action.payload.recent8Results.homeTeam:action.payload).map((obj)=>{
            (
              action.payload.hasOwnProperty("recent8Results") &&
              action.payload.recent8Results.homeTeam
            ).map((obj) => {
              obj["cornerHiLo"].map((item) => {
                var val = item.line;
                if (homeCorners.indexOf(val) == -1) {
                  homeCorners.push(val);
                }
              });
              state.homeCorners = homeCorners;
              state.selectedHomeCornerTab = homeCorners[0];
            });
          }
          if (
            state.selectedFilterOptionFrom == "" ||
            state.selectedFilterOptionFrom == "away"
          ) {
            // ((state.selectedFilterOptionFrom == '')?action.payload.recent8Results.awayTeam:action.payload).map((obj)=>{
            (
              action.payload.hasOwnProperty("recent8Results") &&
              action.payload.recent8Results.awayTeam
            ).map((obj) => {
              obj["cornerHiLo"].map((item) => {
                var val = item.line;
                if (awayCorners.indexOf(val) == -1) {
                  awayCorners.push(val);
                }
              });
              state.awayCorners = awayCorners;
              state.selectedAwayCornerTab = awayCorners[0];
            });
          }
        }

        if (state.selectedFilterOptionFrom == "") {
          state.graphData = action.payload;
          if (
            action.payload.hasOwnProperty("recent8Results") &&
            action.payload.recent8Results.hasOwnProperty("homeTeam")
          ) {
            state.homeTeamData = action.payload.recent8Results.homeTeam;
          }
          if (
            action.payload.hasOwnProperty("recent8Results") &&
            action.payload.recent8Results.hasOwnProperty("awayTeam")
          ) {
            state.awayTeamData = action.payload.recent8Results.awayTeam;
          }
          if (action.payload.hasOwnProperty("homeTeamName")) {
            state.homeTeamName = action.payload.homeTeamName;
          }
          if (action.payload.hasOwnProperty("awayTeamName")) {
            state.awayTeamName = action.payload.awayTeamName;
          }
        } else {
          // if(state.selectedFilterOptionFrom == 'home'){
          //   state.homeTeamData = action.payload;
          // }else if(state.selectedFilterOptionFrom == 'away'){
          //   state.awayTeamData = action.payload;
          // }
          if (
            action.payload.hasOwnProperty("recent8Results") &&
            action.payload.recent8Results.hasOwnProperty("homeTeam")
          ) {
            state.homeTeamData = action.payload.recent8Results.homeTeam;
          }
          if (
            action.payload.hasOwnProperty("recent8Results") &&
            action.payload.recent8Results.hasOwnProperty("awayTeam")
          ) {
            state.awayTeamData = action.payload.recent8Results.awayTeam;
          }
        }
      } else {
        if (
          state.selectedFilterOptionFrom == "" ||
          state.selectedFilterOptionFrom == "home"
        ) {
          state.homefhHiLo = [];
          state.homehiLo = [];
          state.homeCorners = [];
          state.selectedHomeFhHiloTab = "";
          state.selectedHomeHiloTab = "";
          state.selectedHomeCornerTab = "";
          state.homeTeamData = [];
        }
        if (
          state.selectedFilterOptionFrom == "" ||
          state.selectedFilterOptionFrom == "away"
        ) {
          state.awayfhHiLo = [];
          state.awayhiLo = [];
          state.awayCorners = [];
          state.selectedAwayFhHiloTab = "";
          state.selectedAwayHiloTab = "";
          state.selectedAwayCornerTab = "";
          state.awayTeamData = [];
        }
      }
    },
    setHadData: (state, action) => {
      if (
        action.payload.homeAwayDraw &&
        action.payload.homeAwayDraw.had &&
        Object.keys(action.payload.homeAwayDraw.had).length > 0
      ) {
        state.rfHadData = action.payload.homeAwayDraw.had;
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
        action.payload.correctScoreHaFu &&
        action.payload.correctScoreHaFu.fullTime &&
        Object.keys(action.payload.correctScoreHaFu.fullTime).length > 0 &&
        action.payload.correctScoreHaFu.fullTime.scores
      ) {
        state.fullTime = action.payload.correctScoreHaFu.fullTime.scores;
      }
      if (
        action.payload.correctScoreHaFu &&
        action.payload.correctScoreHaFu.halfTime &&
        Object.keys(action.payload.correctScoreHaFu.halfTime).length > 0 &&
        action.payload.correctScoreHaFu.halfTime.scores
      ) {
        state.halfTime = action.payload.correctScoreHaFu.halfTime.scores;
      }
      if (
        action.payload.correctScoreHaFu &&
        action.payload.correctScoreHaFu.haFu &&
        action.payload.correctScoreHaFu.haFu.length > 0
      ) {
        state.haFu = action.payload.correctScoreHaFu.haFu;
      }
    },
    setHandicapData: (state, action) => {
      if (
        action.payload.handicaps &&
        action.payload.handicaps.hdcHad &&
        action.payload.handicaps.hdcHad.length > 0
      ) {
        state.hdcHad = action.payload.handicaps.hdcHad;
      }
      if (
        action.payload.handicaps &&
        action.payload.handicaps.hdc &&
        action.payload.handicaps.hdc.length > 0
      ) {
        var hdcData = [];
        for (var item of action.payload.handicaps.hdc) {
          hdcData.push({
            outcomeName: item.outcomeName,
            homeGoals: item.homeTeamGoals,
            awayGoals: item.awayTeamGoals,
          });
        }
        state.hdc = hdcData;
      }
    },
    setCornersData: (state, action) => {
      if (
        action.payload.corners &&
        action.payload.corners.cornersPerGame &&
        Object.keys(action.payload.corners.cornersPerGame).length > 0
      ) {
        state.cornersPerGame = action.payload.corners.cornersPerGame;
      }
      if (
        action.payload.corners &&
        action.payload.corners.cornersAgainstPerGame &&
        Object.keys(action.payload.corners.cornersAgainstPerGame).length > 0
      ) {
        state.cornersAgainstPerGame =
          action.payload.corners.cornersAgainstPerGame;
      }
      if (
        action.payload.corners &&
        action.payload.corners.cornersInfo &&
        action.payload.corners.cornersInfo.length > 0
      ) {
        state.cornersInfo = action.payload.corners.cornersInfo;
      }
    },
    setHiLoData: (state, action) => {
      if (
        action.payload.hiLo &&
        action.payload.hiLo.fullTimeHiLo &&
        action.payload.hiLo.fullTimeHiLo.length > 0
      ) {
        state.fullTimeHiLo = action.payload.hiLo.fullTimeHiLo;
      }
      if (
        action.payload.hiLo &&
        action.payload.hiLo.halfTimeHiLo &&
        action.payload.hiLo.halfTimeHiLo.length > 0
      ) {
        state.halfTimeHiLo = action.payload.hiLo.halfTimeHiLo;
      }
      if (
        action.payload.totalGoals &&
        action.payload.totalGoals.firstTeamToScore &&
        Object.keys(action.payload.totalGoals.firstTeamToScore).length > 0
      ) {
        var data = action.payload.totalGoals.firstTeamToScore;
        var formatedData = {
          labels: [],
          homeTeam: [
            data.homeScoredFirst,
            data.homeConcededFirst,
            data.homeNoGoal,
          ],
          awayTeam: [
            data.awayScoredFirst,
            data.awayConcededFirst,
            data.awayNoGoal,
          ],
        };
        state.firstToScore = formatedData;
      }
      if (
        action.payload.totalGoals &&
        action.payload.totalGoals.goalTimes &&
        action.payload.totalGoals.goalTimes.length > 0
      ) {
        state.goalTimes = action.payload.totalGoals.goalTimes;
      }
      if (
        action.payload.totalGoals &&
        action.payload.totalGoals.totalGoalsAnalysis &&
        action.payload.totalGoals.totalGoalsAnalysis.length > 0
      ) {
        state.totalGoalsAnalysis = action.payload.totalGoals.totalGoalsAnalysis;
      }
      if (
        action.payload.totalGoals &&
        action.payload.totalGoals.teamsToScore &&
        action.payload.totalGoals.teamsToScore.length > 0
      ) {
        var tts = [];
        for (var item of action.payload.totalGoals.teamsToScore) {
          tts.push({
            outcomeName: item.result,
            homeGoals: item.awayGoals,
            awayGoals: item.homeGoals,
          });
        }
        state.teamsToScore = tts;
      }
    },
    selectDefaultHomeOptionId: (state, action) => {
      state.defaultHomeOptionId = action.payload;
    },
    selectDefaultAwayOptionId: (state, action) => {
      state.defaultAwayOptionId = action.payload;
    },
  },
});

export const {
  selectTab,
  setGraphData,
  resetGraphsData,
  setHadData,
  setHandicapData,
  setHiLoData,
  setCornersData,
  selectFilterOption,
  resetTableData,
  selectDefaultHomeOptionId,
  selectDefaultAwayOptionId,
} = RecentFormTabSlice.actions;

export const getGraphData =
  (
    tabname,
    optionId,
    from,
    homeTeamId,
    awayTeamId,
    languageId,
    tableSelectedOptions1,
  ) =>
  (dispatch) => {
    var tableSelectedOptions = tableSelectedOptions1;
    if (
      tableSelectedOptions1 == undefined ||
      Object.keys(tableSelectedOptions1).length == 0
    ) {
      tableSelectedOptions = {
        selectedHomeOptionId: 1,
        selectedAwayOptionId: 1,
      };
    }
    var mode = window.location.pathname.split("/").includes("recentform")
      ? 2
      : window.location.pathname.split("/").includes("bmrecentforms")
        ? 1
        : "";
    dispatch(setLoader(true));
    var marketGroupId =
      tabname == "had"
        ? 1
        : tabname == "handicap"
          ? 2
          : tabname == "hilo"
            ? 3
            : 4;
    // if(optionId){
    //   var teamId = from=='home'?homeTeamId:awayTeamId;
    //   var url = matchCenter.getLasRresults+'?languageId='+languageId+'&channelId='+channelId+'&teamId='+teamId+'&marketGroupId='+marketGroupId+'&optionId='+optionId+"&mode="+mode;
    // }else{
    var url =
      matchCenter.getRecentformInformation +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&homeTeamId=" +
      homeTeamId +
      "&awayTeamId=" +
      awayTeamId +
      "&marketGroupId=" +
      marketGroupId +
      "&optionIdH=" +
      tableSelectedOptions.selectedHomeOptionId +
      "&optionIdA=" +
      tableSelectedOptions.selectedAwayOptionId +
      "&mode=" +
      mode;
    // }
    dispatch(resetGraphsData());
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data != null && response.data) {
        dispatch(setLoader(false));
        dispatch(setGraphData(response.data));
        if (tabname === "had") {
          dispatch(setHadData(response.data));
        }
        //dispatch(setGraphData(response.data))
        if (tabname === "handicap") {
          dispatch(setHandicapData(response.data));
        }
        if (tabname === "hilo") {
          dispatch(setHiLoData(response.data));
        }
        if (tabname === "corners") {
          dispatch(setCornersData(response.data));
        }
      } else {
        dispatch(setLoader(false));
      }
    });
  };

export const loadData =
  (
    tabname,
    opt,
    from,
    homeTeamId,
    awayTeamId,
    languageId,
    tableSelectedOptions,
  ) =>
  (dispatch) => {
    opt = opt == undefined || opt == "" ? "" : opt;
    from = from == undefined || from == "" ? "" : from;
    dispatch(selectFilterOption([opt, from]));
    dispatch(selectTab(tabname));
    dispatch(setGraphData(""));
    dispatch(
      getGraphData(
        tabname,
        opt,
        from,
        homeTeamId,
        awayTeamId,
        languageId,
        tableSelectedOptions,
      ),
    );
  };

export const selectSelectedTab = (state) => state.home.selectedTab;

export default RecentFormTabSlice.reducer;
