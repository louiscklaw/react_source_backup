import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { tournament } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";
import { metaData } from "../../AppSlice";

export const RulesSlice = createSlice({
  name: "rules",
  initialState: {
    rulesInfo: {},
  },
  reducers: {
    setRulesInfo: (state, actions) => {
      state.rulesInfo = actions.payload;
    },
  },
});

export const { setRulesInfo } = RulesSlice.actions;

export const getRulesInfo = (competitionId, languageId) => (dispatch) => {
  var url =
    tournament.getRules +
    "?languageId=" +
    languageId +
    "&channelId=" +
    channelId +
    "&competitionId=" +
    competitionId;
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data !== null && response.data) {
      dispatch(setRulesInfo(response.data));
      dispatch(
        setComepetitionAndDate({
          competitionName: response.data.competitionName,
          lastUpdated: response.data.lastUpdated,
        }),
      );
      dispatch(metaData("Rules", response.data.competitionName));
    } else {
      dispatch(setRulesInfo({}));
      dispatch(
        setComepetitionAndDate({
          competitionName: "",
          lastUpdated: "",
        }),
      );
    }
  });
};
export default RulesSlice.reducer;
