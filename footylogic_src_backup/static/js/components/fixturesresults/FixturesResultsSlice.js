import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { tournament } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";
import { getTimeZoneOffset } from "../../sharedfiles/helper";
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";
import { setLoader, metaData } from "../../AppSlice";

export const FixturesResultsSlice = createSlice({
  name: "fixturesresults",
  initialState: {
    data: [],
    carouselData: [],
    selectedCarouselItem: {},
    fixtureFilters: {},
    selectedSeason: "1",
    selectedLeague: "1",
    selectedHHAD: "1",
    selectedHDC: "1",
    selectedCorner: "2",
    selectedOption: "1",
    seasons: [],
    selectedFRSeason: {},
    loaderFR: false,
    selectedTabId: 2,
    isSlideIndex: true,
    slideIndex: 0,
    defaultCornersHiloValue: 9.5,
  },
  reducers: {
    setSelectedTabId: (state, action) => {
      state.selectedTabId = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCarouselData: (state, action) => {
      state.carouselData = action.payload;
      //state.selectedCarouselItem = action.payload[action.payload.length-1];
    },
    selectCarouselItem: (state, action) => {
      state.selectedCarouselItem = action.payload;
    },
    setFixtureResultsFilters: (state, action) => {
      state.fixtureFilters = action.payload;
    },
    setFilterOptions: (state, action) => {
      switch (action.payload.key) {
        case "Season":
          state.selectedSeason = action.payload.value;
          break;
        case "Team_League":
          state.selectedLeague = action.payload.value;
          break;
        case "Team_Corner":
          state.selectedCorner = action.payload.value;
          break;
        case "Team_HDC":
          state.selectedHDC = action.payload.value;
          break;
        case "Team_HHAD":
          state.selectedHHAD = action.payload.value;
          break;
        case "Options":
          state.selectedOption = action.payload.value;
        default:
      }
    },
    generateCarouselData: (state, action) => {
      let selectedSeason = action.payload;
      //let startDate = new Date(selectedSeason.SeasonFromDate);
      //  let endDate = new Date(selectedSeason.SeasonToDate);
      let doOperation = true;
      let currentDate = new Date();
      let carouselData = [];
      let selectedCarouselItem = {};
      state.isSlideIndex = true;
      //  while(doOperation){
      let idx = 0;
      for (var item of selectedSeason.fixtureRange) {
        idx = idx + 1;
        var dt = new Date(item.trim());
        carouselData.push({
          id: dt.getFullYear() + "" + (dt.getMonth() + 1),
          fullDate:
            dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2), //+ "-" + dt.getDate()
          date: dt.getDate(),
          month: dt.getMonth() + 1,
          year: dt.getFullYear(),
        });
        if (
          currentDate.getMonth() === dt.getMonth() &&
          currentDate.getFullYear() === dt.getFullYear()
        ) {
          selectedCarouselItem = {
            id: dt.getFullYear() + "" + (dt.getMonth() + 1),
            fullDate:
              dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2), //+ "-" + dt.getDate()
            date: dt.getDate(),
            month: dt.getMonth() + 1,
            year: dt.getFullYear(),
          };
          state.slideIndex = idx;
        }
      }
      // startDate.setMonth(startDate.getMonth() + (carouselData.length===0?0:1));

      // if(startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()){
      //   doOperation =false;
      // }
      // }
      if (Object.keys(selectedCarouselItem).length === 0) {
        state.selectedCarouselItem = carouselData[0];
        state.slideIndex = 0;
      } else {
        state.selectedCarouselItem = selectedCarouselItem;
      }
      state.carouselData = carouselData;
    },
    setLeagueSeason: (state, action) => {
      state.selectedFRSeason = action.payload;
    },
    setSeasonsData: (state, action) => {
      state.seasons = action.payload;
      state.selectedFRSeason = action.payload[0];
    },
    setSlideIndex: (state, action) => {
      state.isSlideIndex = action.payload;
    },
  },
});

export const {
  setSelectedTabId,
  setData,
  setCarouselData,
  selectCarouselItem,
  setFixtureResultsFilters,
  setFilterOptions,
  setSeasonsData,
  generateCarouselData,
  setLeagueSeason,
  setSlideIndex,
} = FixturesResultsSlice.actions;

export const getFixturesResultsData = (params, languageId) => (dispatch) => {
  dispatch(setData({}));
  dispatch(setLoader(true));
  var url = "";
  if (params.isLeague) {
    url =
      tournament.getFixturesResults +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&competitionId=" +
      params.compId +
      "&seasonId=" +
      params.seasonId +
      "&date=" +
      params.date +
      "&tzOffSet=" +
      getTimeZoneOffset();
  } else {
    url =
      tournament.getTeamFixturesResults +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&teamId=" +
      params.teamId +
      "&SeasonId=" +
      params.selectedSeason +
      "&OptionId=" +
      params.selectedOption +
      "&HHAD=" +
      params.selectedHHAD +
      "&HDC=" +
      params.selectedHDC +
      "&LeagueId=" +
      params.selectedLeague +
      "&Corner=" +
      params.selectedCorner +
      "&tabId=" +
      params.selectedTabId;
    // url = tournament.getTeamFixturesResults+'?languageId='+languageId+'&channelId='+channelId+'&teamId='+params.teamId+'&date='+params.date+'&tzOffSet='+getTimeZoneOffset();
  }

  apiCaller(url, "GET", {}).then((response) => {
    if (response && response.data != undefined && response.data) {
      dispatch(setData(response.data));
      dispatch(setLoader(false));
      dispatch(
        setComepetitionAndDate({
          competitionName: response.data.hasOwnProperty("competitionName")
            ? response.data.competitionName
            : response.data.teamName,
          lastUpdated: response.data.lastUpdated,
        }),
      );
      dispatch(
        metaData(
          params.isLeague ? "FixturesResults" : "FixturesResult",
          response.data.hasOwnProperty("competitionName")
            ? response.data.competitionName
            : response.data.teamName,
        ),
      );
    } else {
      dispatch(setData({}));
      dispatch(setLoader(false));
      dispatch(
        setComepetitionAndDate({
          competitionName: "",
          lastUpdated: "",
        }),
      );
      // dispatch(setLoader(false));
      //dispatch(setBanner(response.data));
    }
  });
};

export const getFixtureResultsFilters =
  (competitionId, languageId, params) => (dispatch) => {
    var url =
      tournament.fixtureResultsFilters +
      "?channelId=" +
      channelId +
      "&languageId=" +
      languageId +
      "&competitionId=" +
      competitionId +
      "&teamId=" +
      params.teamId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response && response.data != undefined && response.data) {
        dispatch(setFixtureResultsFilters(response.data));
        for (var property in response.data) {
          if (property === "Options") {
            params.selectedOption = response.data[property][0].id;
          } else if (property == "Team_HDC") {
            params.selectedHDC = response.data[property][0].id;
          } else if (property == "Team_Corner") {
            params.selectedCorner = response.data[property][1].id;
          } else if (property == "Team_HHAD") {
            params.selectedHHAD = response.data[property][0].id;
          }
          if (property === "Team_Corner") {
            dispatch(
              setFilterOptions({
                key: property,
                value: response.data[property][1].id,
              }),
            );
          } else {
            dispatch(
              setFilterOptions({
                key: property,
                value: response.data[property][0].id,
              }),
            );
          }
          if (property === "Season") {
            params.selectedSeason = response.data[property][0].id;
          }
        }
        dispatch(getFixturesResultsData(params, languageId));
      }
    });
  };

export const getFixturesResultsSeasons = (params, languageId) => (dispatch) => {
  var url =
    tournament.getSeasons +
    "?channelId=" +
    channelId +
    "&languageId=" +
    languageId +
    "&competitionId=" +
    params.compId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response && response.data != undefined && response.data.length > 0) {
      dispatch(setSeasonsData(response.data));
      dispatch(generateCarouselData(response.data[0]));
    } else {
      dispatch(setLoader(false));
    }
  });
};

export const bindStatusResults =
  (cornersArray, selectedCorner, txtFrom) => (dispatch) => {
    for (var i = 0; i < cornersArray.length; i++) {
      var val = false;
      if (cornersArray[i].line == selectedCorner.name && val == false) {
        val = true;
        if (txtFrom == "value") {
          return cornersArray[i].outcomeName;
        } else if (txtFrom == "class") {
          return cornersArray[i].outcomeName.toLowerCase().includes("h")
            ? "status High"
            : cornersArray[i].outcomeName.toLowerCase().includes("l")
              ? "status Low"
              : "";
        }
      }
    }
  };

export default FixturesResultsSlice.reducer;
