import { createSlice } from "@reduxjs/toolkit";
import { engLangId } from "../../sharedfiles/constants";
// import { apiCaller } from '../../api/apiCaller';
// import { matchCenter } from '../../sharedfiles/EndpointConfig';
// import { languageId, channelId} from '../../sharedfiles/constants'

export const TournamentLeagueSlice = createSlice({
  name: "tournamentleague",
  initialState: {
    selectedButton: "statistics",
    comepetitionAndDate: {},
  },
  reducers: {
    setSelectButton: (state, action) => {
      state.selectedButton = action.payload;
    },
    setComepetitionAndDate: (state, action) => {
      state.comepetitionAndDate = action.payload;
    },
  },
});

export const { setSelectButton, setComepetitionAndDate } =
  TournamentLeagueSlice.actions;

export const navigateTo = (text, props, history) => (dispatch) => {
  var path = window.location.pathname.split("/");
  dispatch(setSelectButton(text));
  // if(props.teamType=='team'){
  //   if(text=='statistics'){
  //     history.push("/tournament/league/"+props.leagueId+"/team/"+props.teamId+"/"+(text+"/standings"))
  //   }else{
  //     history.push("/tournament/league/"+props.leagueId+"/team/"+props.teamId+"/"+text)
  //   }
  // }else{
  //   history.push("/tournament/league/"+props.leagueId+"/"+(text != "statistics"?text:text+"/standings"))
  // }
  var lang = "en";
  if (props && props.lang && props.lang.length > 0) {
    lang = props.lang;
  }
  if (path.includes("team")) {
    if (text == "statistics") {
      history.push(
        "/" +
          lang +
          "/tournament/" +
          props.leagueType +
          "/" +
          props.leagueId +
          "/team/" +
          path[6] +
          "/" +
          (text + "/standings"),
      );
    } else {
      // if(text=='standings'){
      //   history.push("/"+lang+"/tournament/"+props.leagueType+"/"+props.leagueId+"/"+text)
      // } else{
      history.push(
        "/" +
          lang +
          "/tournament/" +
          props.leagueType +
          "/" +
          props.leagueId +
          "/team/" +
          path[6] +
          "/" +
          text,
      );
      //}
    }
  } else {
    history.push(
      "/" +
        lang +
        "/tournament/" +
        props.leagueType +
        "/" +
        props.leagueId +
        "/" +
        (text != "statistics" ? text : text + "/standings"),
    );
  }
};
export const navigateToTeamFixtureResults =
  (history, leagueId, teamId, languageId) => (dispatch) => {
    var lang = languageId === engLangId ? "en" : "zh";
    dispatch(setSelectButton("fixturesresults"));
    history.push(
      "/" +
        lang +
        "/tournament/league" +
        "/" +
        leagueId +
        "/team/" +
        teamId +
        "/fixturesresults",
    );
  };
export const navigateToTeamStandings =
  (history, leagueId, teamId, languageId) => (dispatch) => {
    var lang = languageId === engLangId ? "en" : "zh";
    dispatch(setSelectButton("standings"));
    history.push(
      "/" +
        lang +
        "/tournament/league" +
        "/" +
        leagueId +
        "/team/" +
        teamId +
        "/standings",
    );
  };
export const navigateToTourStandings =
  (history, leagueId, languageId) => (dispatch) => {
    dispatch(setSelectButton("standings"));
    var lang = languageId === engLangId ? "en" : "zh";
    history.push(
      "/" + lang + "/tournament/league" + "/" + leagueId + "/standings",
    );
  };
export const resetButtons = () => (dispatch) => {
  var path = window.location.pathname.split("/");
  if (path.includes("team")) {
    dispatch(setSelectButton(path[7]));
  } else {
    dispatch(setSelectButton(path[5]));
  }
};

export const highlightButton = (text, selectedButton) => (dispatch) => {
  return text == selectedButton ? "tabLinks active" : "tabLinks";
};

export default TournamentLeagueSlice.reducer;
