import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { languageId, defaultH2HFilterId } from "./sharedfiles/constants";
import { getBanner } from "./layouts/matchSlice";
import {
  setTabInfo,
  getTeamData,
} from "./components/playeranalysis/PlayerAnalysisSlice";
import { setSelectedOption } from "./components/hadhandicaptab/HADHandicapTabSlice";
import { common } from "./sharedfiles/EndpointConfig";
import { apiCaller } from "./api/apiCaller";
export const AppSlice = createSlice({
  name: "app",
  initialState: {
    selectedMainTab: "match",
    eventInfo: {
      countryId: "",
      competitionId: "",
      eventId: "",
    },
    tempEventInfo: {
      countryId: "",
      competitionId: "",
      eventId: "",
    },
    loader: true,
    staticKeyWords: {},
    languageId: languageId,
    configurations: {},
    disableLeagues: [],
    isEdisplay: false,
    metaDataInfo: {
      metaTitle: "",
      metaDescription: "",
      url: "",
    },
    metaDataURL: "https://statscentre.footylogic.com",
    intialLoad: false,
  },

  reducers: {
    setMainTab: (state, action) => {
      state.selectedMainTab = action.payload;
    },
    setEventId: (state, action) => {
      var data = {
        countryId: action.payload.countryId,
        competitionId: action.payload.competitionId,
        eventId: action.payload.eventId,
      };
      state.eventInfo = data;
      if (action.payload.countryId) {
        state.tempEventInfo = data;
      }
      // state.eventId = action.payload?action.payload:'';
    },
    setTempCountryInfo: (state, action) => {
      state.tempEventInfo.countryId = action.payload;
    },
    setLanguage: (state, action) => {
      state.languageId = action.payload;
    },
    setTempCompetitionInfo: (state, action) => {
      state.tempEventInfo.competitionId = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setStaticKeyWords: (state, action) => {
      state.staticKeyWords = action.payload;
    },
    setConfigurations: (state, action) => {
      state.configurations = action.payload;
    },
    setIntialLoader: (state, action) => {
      state.intialLoad = action.payload;
    },
    setDisableLeagues: (state, action) => {
      const { disable, tab } = action.payload;
      if (disable) {
        if (tab === "STATS") {
          state.disableLeagues = state.configurations.seasonalStats;
        } else if (tab === "PLAYERS") {
          state.disableLeagues = state.configurations.playerAnalysis;
        } else if (tab === "SUMMARY") {
          state.disableLeagues = state.configurations.summary;
        } else if (tab === "STATISTICS") {
          state.disableLeagues = state.configurations.bmStatistics;
        } else if (tab === "playerTab") {
          state.disableLeagues = state.configurations.teamPlayer;
        } else if (tab == "TopScorer") {
          state.disableLeagues = state.configurations.topScorer;
        } else {
          state.disableLeagues = state.configurations.seasonalStats;
        }
      } else {
        state.disableLeagues = [];
      }
    },
    setDisplayMode: (state, action) => {
      if (action.payload) document.body.classList.add("eDisplay");
      else document.body.classList.remove("eDisplay");
      state.isEdisplay = action.payload;
    },
    setMetaData: (state, action) => {
      const metaTitle = document.querySelector("title");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (action.payload.title) {
        state.metaDataInfo.metaTitle =
          state.staticKeyWords[action.payload.metaTitle];
        metaTitle.innerText = state.staticKeyWords[action.payload.metaTitle];
        ogTitle.content = state.staticKeyWords[action.payload.metaTitle];
      } else {
        state.metaDataInfo.metaTitle = action.payload.metaTitle;
        metaTitle.innerText = action.payload.metaTitle;
        ogTitle.content = action.payload.metaTitle;
      }
      state.metaDataInfo.metaDescription =
        state.staticKeyWords[action.payload.metaDescription];
      const metaDescription = document.querySelector(
        'meta[property="description"]',
      );
      metaDescription.content =
        state.staticKeyWords[action.payload.metaDescription];
      const ogDescription = document.querySelector(
        'meta[property="og:description"]',
      );
      ogDescription.content =
        state.staticKeyWords[action.payload.metaDescription];
    },
  },
});

export const {
  setMetaData,
  setMainTab,
  setEventId,
  setTempCountryInfo,
  setTempCompetitionInfo,
  setStaticKeyWords,
  setLoader,
  setLanguage,
  setConfigurations,
  setDisableLeagues,
  setDisplayMode,
  setIntialLoader,
} = AppSlice.actions;

export const getEvenId =
  (eventInfo, from, props, bannerData, tabInfo) => (dispatch) => {
    let modeValue = navigator.cookieEnabled
      ? localStorage.getItem("modeType")
      : null;

    dispatch(setSelectedOption(defaultH2HFilterId));
    dispatch(setEventId(eventInfo));
    if (from == "fromdropdown") {
      dispatch(getBanner(eventInfo.eventId, props.languageId));
      var path = window.location.pathname;

      path = path.split("/");
      console.log(path);
      path[3] = eventInfo.countryId;
      path[4] = eventInfo.competitionId;
      path[5] = eventInfo.eventId;

      if (window.location.pathname.includes("playeranalysis")) {
        // path[8] = (path[7] == 'home') ? eventInfo.homeTeamId : eventInfo.awayTeamId;
        // dispatch(setTabInfo({
        //   mainTab: path[7],
        //   teamId:(path[7] == 'home') ? eventInfo.homeTeamId : eventInfo.awayTeamId,
        //   subTab: tabInfo.subTab
        // }))
        // path = path.join("/")
        // props.history.push(path)
        // dispatch(getTeamData(tabInfo));
        return false;
      } else {
        path = path.join("/");
        props.history.push(path);
      }
    } else if (modeValue && modeValue !== undefined && modeValue === "BASIC") {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/matchcenter/" +
          eventInfo.countryId +
          "/" +
          eventInfo.competitionId +
          "/" +
          eventInfo.eventId +
          "/bmrecentforms",
      );
    } else if (
      modeValue &&
      modeValue !== undefined &&
      modeValue === "ADVANCE"
    ) {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/matchcenter/" +
          eventInfo.countryId +
          "/" +
          eventInfo.competitionId +
          "/" +
          eventInfo.eventId +
          "/htoh/recentform",
      );
    } else {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/matchcenter/" +
          eventInfo.countryId +
          "/" +
          eventInfo.competitionId +
          "/" +
          eventInfo.eventId +
          "/bmrecentforms",
      );
    }
  };

export const resetEventId = (text, toggleMode) => (dispatch) => {
  dispatch(
    setEventId({
      countryId: "",
      competitionId: "",
      eventId: "",
    }),
  );
  dispatch(setMainTab(text));
  dispatch(toggleMode(true));
};

export const reSetMainTab = () => (dispatch) => {
  var path = window.location.pathname;
  var partialUrl = path.includes("tournament")
    ? "tournament"
    : path.includes("htohsearch")
      ? "htohsearch"
      : "match";
  dispatch(setMainTab(partialUrl));
};

export const navigateToTournament =
  (competitionId, props, filterBy, from) => (dispatch) => {
    if (
      (filterBy == 2 && from == "tournament") ||
      (filterBy == 1 && from == "date")
    ) {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/tournament/league" +
          "/" +
          competitionId +
          "/standings",
      );
    }
  };

export function checkEdisplay() {
  let isDisplay = false;
  // if( (window.screen.width >1024 && window.screen.width <1360)){
  //     isDisplay=true;
  // }
  return isDisplay;
}

export const getConfigurations = () => (dispatch) => {
  dispatch(setIntialLoader(true));
  var url = common.getConfigurations;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data !== null && response.data) {
      dispatch(setIntialLoader(false));
      dispatch(setConfigurations(response.data.configurations));
    } else {
      dispatch(setConfigurations({}));
    }
  });
};

export const metaData = (name, title) => (dispatch) => {
  var data = {
    metaTitle: "",
    metaDescription: "",
    title: true,
  };
  var myObj = {
    League: {
      title: "footylogicStatsCenter",
      description: "tournament",
    },
    Match: {
      title: "footylogicStatsCenter",
      description: "matchList",
    },
    HtoH: {
      description: "HtoH",
    },

    RecentFormTab: {
      description: "recentForm",
    },
    TournamentLeague: {
      description: "leagueTable",
    },
    FixturesResults: {
      description: "fixturesResults",
    },
    TopScorer: {
      description: "topScorer",
    },
    Rules: {
      description: "rules",
    },
    SeasonalStats: {
      description: "seasonalStats",
    },
    playerAnalysis: {
      description: "playerAnalysis",
    },
    TeamName: {
      description: "leagueTable",
    },
    Players: {
      description: "playersStatistics",
    },
    TournamentSeasonalStats: {
      description: "leagueStatistics",
    },
    FixturesResult: {
      description: "fixturesResults",
    },
    TeamSeasonalStats: {
      description: "teamStatistics",
    },
    default: {
      title: "footylogicStatsCenter",
      description: "footylogicStatistics",
    },
  };
  data.metaDescription = myObj[name]?.description;
  if (title != null && title != undefined) {
    data.metaTitle = title;
    data.title = false;
    dispatch(setMetaData(data));
  } else {
    data.metaTitle = myObj[name]?.title;
    data.title = true;
    dispatch(setMetaData(data));
  }
};

export default AppSlice.reducer;
