import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { tournament, seasonalStats } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import { setLoader, metaData } from "../../AppSlice";
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";

export const TournamentStandingsSlice = createSlice({
  name: "topscorer",
  initialState: {
    topScorerColumns: [],
    topScorerData: [],
  },
  reducers: {
    setData: (state, action) => {
      state.topScorerData = action.payload;
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.topScorerColumns = [
        {
          column: staticKeyWords.rank,
          key: "playerRank",
          isSplit: false,
          showImg: false,
          isTopScorer: true,
        },
        {
          column: staticKeyWords.player,
          key: "playerName",
          isSplit: false,
          showImg: false,
          imgKey: "playerImageUrl",
          className: "text-left w-400",
          isTopScorer: true,
        },
        {
          column: staticKeyWords.club,
          key: "playerClub",
          isSplit: false,
          showImg: false,
          isTopScorer: true,
          className: "text-left",
        },
        {
          column: staticKeyWords.nationality,
          key: "playerCountry",
          isSplit: false,
          showImg: false,
          isTopScorer: true,
          className: "text-left",
        },
        {
          column: staticKeyWords.goals,
          key: "playerGoals",
          isSplit: false,
          showImg: false,
          isTopScorer: true,
        },
        {
          column: staticKeyWords.hKJCNo,
          key: "playerHkjcNo",
          isSplit: false,
          showImg: false,
          isTopScorer: true,
        },
      ];
    },
  },
});

export const { setData, setTableHeaders } = TournamentStandingsSlice.actions;

export const getTopScorerData = (leagueId, languageId) => (dispatch) => {
  dispatch(setData([]));
  dispatch(setLoader(true));
  var url =
    tournament.getTopScorer +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&competitionId=" +
    leagueId;
  apiCaller(url, "GET", {}).then((response) => {
    // if(response && response.data && response.data.length>0){
    if (response && response.data) {
      dispatch(setData(response.data));
      dispatch(
        setComepetitionAndDate({
          competitionName: response.data.competitionName,
          lastUpdated: response.data.lastUpdated,
        }),
      );
      dispatch(metaData("TopScorer", response.data.competitionName));
    } else {
      dispatch(
        setComepetitionAndDate({
          competitionName: "",
          lastUpdated: "",
        }),
      );
    }
    dispatch(setLoader(false));
    //dispatch(setBanner(response.data));
  });
};

export default TournamentStandingsSlice.reducer;
