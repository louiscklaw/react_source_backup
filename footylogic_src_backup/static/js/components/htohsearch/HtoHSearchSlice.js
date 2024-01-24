import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../../src/api/apiCaller";
import { languageId, channelId } from "../../../src/sharedfiles/constants";
import {
  common,
  htohsearch,
  matchCenter,
} from "../../sharedfiles/EndpointConfig";
import { setMainTab } from "../../AppSlice";
import { getTournamentCountries } from "../tournament/TournamentSlice";
import {
  fetchh2hlastencouters,
  setSelectedHiLoOption,
  bindHiLoValue,
  setH2HLastEncounters,
} from "../htohoutput/htohOutputSlice";
import { getWinBest, getBanner } from "../../layouts/matchSlice";

export const HtoHSearchSlice = createSlice({
  name: "htohsearch",
  initialState: {
    listTypes: [],
    // countryList:[],
    // competitionsList:[],
    // eventList:[],
    eventInfo: {
      typeId: "",
      countryId: "",
      competitionId: "",
      // ,
      // eventId:''
    },
    teamOneList: [],
    teamTwoList: [],
    teamOne: {
      teamName: "",
      teamId: "",
    },
    teamTwo: {
      teamName: "",
      teamId: "",
    },
    team_one: "",
    team_two: "",
    hToHEventId: "",
    isSelect2Teams: true,
  },
  reducers: {
    setCategores: (state, actions) => {
      state.listTypes = actions.payload;
    },
    // setCountryList: (state, action) => {
    //   state.countryList = action.payload;
    // },
    // setCompetitionsList: (state, action) => {
    //   state.competitionsList = action.payload;
    // },
    // setEventList: (state, action) => {
    //   state.eventList = action.payload;
    // },
    setEventInfoCountry: (state, action) => {
      state.eventInfo.countryId = action.payload;
    },
    setEventInfoCompetition: (state, action) => {
      state.eventInfo.competitionId = action.payload;
    },
    setEventInfoEvent: (state, action) => {
      state.eventInfo.eventId = action.payload;
    },
    setEventInfoType: (state, action) => {
      state.eventInfo.typeId = action.payload;
    },
    setTeamNames: (state, action) => {
      if (action.payload.text === "teamone") {
        state.teamOne.teamName = action.payload.name;
        state.teamOne.teamId = action.payload.id;
      } else {
        state.teamTwo.teamName = action.payload.name;
        state.teamTwo.teamId = action.payload.id;
      }
    },
    setTeamsList: (state, action) => {
      if (action.payload.text === "teamone") {
        state.teamOneList = action.payload.data;
      } else {
        state.teamTwoList = action.payload.data;
      }
    },
    setTeam_One: (state, action) => {
      state.team_one = action.payload;
    },
    setTeam_Two: (state, action) => {
      state.team_two = action.payload;
    },
    setHToHEventId: (state, action) => {
      state.hToHEventId = action.payload;
    },
    setSelect2TeamsPanel: (state, action) => {
      state.isSelect2Teams = action.payload;
    },
  },
});

export const {
  setCategores,

  setCompetitionsList,
  setEventList,
  setEventInfoCountry,
  setEventInfoCompetition,
  setEventInfoEvent,
  setEventInfoType,
  setTeamNames,
  setTeamsList,
  setTeam_One,
  setTeam_Two,
  setHToHEventId,
  setSelect2TeamsPanel,
} = HtoHSearchSlice.actions;

export const getCategories = (languageId) => (dispatch) => {
  var url =
    common.getCategories +
    "?channelId=" +
    channelId +
    "&languageId=" +
    languageId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data && response.data.length) {
      dispatch(setCategores(response.data));
      dispatch(setEventInfoType(response.data[0].id));
      // dispatch(getTournamentCountries('international',languageId,'search',response.data[0].name))
      dispatch(
        getTournamentCountries(
          "club",
          languageId,
          "search",
          response.data[0].id,
        ),
      );
    }
  });
};

// export const getCountryList = (categoryId) => dispatch => {
//   var url = tournament.getTournamentCountries+"?channelId="+channelId+"&languageId="+languageId+"&categoryId="+(categoryId==1?4:3);
//   apiCaller(url,'GET',{})
//   .then((response)=>{
//     if(response.data!==null && response.data){
// dispatch(setCountryList(response.data));
// dispatch(getCompetitionsList(response.data[0].countryId));
// dispatch(setEventInfoCountry(response.data[0].countryId))
//     }
//   })
// }

// export const getCompetitionsList = (countryId) => dispatch => {
// var url = common.getCompetitions+"?countryId="+countryId;
// apiCaller(url,'GET',{})
// .then((response)=>{
//   if(response.data!==null && response.data){
// dispatch(setCompetitionsList(response.data))
// // dispatch(getEventList(response.data[0].competitionId))
// dispatch(setEventInfoCompetition(response.data[0].competitionId))

//   }
// })
// }

// export const getEventList = (competitionId) => dispatch => {
//   var url = common.getEvents+"?competitionId="+competitionId;
//   apiCaller(url,'GET',{})
//   .then((response)=>{
//     if(response.data!==null && response.data){
//       // dispatch(setEventInfoEvent(response.data[0].eventId))
//       dispatch(setEventList(response.data))
//     }
//   })
// }

export const navigateToHtoHTab =
  (eventInfo, eventId, history) => (dispatch) => {
    dispatch(setMainTab("match"));
    history.push(
      "/matchcenter/" +
        eventInfo.countryId +
        "/" +
        eventInfo.competitionId +
        "/" +
        eventId +
        "/htoh",
    );
  };

export const getTeamsList = (searchText, text, languageId) => (dispatch) => {
  if (text === "teamone") {
    dispatch(setTeam_One(""));
    dispatch(setTeamNames({ text: "teamone", name: "", id: "" }));
  } else {
    dispatch(setTeam_Two(""));
    dispatch(setTeamNames({ text: "teamtwo", name: "", id: "" }));
  }
  dispatch(setH2HLastEncounters({}));
  dispatch(setTeamNames({ name: searchText, text: text }));
  if (searchText.length > 0) {
    var url =
      matchCenter.getTeamSearch +
      "?teamName=" +
      searchText +
      "&languageId=" +
      languageId +
      "&channelId=" +
      channelId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data !== null && response.data.length > 0) {
        dispatch(setTeamsList({ data: response.data, text: text }));
      } else {
        dispatch(setTeamsList({ data: [], text: text }));
      }
    });
  } else {
    dispatch(setTeamsList({ data: [], text: text }));
  }
};

export const loadSearchData = (teamsList, teamName, text) => (dispatch) => {
  if (teamName !== null && teamsList.length > 0) {
    // dispatch(setTeamNames({name:teamName,text:text}))
    teamsList.forEach(function (item, index) {
      if (item.teamName === teamName) {
        dispatch(
          setTeamNames({ name: item.teamName, id: item.teamId, text: text }),
        );
      }
    });
  }
};

export const getEventInfo = (teamsInfo, history, lang) => (dispatch) => {
  dispatch(setH2HLastEncounters({}));
  dispatch(setSelect2TeamsPanel(false));
  if (teamsInfo.homeTeam.teamId && teamsInfo.awayTeam.teamId) {
    var url =
      htohsearch.h2hSearchEventInfo +
      "?languageId=" +
      lang +
      "&team1Id=" +
      teamsInfo.homeTeam.teamId +
      "&team2Id=" +
      teamsInfo.awayTeam.teamId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data) {
        dispatch(getWinBest(response.data.eventId, lang, "htohsearch"));
        dispatch(getBanner(response.data.eventId, lang));
        // dispatch(setMainTab('match'));
        dispatch(setH2HLastEncounters({}));
        dispatch(setHToHEventId(response.data.eventId));
        // history.push('/'+lang+'/matchcenter/'+response.data.countryId+'/'+response.data.competitionId+'/'+response.data.eventId+'/htohoutput/htoh/head2head')
      } else {
        dispatch(setH2HLastEncounters({}));
      }
    });
  }
};

export const selectTeam =
  (team, team_one, team_two, history, lang) => (dispatch) => {
    if (team_one === "" || team_two === "") {
      if (
        (team_one === "" && team_two === "") ||
        (team_one === "" && team_two !== "")
      ) {
        if (team.teamId !== team_two.teamId) {
          dispatch(setTeam_One(team));
          dispatch(
            setTeamNames({
              text: "teamone",
              name: team.teamName,
              id: team.teamId,
            }),
          );
        } else {
          dispatch(setH2HLastEncounters({}));
          dispatch(setTeam_Two(""));
          dispatch(setTeamNames({ text: "teamtwo", name: "", id: "" }));
        }
        // if(team_two !== ''){
        //   dispatch(getEventInfo({homeTeam:team,awayTeam:team_two},history,lang));
        // }
      } else if (team_one !== "" && team_two === "") {
        if (
          team.teamId !== team_one.teamId &&
          team.teamId !== team_two.teamId
        ) {
          dispatch(setTeam_Two(team));
          dispatch(
            setTeamNames({
              text: "teamtwo",
              name: team.teamName,
              id: team.teamId,
            }),
          );
          // dispatch(getEventInfo({homeTeam:team_one,awayTeam:team},history,lang));
        } else {
          dispatch(setH2HLastEncounters({}));
          dispatch(setTeam_One(""));
          dispatch(setTeamNames({ text: "teamone", name: "", id: "" }));
        }
      }
    } else {
      if (team_one.teamId === team.teamId) {
        dispatch(setH2HLastEncounters({}));
        dispatch(setTeam_One(""));
        dispatch(setTeamNames({ text: "teamone", name: "", id: "" }));
      } else if (team_two.teamId === team.teamId) {
        dispatch(setH2HLastEncounters({}));
        dispatch(setTeam_Two(""));
        dispatch(setTeamNames({ text: "teamtwo", name: "", id: "" }));
      }
    }
  };

export default HtoHSearchSlice.reducer;
