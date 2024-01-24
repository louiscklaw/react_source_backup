import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { tournament, seasonalStats } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import playertableIcon1 from "../../assets/images/playertable icon-1.svg";
import playertableIcon2 from "../../assets/images/playertable icon-2.svg";
import playertableIcon3 from "../../assets/images/playertable icon-3.svg";
import playertableIcon4 from "../../assets/images/playertable icon-4.svg";
import logo from "../../assets/images/logo.png";
import { setLoader, metaData } from "../../AppSlice";
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";

export const PlayersSlice = createSlice({
  name: "players",
  initialState: {
    playersColumns: [],
    playersData: [],
    staticKeyWords: {},
  },
  reducers: {
    setData: (state, action) => {
      state.playersData = action.payload;
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.playersColumns = [
        {
          column: staticKeyWords.squad,
          key: "squadNo",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.teamPlayer,
          key: "playerName",
          isSplit: false,
          showImg: true,
          imgKey: "playerImageUrl",
          className: "text-left standings-player",
        },
        {
          column: staticKeyWords.position,
          key: "playerPos",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.age,
          key: "playerAge",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.appearances,
          key: "playerAppearances",
          isSplit: false,
          showImg: false,
        },
        // {column:staticKeyWords.assists,key:"playerAssists",isSplit:false,showImg:false},
        // {column:playertableIcon1,key:"playerYellowCards",isSplit:false,showImg:false,isHeaderImg:true},
        // {column:playertableIcon2,key:"playerRedCards",isSplit:false,showImg:false,isHeaderImg:true},
        // {column:playertableIcon3,key:"playerIn",isSplit:false,showImg:false,isHeaderImg:true},
        // {column:playertableIcon4,key:"playerOut",isSplit:false,showImg:false,isHeaderImg:true}
        {
          column: staticKeyWords.goals,
          key: "playerGoals",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.yellowcards,
          key: "playerYellowCards",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.redcards,
          key: "playerRedCards",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.subbedon,
          key: "playerIn",
          isSplit: false,
          showImg: false,
        },
        {
          column: staticKeyWords.subbedoff,
          key: "playerOut",
          isSplit: false,
          showImg: false,
        },
      ];
    },
  },
});

export const { setData, setTableHeaders } = PlayersSlice.actions;

export const getPleayersData = (params) => (dispatch) => {
  dispatch(setData([]));
  dispatch(setLoader(true));
  var url =
    tournament.getPlayers +
    "?languageId=" +
    params.languageId +
    "&channelId=" +
    channelId +
    "&teamId=" +
    params.teamId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response && response.data) {
      dispatch(setData(response.data));
      dispatch(
        setComepetitionAndDate({
          competitionName: response.data.teamName,
          lastUpdated: response.data.lastUpdated,
        }),
      );
      dispatch(metaData("Players", response.data.teamName));
    } else {
      dispatch(
        setComepetitionAndDate({
          competitionName: "",
          lastUpdated: "",
        }),
      );
    }
    //dispatch(setBanner(response.data));
    dispatch(setLoader(false));
  });
};

export default PlayersSlice.reducer;
