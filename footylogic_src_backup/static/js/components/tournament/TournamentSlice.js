import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../../src/api/apiCaller";
import { languageId, channelId } from "../../../src/sharedfiles/constants";
import { tournament } from "../../sharedfiles/EndpointConfig";
import { setEventInfoCountry } from "../htohsearch/HtoHSearchSlice";
import {
  getCompetitionsList,
  getEventList,
  setEventList,
  setCompetitionsList,
} from "../../layouts/matchSlice";
import { setH2HLastEncounters } from "../htohoutput/htohOutputSlice";

export const TournamentSlice = createSlice({
  name: "tournament",
  initialState: {
    selectedCountry: "",
    selectedTab: "",
    selectedType: "league",
    selectedComp: {},
    allCountries: {},
    htohCountries: [],
  },
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload.country;
      state.selectedTab = action.payload.index;
    },
    selectType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedComp: (state, action) => {
      state.selectedComp = action.payload;
    },
    // setFormattedCountries: (state, action) => {
    //   state.allCountries = action.payload;
    // },
    setHtoHCountries: (state, action) => {
      state.htohCountries = action.payload;
    },
  },
});

export const {
  selectCountry,
  selectType,
  setSelectedComp,
  setFormattedCountries,
  setHtoHCountries,
} = TournamentSlice.actions;

export const navigateTo = (text, props, languageId) => (dispatch) => {
  dispatch(getTournamentCountries(text, languageId));
  dispatch(selectCountry({ country: "", index: "" }));
  dispatch(selectType(text));
  props.history.push(props.match.url + "/" + text);
};

export const getTournamentCountries =
  (text, languageId, from, typeId) => (dispatch) => {
    dispatch(setH2HLastEncounters({}));
    dispatch(setEventList([]));
    dispatch(setCompetitionsList([]));
    var partialUrl = window.location.pathname.split("/");
    if (partialUrl.includes("htohsearch")) {
      var categoryId =
        text == "league"
          ? 1
          : text == "cup"
            ? 2
            : text == "international"
              ? 2
              : 1;
    } else {
      var categoryId =
        text == "league"
          ? 1
          : text == "cup"
            ? 2
            : text == "international"
              ? 3
              : 4;
    }

    if (from == "search") {
      var url =
        tournament.getTournamentCountries +
        "?channelId=" +
        channelId +
        "&languageId=" +
        languageId +
        "&categoryId=" +
        categoryId;
      apiCaller(url, "GET", {}).then((response) => {
        if (response.data && response.data.length) {
          if (from == "search") {
            dispatch(setHtoHCountries(response.data));
            // if(typeId=='Club'){
            if (typeId == "1") {
              dispatch(
                getCompetitionsList(
                  response.data[0].countryId,
                  "",
                  "search",
                  languageId,
                  typeId,
                  text,
                ),
              );
            } else {
              dispatch(
                getEventList(
                  "",
                  from,
                  languageId,
                  typeId,
                  response.data[0].countryId,
                ),
              );
            }
            dispatch(setEventInfoCountry(response.data[0].countryId));
          }
          // if(response.data && response.data.length){
          //   var obj = {};
          //   for(var i=0;i<response.data.length/4;i++){
          //     obj['array'+i]=[]
          //   }
          //   for(var i=0;i<Math.ceil((response.data.length/4));i++){
          //     for(var j=i*4;j<(i+1)*4;j++){
          //       if(response.data[j] != undefined){
          //         obj['array'+i].push(response.data[j]);
          //       }

          //     }
          //   }
          //   dispatch(setFormattedCountries(obj))
          //   if(obj.hasOwnProperty('array0')){
          //     dispatch(getCompetitionsList('','','tournament',languageId,'',text))
          //     dispatch(selectCountry({country:'array0',index:'array00'}))
          //   }
          // }
        }
      });
    } else {
      dispatch(getCompetitionsList("", "", "tournament", languageId, "", text));
    }
  };

export const navigateToLeague = (item, props) => (dispatch) => {
  props.dispatch(setSelectedComp(item));
  var lang = "en";
  if (
    props.match &&
    props.match.params.lang &&
    props.match.params.lang.length > 0
  ) {
    lang = props.match.params.lang;
  }
  props.history.push(
    "/" +
      lang +
      "/tournament/" +
      props.match.params.leagueType +
      "/" +
      item.competitionId +
      "/standings",
  );
};

export default TournamentSlice.reducer;
