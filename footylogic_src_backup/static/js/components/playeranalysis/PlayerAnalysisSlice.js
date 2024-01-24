import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { languageId, channelId } from "../.././sharedfiles/constants";
import { playeranalysis, common } from "../../sharedfiles/EndpointConfig";
import { apiCaller } from "../../api/apiCaller";
import { setLoader } from "../../AppSlice";

export const PlayerAnalysisSlice = createSlice({
  name: "playeranalysis",
  initialState: {
    hadColumns: [],
    hiloColumns: [],
    playerData: [],
    tabInfo: {
      mainTab: "home",
      teamId: "",
      subTab: "had",
      seasonId: "",
    },
    staticKeyWords: {},
  },
  reducers: {
    setTabInfo: (state, action) => {
      state.tabInfo = {
        mainTab: action.payload.mainTab,
        teamId: action.payload.teamId,
        subTab: action.payload.subTab,
        seasonId: action.payload.seasonId,
      };
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.hiloColumns = [
        {
          column: staticKeyWords.player,
          key: "playerName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "w-150",
        },
        {
          column: staticKeyWords.goals,
          key: "playerGoals",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.started,
          key: "playerPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.missed,
          key: "playerMissed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.goalsFor,
          key: "zeroPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator2 w-110",
        },
        {
          column: staticKeyWords.goalsAgainst,
          key: "onePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "w-70",
        },
        {
          column: staticKeyWords.with,
          key: "goalsForWithPlayer",
          isDisplay: true,
          className: "th-separator2 text-center w-130",
        },
        {
          column: staticKeyWords.wo,
          key: "goalsForWithOutPlayer",
          isDisplay: true,
        },
        {
          column: staticKeyWords.with,
          key: "goalsAgainstWithPlayer",
          isDisplay: true,
          className: "th-separator2",
        },
        {
          column: staticKeyWords.wo,
          key: "goalsAgainstWithOutPlayer",
          isDisplay: true,
          className: "th-separator2",
        },
        // {column:"+2.5% "+staticKeyWords.with,key:"hiLoPctWithPlayer"},
        // {column:"+2.5% "+staticKeyWords.wo,key:"hiLoPctWithOutPlayer"},
      ];
      state.hadColumns = [
        {
          column: staticKeyWords.player,
          key: "playerName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "w-150",
        },
        {
          column: staticKeyWords.goals,
          key: "playerGoals",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.started,
          key: "playerPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.missed,
          key: "playerMissed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.winPer,
          key: "zeroPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator2",
        },
        {
          column: staticKeyWords.drawPer,
          key: "onePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator2",
        },
        {
          column: staticKeyWords.losePer,
          key: "twoPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
        },
        {
          column: staticKeyWords.with,
          key: "winPctWithPlayer",
          isDisplay: true,
          className: "th-separator2 text-center",
        },
        {
          column: staticKeyWords.wo,
          key: "winPctWithoutPlayer",
          isDisplay: true,
        },
        {
          column: staticKeyWords.with,
          key: "drawPctWithPlayer",
          isDisplay: true,
          className: "th-separator2",
        },
        {
          column: staticKeyWords.wo,
          key: "drawPctWithoutPlayer",
          isDisplay: true,
        },
        {
          column: staticKeyWords.with,
          key: "lossPctWithPlayer",
          isDisplay: true,
          className: "th-separator2",
        },
        {
          column: staticKeyWords.wo,
          key: "lossPctWithOutPlayer",
          isDisplay: true,
          className: "th-separator2",
        },
      ];
    },
    setPlayerInfo: (state, action) => {
      state.playerData = action.payload;
    },
  },
});

export const { setTabInfo, setPlayerInfo, setSeasons, setTableHeaders } =
  PlayerAnalysisSlice.actions;

export const getPlayersInfo = (tabInfo, languageId) => (dispatch) => {
  dispatch(setLoader(true));
  if (tabInfo.teamId && tabInfo.seasonId) {
    var url =
      playeranalysis.getPlayersInfo +
      "?channelId=" +
      channelId +
      "&languageId=" +
      languageId +
      "&teamId=" +
      tabInfo?.teamId +
      "&marketGroupId=" +
      (tabInfo.subTab == "had" ? 1 : 2) +
      "&seasonId=" +
      tabInfo?.seasonId;

    apiCaller(url, "GET", "").then((response) => {
      dispatch(setLoader(false));
      if (response.data && response.data.length) {
        dispatch(setPlayerInfo(response.data));
      } else {
        dispatch(setPlayerInfo([]));
      }
    });
  }
};

export const setTabData =
  (tabInfo, history, text, languageId) => (dispatch) => {
    dispatch(setTabInfo(tabInfo));
    var path = window.location.pathname.split("/");
    path[7] = tabInfo.mainTab;
    path[8] = tabInfo.teamId;
    path = path.join("/");
    history.push(path);
    if (text != "noneedtocall") {
      dispatch(setPlayerInfo([]));
      // dispatch(getSeasonslist(tabInfo))
      dispatch(getPlayersInfo(tabInfo, languageId));
    }
  };

// export const getSeasonslist =(tabInfo) => dispatch => {
// var url = common.getSeasonslist+"?channelId="+channelId;
// apiCaller(url,'GET',{})
// .then((response)=>{
//   if(response.data && response.data.length){
//     dispatch(setSeasons(response.data));
//     dispatch(setTabInfo({
//       mainTab: tabInfo.mainTab,
//       teamId: tabInfo.teamId,
//       subTab: tabInfo.subTab,
//       seasonId: response.data[0].id
//     }))
//   }
// })
// }

export default PlayerAnalysisSlice.reducer;
