import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../src/api/apiCaller";
import { channelId, defaultH2HFilterId } from "../../src/sharedfiles/constants";
import {
  common,
  htohsearch,
  matchCenter,
  tournament,
} from "../sharedfiles/EndpointConfig";
import { setTabData } from "../components/playeranalysis/PlayerAnalysisSlice";
import {
  navigateToLeague,
  selectCountry,
} from "../components/tournament/TournamentSlice";
import {
  setEventInfoCompetition,
  setEventInfoEvent,
} from "../components/htohsearch/HtoHSearchSlice";
import { setLoader, getEvenId, matchChange } from "../AppSlice";
import {
  fetchh2hlastencouters,
  setH2HLastEncounters,
} from "../components/htohoutput/htohOutputSlice";
import { setSelectedOption } from "../components/hadhandicaptab/HADHandicapTabSlice";

export const MatchSlice = createSlice({
  name: "match",
  initialState: {
    bannerData: {},
    countryList: [],
    competitionsList: [],
    eventList: [],
    homeTeamName: "",
    awayTeamName: "",
    homeTeamId: null,
    awayTeamId: null,
    allCountries: {},
    // allCountries:{},
    isAdvancedMode: true,
    winPredictorData: {},
    bestBetData: {},
    lastEncountersOptions: [],
    allSeasons: [],
    homePlayerAnalysis: "",
    awayPlayerAnalysis: "",
  },
  reducers: {
    setBanner: (state, action) => {
      state.bannerData = action.payload;
      state.homeTeamName = action.payload.homeTeamName;
      state.awayTeamName = action.payload.awayTeamName;
      state.homeTeamId = action.payload.homeTeamId;
      state.awayTeamId = action.payload.awayTeamId;
      state.homePlayerAnalysis = action.payload.homePlayerAnalysis;
      state.awayPlayerAnalysis = action.payload.awayPlayerAnalysis;
    },
    setWinBest: (state, action) => {
      state.winPredictorData = action.payload.winData;
      state.bestBetData = action.payload.bestData;
      state.lastEncountersOptions = action.payload.lastEncountersOptions;
    },
    setEventId: (state, action) => {
      state.eventId = action.payload ? action.payload : 57332;
      if (navigator.cookieEnabled) {
        localStorage.setItem("eventId", state.eventId);
      }
    },
    setCountryList: (state, action) => {
      state.countryList = action.payload;
    },
    setFormattedCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setCompetitionsList: (state, action) => {
      state.competitionsList = action.payload;
    },
    setEventList: (state, action) => {
      state.eventList = action.payload;
    },
    toggleMode: (state, action) => {
      // state.isAdvancedMode = !state.isAdvancedMode;
      state.isAdvancedMode = action.payload;
    },
    setSeasons: (state, action) => {
      state.allSeasons = action.payload;
    },
  },
});

export const {
  setBanner,
  setCountryList,
  setCompetitionsList,
  setEventList,
  setEventId,
  setWinBest,
  setFormattedCountries,
  toggleMode,
  setSeasons,
} = MatchSlice.actions;
export const getBanner = (eventId, languageId) => (dispatch) => {
  dispatch(setBanner({}));
  var url =
    matchCenter.getBanner +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&eventId=" +
    eventId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data !== null && response.data) {
      dispatch(setBanner(response.data));
    } else {
      dispatch(setBanner({}));
    }
  });
};

export const highlightTab = (tabname) => (dispatch) => {
  return window.location.pathname.includes(tabname) ? "active" : "";
};

export const getCountryList = (params, languageId, props) => (dispatch) => {
  dispatch(setEventList([]));
  dispatch(setCompetitionsList([]));
  var url =
    common.getCountries +
    "?channelId=" +
    channelId +
    "&languageId=" +
    languageId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data !== null && response.data) {
      dispatch(setCountryList(response.data));
      // dispatch(formCoutries(response.data))
      dispatch(
        getCompetitionsList(
          params.countryId,
          params.competitionId,
          "",
          languageId,
          "",
          "",
          props,
        ),
      );
    }
  });
};

export const getWinBest = (eventId, languageId, from) => (dispatch) => {
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
      if (from == "htohsearch") {
        dispatch(
          fetchh2hlastencouters({
            optionId: response.data.options[1].id,
            eventId: eventId,
            languageId: languageId,
          }),
        );
      }
    }
    //dispatch(setBanner(response.data));
  });
};

// export const formCoutries = (data) => dispatch => {
// if(data && data.length){
//   var obj = {};
//   for(var i=0;i<data.length/4;i++){
//     obj['array'+i]=[]
//   }
//   for(var i=0;i<Math.ceil((data.length/4));i++){
//     for(var j=i*4;j<(i+1)*4;j++){
//       if(data[j] != undefined){
//         obj['array'+i].push(data[j]);
//       }
//     }
//   }
//   dispatch(setFormattedCountries(obj))
// }
// }

export const getCompetitionsList =
  (countryId, competitionId, from, languageId, typeId, text, props) =>
  (dispatch) => {
    dispatch(setSelectedOption(defaultH2HFilterId));
    dispatch(setH2HLastEncounters({}));
    dispatch(setFormattedCountries({}));
    dispatch(setCompetitionsList([]));
    dispatch(setEventList([]));
    dispatch(setLoader(true));
    var categoryId =
      text === "league"
        ? 1
        : text === "cup"
          ? 2
          : text === "international"
            ? 3
            : 4;
    // if(typeId!='International'){
    var url;
    if (typeId != "2") {
      // if(from === 'tournament' || from==='search'){
      if (from === "tournament") {
        // url = tournament.getTournamentCompetitions+"?countryId="+countryId+"&languageId="+languageId+"&channelId="+channelId+"&categoryId="+categoryId;
        url =
          tournament.getTournamentCompetitions +
          "?languageId=" +
          languageId +
          "&channelId=" +
          channelId +
          "&categoryId=" +
          categoryId;
      } else if (from === "search") {
        url =
          common.getCompetitions +
          "?countryId=" +
          countryId +
          "&languageId=" +
          languageId +
          "&channelId=" +
          channelId +
          "&tabId=2";
      } else {
        url =
          common.getCompetitions +
          "?countryId=" +
          countryId +
          "&languageId=" +
          languageId +
          "&channelId=" +
          channelId +
          "&tabId=1";
      }
      apiCaller(url, "GET", {}).then((response) => {
        if (response.data !== null && response.data) {
          if (from == "tournament") {
            if (response.data && response.data.length) {
              var obj = {};
              for (var i = 0; i < response.data.length / 4; i++) {
                obj["array" + i] = [];
              }
              for (var i = 0; i < Math.ceil(response.data.length / 4); i++) {
                for (var j = i * 4; j < (i + 1) * 4; j++) {
                  if (response.data[j] != undefined) {
                    obj["array" + i].push(response.data[j]);
                  }
                }
              }
              dispatch(setFormattedCountries(obj));
              if (obj.hasOwnProperty("array0")) {
                // dispatch(getCompetitionsList('','','tournament',languageId,'',text))
                dispatch(
                  selectCountry({ country: "array0", index: "array00" }),
                );
              }
            }
            dispatch(setCompetitionsList(response.data[0].competitions));
          } else {
            dispatch(setCompetitionsList(response.data));
          }
          if (from === "search") {
            // dispatch(setCompetitionsList(response.data))
            // dispatch(getEventList(response.data[0].competitionId))
            // dispatch(setEventInfoCompetition(competitionId?competitionId:response.data[0].competitions.length?response.data[0].competitions[0].competitionId:''))
            dispatch(
              setEventInfoCompetition(
                competitionId ? competitionId : response.data[0].competitionId,
              ),
            );
          }
          if (from !== "tournament") {
            // else{
            dispatch(
              getEventList(
                competitionId ? competitionId : response.data[0].competitionId,
                from,
                languageId,
                typeId,
                countryId,
                props,
              ),
            );
            // dispatch(getEventList(competitionId?competitionId:response.data[0].competitions.length?response.data[0].competitions[0].competitionId:'',from,languageId,typeId,countryId,props))
            // }
          }
          //  dispatch(setLoader(false));
        } else {
          dispatch(setLoader(false));
          dispatch(setCompetitionsList([]));
          // if(from == 'tournament'){
          //   if(props){
          //     dispatch(navigateToLeague({competitionId:countryId},props))
          //   }
          // }
        }
      });
    } else {
      dispatch(getEventList("", from, languageId, typeId, countryId, props));
    }
  };

export const getEventList =
  (competitionId, from, languageId, typeId, countryId, props) => (dispatch) => {
    var url;
    dispatch(setSelectedOption(defaultH2HFilterId));
    dispatch(setH2HLastEncounters({}));
    if (from === "search") {
      //dispatch(setTeam_One(''))
      // dispatch(setTeam_Two(''))
      dispatch(setEventList([]));
      // dispatch(setLoader(true));
      // if(typeId=='Club'){

      if (typeId == "1") {
        url =
          htohsearch.h2hSearchTeams +
          "?languageId=" +
          languageId +
          "&competitionId=" +
          competitionId +
          "&categoryId=1&countryId=" +
          countryId +
          "&channelId=" +
          channelId;
      } else {
        url =
          htohsearch.h2hSearchTeams +
          "?languageId=" +
          languageId +
          "&categoryId=2" +
          "&countryId=" +
          countryId +
          "&channelId=" +
          channelId;
      }

      // var url = htohsearch.h2hSearchTeams+"?languageId="+languageId+"&competitionId="+competitionId+"&categoryId="+(typeId=='Club'?1:2);
    } else {
      url =
        common.getEvents +
        "?competitionId=" +
        competitionId +
        "&languageId=" +
        languageId;
    }
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data !== null && response.data) {
        dispatch(setEventList(response.data));
        //  dispatch(setLoader(false));
        if (from === "search") {
          dispatch(setEventInfoEvent(response.data[0].eventId));
        }
        if (
          props &&
          (props.match.params.countryId != countryId ||
            props.match.params.competitionId != competitionId)
        ) {
          if (from !== "search" || from !== "tournament") {
            dispatch(
              getEvenId(
                {
                  countryId: countryId,
                  competitionId: competitionId,
                  eventId: response.data[0].eventId,
                },
                "fromdropdown",
                props,
                props.bannerData,
                props.tabInfo,
              ),
            );
          }
        }
      } else {
        //  dispatch(setLoader(false));
        dispatch(
          setEventList([
            { eventId: "", eventName: props.staticKeyWords.noupcominggames },
          ]),
        );
      }
    });
  };

export const navigateTo =
  (eventInfo, text, props, homeTeamId) => (dispatch) => {
    var partialUrl =
      eventInfo.countryId +
      "/" +
      eventInfo.competitionId +
      "/" +
      eventInfo.eventId;
    var lang = "en";
    if (
      props.match &&
      props.match.params.lang &&
      props.match.params.lang.length > 0
    ) {
      lang = props.match.params.lang;
    }
    if (text === "h2h") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/htoh/recentform",
      );
    } else if (text === "seasonalstats") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/seasonalstats/standings",
      );
    } else if (text === "playeranalysis") {
      props.history.push(
        "/" +
          lang +
          "/matchcenter/" +
          partialUrl +
          "/playeranalysis/home/" +
          homeTeamId,
      );
      dispatch(
        setTabData(
          {
            mainTab: "home",
            teamId: homeTeamId,
            subTab: "had",
            seasonId:
              props.allSeasons && props.allSeasons.length
                ? props.allSeasons[0].id
                : "4",
          },
          props.history,
          "",
          props.languageId,
        ),
      );
    } else if (text === "summary") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/summary",
      );
    } else if (text === "bmrecentforms") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/bmrecentforms",
      );
    } else if (text === "bmstatistics") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/bmstatistics",
      );
    } else if (text === "bmhead2head") {
      props.history.push(
        "/" + lang + "/matchcenter/" + partialUrl + "/bmhead2head",
      );
    }
  };
export const getToggleMode =
  (eventInfo, isAdvancedMode, prop) => (dispatch) => {
    if (navigator.cookieEnabled) {
      localStorage.setItem("modeType", isAdvancedMode ? "BASIC" : "ADVANCE");
    }
    var lang = "en";
    if (
      prop.match &&
      prop.match.params.lang &&
      prop.match.params.lang.length > 0
    ) {
      lang = prop.match.params.lang;
    }
    var partialUrl =
      "/" +
      lang +
      "/matchcenter/" +
      eventInfo.countryId +
      "/" +
      eventInfo.competitionId +
      "/" +
      eventInfo.eventId;

    if (isAdvancedMode) {
      if (prop.location.pathname.includes("head2head")) {
        partialUrl = partialUrl + "/summary";
      } else if (prop.location.pathname.includes("recentform")) {
        partialUrl = partialUrl + "/bmrecentforms";
      } else if (prop.location.pathname.includes("/seasonalstats/standings")) {
        partialUrl = partialUrl + "/bmstatistics";
      } else {
        partialUrl = partialUrl + "/summary";
      }
    } else {
      if (prop.location.pathname.includes("summary")) {
        partialUrl = partialUrl + "/htoh/head2head";
      } else if (prop.location.pathname.includes("bmrecentforms")) {
        partialUrl = partialUrl + "/htoh/recentform";
      } else if (prop.location.pathname.includes("/bmstats")) {
        partialUrl = partialUrl + "/seasonalstats/standings";
      } else {
        partialUrl = partialUrl + "/htoh/head2head";
      }
    }

    prop.history.push(partialUrl);
    dispatch(toggleMode(!isAdvancedMode));
  };

export const getSeasonslist =
  (languageId, tabId, competitionId) => (dispatch) => {
    var url = "";
    if (competitionId)
      url =
        common.getSeasonslist +
        "?channelId=" +
        channelId +
        "&languageId=" +
        languageId +
        "&tabId=" +
        tabId +
        "&competitionId=" +
        competitionId;
    else
      url =
        common.getSeasonslist +
        "?channelId=" +
        channelId +
        "&languageId=" +
        languageId +
        "&tabId=" +
        tabId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data && response.data.length) {
        dispatch(setSeasons(response.data));
      }
    });
  };

export const assignCompetitions = (category, props) => (dispatch) => {
  if (category.competitions.length > 0) {
    dispatch(setCompetitionsList(category.competitions));
  } else {
    if (props) {
      dispatch(navigateToLeague({ competitionId: category.categoryId }, props));
    }
  }
};

export default MatchSlice.reducer;
