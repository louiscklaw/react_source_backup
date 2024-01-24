import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { getTimeZoneOffset } from "../../sharedfiles/helper";
import { channelId } from "../../sharedfiles/constants";
import { matchCenter } from "../../sharedfiles/EndpointConfig";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    searchData: [],
    value: "",
    teamsList: [],
    filterBy: 2,
    isInProgress: false,
    loader: false,
  },
  reducers: {
    loadCourseSuccess: (state, action) => {
      state.searchData = action.payload;
    },
    teamSearch: (state, action) => {
      state.value = action.payload;
    },
    teamChange: (state, action) => {
      state.value = action.payload;
    },
    teamList: (state, action) => {
      state.temsList = action.payload;
    },
    setTeams: (state, action) => {
      state.teamsList = action.payload;
    },
    setFilter: (state, action) => {
      state.filterBy = action.payload;
      state.value = "";
    },
    setLoadingData: (state, action) => {
      state.isInProgress = !state.isInProgress;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const {
  loadCourseSuccess,
  teamSearch,
  teamChange,
  setTeams,
  setFilter,
  setEventId,
  setLoadingData,
  setLoader,
} = homeSlice.actions;

export const loadSearchData =
  (teamsList = [], teamName = "", filterBy = "", languageId) =>
  (dispatch) => {
    dispatch(setLoader(true));
    dispatch(loadCourseSuccess([]));
    var teamId = "";
    dispatch(setLoadingData());
    if (teamName !== null && teamsList.length > 0) {
      dispatch(teamSearch(teamName));
      teamsList.forEach(function (item, index) {
        if (item.teamName === teamName) {
          teamId = item.teamId;
        }
      });
    } else {
      dispatch(teamSearch(""));
    }
    var param =
      "sortById=" +
      filterBy +
      "&languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&tzOffSet=" +
      getTimeZoneOffset();
    if (teamId !== "" && teamId > 0) {
      param = param + "&teamId=" + teamId;
    }
    var url = matchCenter.getGames + "?" + param;
    apiCaller(url, "GET", {}).then((response) => {
      dispatch(setLoadingData());
      if (response && response.data !== null) {
        dispatch(setLoader(false));
        response.data.map((comp) => {
          comp.events.map((eve) => {
            if (eve.hasOwnProperty("awayForm") && eve.awayForm.length > 0) {
              eve.awayForm = eve.awayForm.split(",");
            } else {
              eve.awayForm = [];
            }
            if (eve.hasOwnProperty("homeForm") && eve.homeForm.length > 0) {
              eve.homeForm = eve.homeForm.split(",");
            } else {
              eve.homeForm = [];
            }
          });
        });
        dispatch(loadCourseSuccess(response.data));
      } else {
        dispatch(setLoader(false));
        dispatch(loadCourseSuccess([]));
      }
    });
  };

export const getTeamsList = (name, filterBy, languageId) => (dispatch) => {
  //const userRe = /^[A-Za-z0-9. ]+$/;
  const userRe = /^[-'A-Za-z0-9. \u4e00-\u9eff]{1,20}$/;
  if (userRe.test(name) || name === "") {
    dispatch(teamChange(name));
    if (name.length > 0) {
      var url =
        matchCenter.getTeamSearch +
        "?teamName=" +
        name +
        "&languageId=" +
        languageId;
      apiCaller(url, "GET", {}).then((response) => {
        if (response && response.data !== null && response.data.length > 0)
          dispatch(setTeams(response.data));
      });
    } else {
      dispatch(loadSearchData([], "", filterBy, languageId));
      dispatch(setTeams([]));
    }
  }
};

export const selectSearchData = (state) => state.home.searchData;
export const selectValue = (state) => state.home.value;
export const selectTeamsList = (state) => state.home.teamsList;
export const selectFilterBy = (state) => state.home.filterBy;
export const selectLoader = (state) => state.home.loader;
export const selectStaticWords = (state) => state.app.staticKeyWords;
export const selectLanguageId = (state) => state.app.languageId;
export default homeSlice.reducer;
