import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { summary, recentforms } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const BMRecentFormsSlice = createSlice({
  name: "bmrecentforms",
  initialState: {
    tableData: {
      homeTeam: [],
      awayTeam: [],
    },
    homeMarketGroupId: "1",
    awayMarketGroupId: "1",
    handicapColumns: [
      {
        column: "Event",
        key: "competitionName",
        isDiff: false,
        isHandicap: true,
      },
      { column: "Date", key: "kickOff", isDiff: false, isHandicap: true },
      { column: "H/A", key: "homeOrAway", isDiff: false, isHandicap: true },
      {
        column: "Against",
        key: "teamAganist",
        isDiff: false,
        isHandicap: true,
      },
      {
        column: "FT Score",
        key: "fullTimeScore",
        isDiff: false,
        isHandicap: true,
      },
      {
        column: "HT Score",
        key: "halfTimeScore",
        isDiff: false,
        isHandicap: true,
      },
      {
        column: "FT Result",
        key: "fullTimeResult",
        isDiff: false,
        isHandicap: true,
      },
      { column: "FHAD", key: "fullTimeHad", isDiff: false, isHandicap: true },
      { column: "HDC", key: "hdc", isDiff: true, isHandicap: true },
      { column: "HHAD", key: "hHad", isDiff: true, isHandicap: true },
    ],
    cornersColumns: [
      {
        column: "Event",
        key: "competitionName",
        isDiff: false,
        isHandicap: false,
      },
      { column: "Date", key: "kickOff", isDiff: false, isHandicap: false },
      { column: "H/A", key: "homeOrAway", isDiff: false, isHandicap: false },
      {
        column: "Against",
        key: "teamAganist",
        isDiff: false,
        isHandicap: false,
      },
      {
        column: "FT Score",
        key: "fullTimeScore",
        isDiff: false,
        isHandicap: false,
      },
      {
        column: "HT Score",
        key: "halfTimeScore",
        isDiff: false,
        isHandicap: false,
      },
      { column: "TTG", key: "totalGoals", isDiff: false, isHandicap: false },
      {
        column: "FH HiLo",
        key: "firstHalfHilo",
        isDiff: true,
        isHandicap: false,
      },
      { column: "HiLo", key: "hilo", isDiff: true, isHandicap: false },
      {
        column: "Both Teams to Score",
        key: "bothTeamsToScore",
        isDiff: false,
        isHandicap: false,
      },
      {
        column: "Teams to Score",
        key: "teamsToScore",
        isDiff: false,
        isHandicap: false,
      },
      {
        column: "Corners HiLo",
        key: "cornerHilo",
        isDiff: true,
        isHandicap: false,
      },
    ],
    handicapColumns: [],
    cornersColumns: [],
    staticKeyWords: {},
  },
  reducers: {
    setTableData: (state, action) => {
      if (action.payload.from == "home") {
        state.tableData.homeTeam = action.payload.data;
      } else if (action.payload.from == "away") {
        state.tableData.awayTeam = action.payload.data;
      } else {
        state.tableData = {
          homeTeam: action.payload.data.homeTeam,
          awayTeam: action.payload.data.awayTeam,
        };
      }
    },
    setMarketGroupId: (state, action) => {
      if (action.payload.text == "home") {
        state.homeMarketGroupId = action.payload.id;
      } else {
        state.awayMarketGroupId = action.payload.id;
      }
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.handicapColumns = [
        {
          column: staticKeyWords.event,
          key: "competitionName",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.date,
          key: "kickOff",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.ha,
          key: "homeOrAway",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.againt,
          key: "teamAganist",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.ftScore,
          key: "fullTimeScore",
          isDiff: false,
          isHandicap: true,
          isSpecialClass: true,
        },
        {
          column: staticKeyWords.htScore,
          key: "halfTimeScore",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.ftResult,
          key: "fullTimeResult",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.fHAD,
          key: "fullTimeHad",
          isDiff: false,
          isHandicap: true,
        },
        {
          column: staticKeyWords.hdc,
          key: "hdc",
          isDiff: true,
          isHandicap: true,
        },
        {
          column: staticKeyWords.hHAD,
          key: "hHad",
          isDiff: true,
          isHandicap: true,
        },
      ];
      state.cornersColumns = [
        {
          column: staticKeyWords.event,
          key: "competitionName",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.date,
          key: "kickOff",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.ha,
          key: "homeOrAway",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.againt,
          key: "teamAganist",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.ftScore,
          key: "fullTimeScore",
          isDiff: false,
          isHandicap: false,
          isSpecialClass: true,
        },
        {
          column: staticKeyWords.htScore,
          key: "halfTimeScore",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.ttg,
          key: "totalGoals",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.fhHiLo,
          key: "firstHalfHilo",
          isDiff: true,
          isHandicap: false,
        },
        {
          column: staticKeyWords.hiLo,
          key: "hilo",
          isDiff: true,
          isHandicap: false,
        },
        {
          column: staticKeyWords.btts,
          key: "bothTeamsToScore",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.tts,
          key: "teamsToScore",
          isDiff: false,
          isHandicap: false,
        },
        {
          column: staticKeyWords.cornersHiLo,
          key: "cornerHilo",
          isDiff: true,
          isHandicap: false,
        },
      ];
    },
  },
});

export const { setTableData, setMarketGroupId, setTableHeaders } =
  BMRecentFormsSlice.actions;

export const getRecentResultsEvent =
  (text, marketGroupId, bannerData) => (dispatch) => {
    // if(text){
    // 	dispatch(setMarketGroupId({text:text,id:marketGroupId}))
    // 	var url = recentforms.getRecentResultsTeam+"?channelId="+channelId+"&languageId="+languageId+"&teamId="+(text=='home'?bannerData.homeTeamId:bannerData.awayTeamId)+"&marketGroupId="+marketGroupId;
    // }else{
    // 	var url = recentforms.getRecentResultsEvent+"?channelId="+channelId+"&languageId="+languageId+"&homeTeamId="+bannerData.homeTeamId+"&awayTeamId="+bannerData.awayTeamId+"&marketGroupId="+marketGroupId;
    // }
    // apiCaller(url, 'GET', {})
    // .then((response)=>{
    // 	if(response){
    // 		// if(marketGroupId==2){
    // 		// 	if(text == 'home'){
    // 		// 		var data = []
    // 		// 		response.data.map((team)=>{
    // 		// 			team['hilo'].map((item)=>{
    // 		// 				console.log("item....",item)
    // 		// 				data.push(item)
    // 		// 			})
    // 		// 			team['hilo'].map((item)=>{
    // 		// 				console.log("item....",item)
    // 		// 				data.push(item)
    // 		// 			})
    // 		// 			console.log("endo emo....",data.length)
    // 		// 		})
    // 		// 	}
    // 		// }
    // 		dispatch(setTableData({data:response.data,from:text}))
    // 	}
    // })
  };

export default BMRecentFormsSlice.reducer;
