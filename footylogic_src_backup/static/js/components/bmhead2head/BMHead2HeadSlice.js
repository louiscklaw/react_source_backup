import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { bmhead2head, matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const BMHead2HeadSlice = createSlice({
  name: "bmh2h",
  initialState: {
    pastSeasons: {},
    homeTeamTableData: {},
    awayTeamTableData: {},
    homeMarketGroupId: 1,
    awayMarketGroupId: 1,
    handicapColumns: [],
    staticKeyWords: {},
  },
  reducers: {
    setData: (state, action) => {
      var data = action.payload;
      if (data && data.hasOwnProperty("pastSeasons")) {
        state.pastSeasons = data.pastSeasons;
      }
      if (data && data.hasOwnProperty("recentEncounters")) {
        if (
          data.recentEncounters &&
          data.recentEncounters.hasOwnProperty("homeTeam")
        ) {
          state.homeTeamTableData = data.recentEncounters.homeTeam;
        }
        if (
          data.recentEncounters &&
          data.recentEncounters.hasOwnProperty("awayTeam")
        ) {
          state.awayTeamTableData = data.recentEncounters.awayTeam;
        }
      }
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.handicapColumns = [
        {
          column: staticKeyWords.event,
          key: "competitionName",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.date,
          key: "kickOff",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.home,
          key: "homeOrAway",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.away,
          key: "homeOrAway",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.ftScore,
          key: "fullTimeScore",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.htScore,
          key: "halfTimeScore",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.ftResult,
          key: "fullTimeResult",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.fHAD,
          key: "fullTimeHad",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.hdc,
          key: "hdc",
          isDiff: true,
          isHandicap: true,
        },
        {
          column: staticKeyWords.hHAD,
          key: "hHad",
          isDiff: true,
          isHandicap: true,
        },
      ];
    },
    setTeamData: (state, action) => {
      if (action.payload.type === "home") {
        state.homeTeamTableData.encounters = action.payload.data;
      } else {
        state.awayTeamTableData.encounters = action.payload.data;
      }
    },
    setPastSeasons: (state, action) => {
      state.pastSeasons = action.payload;
    },
  },
});

export const { setData, setTeamData, setTableHeaders, setPastSeasons } =
  BMHead2HeadSlice.actions;

export const getEventInfo = (homeTeamId, awayTeamId) => (dispatch) => {
  var marketGroupId = 1;
  var url =
    matchCenter.getEventInfo +
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
    "&mode=1";
  // if(optionId){
  //   var teamId = from=='home'?homeTeamId:awayTeamId;
  //   var url = matchCenter.getLasRresults+'?languageId='+languageId+'&channelId='+channelId+'&teamId='+teamId+'&marketGroupId='+marketGroupId+'&optionId='+optionId;
  // }else{
  //   var url = matchCenter.getRecentformInformation+'?languageId='+languageId+'&channelId='+channelId+'&homeTeamId='+homeTeamId+'&awayTeamId='+awayTeamId+'&marketGroupId='+marketGroupId+'&optionId='+1;
  // }
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data != null && response.data && Object.keys(response.data)) {
      dispatch(setData(response.data));
    }
  });
};
export const getTeamInfo = (type, teamId, marketGroupId) => (dispatch) => {
  var url =
    bmhead2head.getTeamInfo +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&teamId=" +
    teamId +
    "&marketGroupId=" +
    marketGroupId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data != null && response.data.length > 0) {
      var data = {
        type: type,
        data: response.data,
      };
      dispatch(setTeamData(data));
    }
  });
};
export const getPastSeason = (eventId) => (dispatch) => {
  var url =
    bmhead2head.pastSeasonInfo +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&eventId=" +
    eventId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data && Object.keys(response.data).length > 0) {
      dispatch(setPastSeasons(response.data));
    }
  });
};

export default BMHead2HeadSlice.reducer;
