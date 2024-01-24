import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { seasonalStats } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";
import { setLoader } from "../../AppSlice";
import { setFilter, setTab } from "./standings/StandingsSlice";
// import {structureGraphData,getMaxValue} from '../../sharedfiles/helper';
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";

export const SeasonalStatsSlice = createSlice({
  name: "seasonalstats",
  initialState: {
    tablesList: [],
    standingsTableData: [],
    selectedTable: { tableId: 1, tableName: "" },
    tableAndRoutes: [
      { tableId: 1, route: "standings" },
      { tableId: 2, route: "keyindicators" },
      // {"tableId":3,"route":'firsthalfhad'},
      { tableId: 3, route: "handicap" },
      { tableId: 4, route: "handicaphad" },
      { tableId: 10, route: "cornershilo" },
      { tableId: 5, route: "hafu" },
      { tableId: 6, route: "hilo" },
      // {"tableId":8,"route":'fhhilo'},
      { tableId: 7, route: "teamstoscoreoddoreven" },
      { tableId: 8, route: "firstteamtoscore" },
      { tableId: 9, route: "correctscore" },
      // {"tableId":12,"route":'fhcorrectscore'},

      { tableId: 11, route: "totalgoals" },
    ],
    standingColumns: [],
    handicapColumns: [],
    hafuColumns: [],
    handicapHadColumns: [],
    hiloColumns: [],
    teamsToScoreOddOrEvenColumns: [],
    cornersHiloColumns: [],
    toatalGoalsColumns: [],
    firstTeamToScoreColumns: [],
    correctScoreColumns: [],
    seasonFilterData: [],
    HDCTypeFilterData: [],
    HiLoFTFilterData: [],
    HiLoHTFilterData: [],
    betTypeFilterData: [],
    standingsChartData: [],
    keyIndicatorsData: [],
    handicapChartData: { all: [], positive: [], negative: [], zero: [] },
    isHandicapChartsMul: true,
    handicapHadChartData: { all: [], positive: [], negative: [] },
    hafuGraphData: [],
    optionsList: [],
    firstTeamToScoreGraphData: { FTSScored: {}, FTSConceded: {} },
    correctScoreGraphData: {},
    FHCorretScoreGraphData: [],
    teamToScoreOEGraphData: {},
    hiLoChartData: [],
    fhHiLoChartData: [],
    cornersHiLoChartData: [],
    staticKeyWords: {},
    standingsHAD: {},
    standingsGPG: {},
    standingsFHGPG: {},
    standingsFHHAD: {},
    fhHadMaxValue: 10,
    hadMaxValue: 10,
    lastUpdated: "",
    tourCorrectScoreColumns: [],
    isPoints: false,
  },
  reducers: {
    setSelectedTable: (state, action) => {
      state.selectedTable = action.payload;
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload.keyWords;
      let type = action.payload.type;
      state.staticKeyWords = staticKeyWords;
      state.standingColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isSplit: false,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team",
        },
        { column: staticKeyWords.p, key: "teamPlayed", isSplit: false },
        { column: staticKeyWords.w, key: "teamWin", isSplit: false },
        { column: staticKeyWords.d, key: "teamDraw", isSplit: false },
        { column: staticKeyWords.l, key: "teamLoss", isSplit: false },
        { column: staticKeyWords.gf, key: "teamGF", isSplit: false },
        { column: staticKeyWords.ga, key: "teamGA", isSplit: false },
        { column: staticKeyWords.gd, key: "teamGD", isSplit: false },
        { column: staticKeyWords.pts, key: "teamPoints", isSplit: false },
        {
          column: staticKeyWords.form,
          key: "teamForm",
          isSplit: true,
          className: "form",
        },
      ];
      state.handicapColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isSplit: false,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isSplit: false,
          className: "handicap-p",
        },
        { column: staticKeyWords.fullWin, key: "teamFullWins", isSplit: false },
        { column: staticKeyWords.halfWin, key: "teamHalfWins", isSplit: false },
        { column: staticKeyWords.draw, key: "teamDraws", isSplit: false },
        {
          column: staticKeyWords.halfLoss,
          key: "teamHalfLosses",
          isSplit: false,
        },
        {
          column: staticKeyWords.fullLoss,
          key: "teamFullLosses",
          isSplit: false,
          className: "fullLosses",
        },
      ];
      state.hafuColumns = [
        // {column:staticKeyWords.rank,key:"teamRank",isSplit:false,className:"rank"},
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team teamSpacing",
        },
        { column: staticKeyWords.p, key: "teamPlayed", isSplit: false },
        { column: staticKeyWords.ww, key: "teamWinWin", isSplit: false },
        { column: staticKeyWords.dw, key: "teamDrawWin", isSplit: false },
        { column: staticKeyWords.lw, key: "teamLossWin", isSplit: false },
        { column: staticKeyWords.wd, key: "teamWinDraw", isSplit: false },
        { column: staticKeyWords.dd, key: "teamDrawDraw", isSplit: false },
        { column: staticKeyWords.ld, key: "teamLossDraw", isSplit: false },
        { column: staticKeyWords.wl, key: "teamWinLoss", isSplit: false },
        { column: staticKeyWords.dl, key: "teamDrawLoss", isSplit: false },
        { column: staticKeyWords.ll, key: "teamLossLoss", isSplit: false },
      ];
      state.handicapHadColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.all,
          key: "all",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
          className: "th-separator",
        },
        {
          column: staticKeyWords.plus,
          key: "positive",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
          className: "th-separator",
        },
        {
          column: staticKeyWords.minus,
          key: "negative",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
        },
        { column: staticKeyWords.win, key: "all.teamWinsA", isDisplay: true },
        { column: staticKeyWords.draw, key: "all.teamDrawsA", isDisplay: true },
        {
          column: staticKeyWords.loss,
          key: "all.teamLossesA",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.win,
          key: "positive.teamWinsP",
          isDisplay: true,
        },
        {
          column: staticKeyWords.draw,
          key: "positive.teamDrawsP",
          isDisplay: true,
        },
        {
          column: staticKeyWords.loss,
          key: "positive.teamLossesP",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.win,
          key: "negative.teamWinsN",
          isDisplay: true,
        },
        {
          column: staticKeyWords.draw,
          key: "negative.teamDrawsN",
          isDisplay: true,
        },
        {
          column: staticKeyWords.loss,
          key: "negative.teamLossesN",
          isDisplay: true,
        },
      ];
      state.hiloColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.averageHilo,
          key: "teamAverage",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: "0.5",
          key: "zeroPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "1.5",
          key: "onePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "2.5",
          key: "twoPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "3.5",
          key: "threePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "4.5",
          key: "fourPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
        },

        {
          column: staticKeyWords.hi,
          key: "zeroPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "zeroPt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "onePt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "onePt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "twoPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "twoPt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "threePt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "threePt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "fourPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "fourPt5Low",
          isDisplay: true,
          className: "",
        },
      ];
      state.teamsToScoreOddOrEvenColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "p",
        },
        //{column:staticKeyWords.teamScore,key:"teamScore",isRow:false,isDisplay:false,spanValue:3},
        {
          column: staticKeyWords.odd,
          key: "teamScoreOdd",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.even,
          key: "teamScoreEven",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        // {column:"0",key:"teamScore0",isDisplay:true},
        // {column:"1",key:"teamScore1",isDisplay:true},
        // {column:"2",key:"teamScore2",isDisplay:true},
      ];
      state.cornersHiloColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        {
          column: staticKeyWords.avarageCorner,
          key: "teamAverage",
          isRow: true,
          isDisplay: true,
          spanValue: 2,
        },
        // {column:staticKeyWords.cornersFor,key:"teamCornersFor",isRow:true,isDisplay:true,spanValue:2},
        // {column:staticKeyWords.cornersAgainst,key:"teamCornersAgainst",isRow:true,isDisplay:true,spanValue:2},
        {
          column: "8.5",
          key: "eightPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "9.5",
          key: "ninePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "10.5",
          key: "tenPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "11.5",
          key: "elevenPt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
          className: "th-spaceSeparator",
        },
        {
          column: "12.5",
          key: "twelvePt5",
          isRow: false,
          isDisplay: false,
          spanValue: 2,
        },
        {
          column: staticKeyWords.hi,
          key: "eightPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "eightPt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "ninePt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "ninePt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "tenPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "tenPt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "elevenPt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "elevenPt5Low",
          isDisplay: true,
          className: "",
        },
        {
          column: staticKeyWords.hi,
          key: "twelvePt5High",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.lo,
          key: "twelvePt5Low",
          isDisplay: true,
          className: "",
        },
      ];
      state.toatalGoalsColumns = [
        // {column:staticKeyWords.rank,key:"teamRank",isSplit:false,className:"rank"},
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team teamSpacing",
        },
        { column: staticKeyWords.p, key: "teamPlayed", isSplit: false },
        { column: "0", key: "totalGoals0", isSplit: false },
        { column: "1", key: "totalGoals1", isSplit: false },
        { column: "2", key: "totalGoals2", isSplit: false },
        { column: "3", key: "totalGoals3", isSplit: false },
        { column: "4", key: "totalGoals4", isSplit: false },
        { column: "5", key: "totalGoals5", isSplit: false },
        { column: "6", key: "totalGoals6", isSplit: false },
        { column: "7+", key: "totalGoals7Plus", isSplit: false },
      ];
      state.firstTeamToScoreColumns = [
        {
          column: staticKeyWords.rank,
          key: "teamRank",
          isSplit: false,
          className: "rank",
        },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team",
        },
        {
          column: staticKeyWords.p,
          key: "teamPlayed",
          isSplit: false,
          className: "p",
        },
        {
          column: staticKeyWords.scored1st,
          key: "teamScoredFirst",
          isSplit: false,
        },
        {
          column: staticKeyWords.conceded1st,
          key: "teamConcededFirst",
          isSplit: false,
        },
        // {column:staticKeyWords.scoredLast,key:"teamScoredLast",isSplit:false},
        // {column:staticKeyWords.concededLast,key:"teamConcededLast",isSplit:false},
      ];
      state.correctScoreColumns = [
        // { column: staticKeyWords.rank, key: "teamRank", isSplit: false, className: "rank" },
        {
          column: staticKeyWords.team,
          key: "teamName",
          isSplit: false,
          className: "team teamSpacing",
        },
        { column: staticKeyWords.p, key: "teamPlayed", isSplit: false },
        { column: "1:0", key: "score1_0", isSplit: false },
        { column: "2:0", key: "score2_0", isSplit: false },
        { column: "2:1", key: "score2_1", isSplit: false },
        { column: "3:0", key: "score3_0", isSplit: false },
        { column: "3:1", key: "score3_1", isSplit: false },
        { column: "0:0", key: "score0_0", isSplit: false },
        { column: "1:1", key: "score1_1", isSplit: false },
        { column: "2:2", key: "score2_2", isSplit: false },
        { column: "0:1", key: "score0_1", isSplit: false },
        { column: "0:2", key: "score0_2", isSplit: false },
        { column: "1:2", key: "score1_2", isSplit: false },
        { column: "0:3", key: "score0_3", isSplit: false },
        { column: "1:3", key: "score1_3", isSplit: false },
      ];
      state.tourCorrectScoreColumns = [
        {
          column: type === "team" ? staticKeyWords.win : staticKeyWords.homeWin,
          key: "homeW",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
          className: "th-separator",
        },
        {
          column: staticKeyWords.draw,
          key: "draw",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
          className: "th-separator",
        },
        {
          column:
            type === "team" ? staticKeyWords.loss : staticKeyWords.awayWin,
          key: "awayW",
          isRow: false,
          isDisplay: false,
          spanValue: 3,
        },
        {
          column: staticKeyWords.result,
          key: "homeW.resultH",
          isDisplay: true,
          className: "w-100px",
        },
        {
          column: staticKeyWords.count,
          key: "homeW.countH",
          isDisplay: true,
          className: "counttd",
        },
        {
          column: "%",
          key: "homeW.pctH",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.result,
          key: "draw.resultD",
          isDisplay: true,
          className: "w-100px",
        },
        { column: staticKeyWords.count, key: "draw.countD", isDisplay: true },
        {
          column: "%",
          key: "draw.pctD",
          isDisplay: true,
          className: "th-separator",
        },
        {
          column: staticKeyWords.result,
          key: "awayW.resultA",
          isDisplay: true,
          className: "w-100px",
        },
        { column: staticKeyWords.count, key: "awayW.countA", isDisplay: true },
        { column: "%", key: "awayW.pctA", isDisplay: true },
      ];
    },
    setTablesList: (state, action) => {
      state.tablesList = action.payload;
      if (
        (state.selectedTable.tableName === "" ||
          !state.selectedTable.tableName) &&
        state.selectedTable.tableId
      ) {
        for (var table of action.payload) {
          if (table.tableId === state.selectedTable.tableId) {
            state.selectedTable = table;
            break;
          }
        }
      }
    },
    setData: (state, action) => {
      if (
        action.payload.table.tableId &&
        action.payload.table.tableName &&
        action.payload.table.tableName !== ""
      ) {
        state.selectedTable = action.payload.table;
      }
      state.lastUpdated =
        action.payload.response && action.payload.response.lastUpdated
          ? action.payload.response.lastUpdated
          : "";
      state.isPoints =
        action.payload.response && action.payload.response.isPoints
          ? action.payload.response.isPoints
          : "";
      switch (action.payload.table.tableId) {
        case 1:
        case 3:
        case 4:
        case 6:
        case 5:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          if (
            action.payload.response &&
            action.payload.response.tableInfo &&
            action.payload.response.tableInfo.length > 0
          ) {
            state.standingsTableData = action.payload.response.tableInfo;
          }
          if (action.payload.table.tableId === 1) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0
            ) {
              if (
                action.payload.response.chartInfo.hasOwnProperty("goalsPerGame")
              ) {
                state.standingsFHGPG =
                  action.payload.response.chartInfo.goalsPerGame;
              }

              if (
                action.payload.response.chartInfo.hasOwnProperty("awayTeam") &&
                action.payload.response.chartInfo.awayTeam.length > 0 &&
                action.payload.response.chartInfo.hasOwnProperty("homeTeam") &&
                action.payload.response.chartInfo.homeTeam.length > 0 &&
                action.payload.response.chartInfo.hasOwnProperty("labels") &&
                action.payload.response.chartInfo.labels.length > 0
              ) {
                // state.standingsFHHAD = [{
                //   outcomeName:state.staticKeyWords.win,
                //   homeGoals:action.payload.response.chartInfo.firstHalfHad.homeWin,
                //   awayGoals:action.payload.response.chartInfo.firstHalfHad.awayWin
                //   },
                //   {
                //       outcomeName:state.staticKeyWords.draw,
                //       homeGoals:action.payload.response.chartInfo.firstHalfHad.homeDraw,
                //       awayGoals:action.payload.response.chartInfo.firstHalfHad.awayDraw
                //   },
                //   {
                //       outcomeName:state.staticKeyWords.loss,
                //       homeGoals:action.payload.response.chartInfo.firstHalfHad.homeLoss,
                //       awayGoals:action.payload.response.chartInfo.firstHalfHad.awayLoss
                //   }];
                state.standingsFHHAD = {
                  labels: action.payload.response.chartInfo.labels,
                  homeTeam: action.payload.response.chartInfo.homeTeam,
                  awayTeam: action.payload.response.chartInfo.awayTeam,
                };
              }
              // if(action.payload.response.chartInfo.hasOwnProperty('had')){
              //   state.standingsHAD = [{
              //     outcomeName:state.staticKeyWords.win,
              //     homeGoals:action.payload.response.chartInfo.had.homeWin,
              //     awayGoals:action.payload.response.chartInfo.had.awayWin,
              // },
              // {
              //     outcomeName:state.staticKeyWords.draw,
              //     homeGoals:action.payload.response.chartInfo.had.homeDraw,
              //     awayGoals:action.payload.response.chartInfo.had.awayDraw
              // },
              // {
              //     outcomeName:state.staticKeyWords.loss,
              //     homeGoals:action.payload.response.chartInfo.had.homeLoss,
              //     awayGoals:action.payload.response.chartInfo.had.awayLoss
              // }]

              //   state.standingsGPG = action.payload.response.chartInfo.goalsPerGame
              //   var maxValue=getMaxValue([
              //     action.payload.response.chartInfo.had.homeWin,
              //     action.payload.response.chartInfo.had.awayWin,
              //     action.payload.response.chartInfo.had.homeDraw,
              //     action.payload.response.chartInfo.had.awayDraw,
              //     action.payload.response.chartInfo.had.homeLoss,
              //     action.payload.response.chartInfo.had.awayLoss
              //   ]);
              //   state.hadMaxValue= maxValue>10?maxValue:10;
              // }
            }
          } else if (action.payload.table.tableId === 3) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0
              // &&
              // action.payload.response.chartInfo.hasOwnProperty('homeTeam') &&  action.payload.response.chartInfo.homeTeam.length>0 &&
              // action.payload.response.chartInfo.hasOwnProperty('awayTeam') && action.payload.response.chartInfo.awayTeam.length>0 &&
              // action.payload.response.chartInfo.hasOwnProperty('labels') && action.payload.response.chartInfo.labels.length > 0
            ) {
              var all = {},
                positive = {},
                negative = {},
                zero = {};
              var chartInfo = action.payload.response.chartInfo;
              if (chartInfo.all && Object.keys(chartInfo.all).length > 0) {
                all = {
                  homeTeam: chartInfo.all.homeTeam,
                  awayTeam: chartInfo.all.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (
                chartInfo.positive &&
                Object.keys(chartInfo.positive).length > 0
              ) {
                positive = {
                  homeTeam: chartInfo.positive.homeTeam,
                  awayTeam: chartInfo.positive.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (
                chartInfo.negative &&
                Object.keys(chartInfo.negative).length > 0
              ) {
                negative = {
                  homeTeam: chartInfo.negative.homeTeam,
                  awayTeam: chartInfo.negative.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (chartInfo.zero && Object.keys(chartInfo.zero).length > 0) {
                zero = {
                  homeTeam: chartInfo.zero.homeTeam,
                  awayTeam: chartInfo.zero.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (Object.keys(all).length > 0) {
                state.isHandicapChartsMul = true;
              } else {
                state.isHandicapChartsMul = false;
              }
              state.handicapChartData = { all, positive, negative, zero };
              // state.handicapChartData = {
              //     homeTeam:action.payload.response.chartInfo.homeTeam,
              //     awayTeam:action.payload.response.chartInfo.awayTeam,
              //     labels:action.payload.response.chartInfo.labels
              //   };
            }
          } else if (action.payload.table.tableId === 4) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0
            ) {
              var all = {},
                positive = {},
                negative = {};
              var chartInfo = action.payload.response.chartInfo;
              if (chartInfo.all && Object.keys(chartInfo.all).length > 0) {
                all = {
                  homeTeam: chartInfo.all.homeTeam,
                  awayTeam: chartInfo.all.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (
                chartInfo.positive &&
                Object.keys(chartInfo.positive).length > 0
              ) {
                positive = {
                  homeTeam: chartInfo.positive.homeTeam,
                  awayTeam: chartInfo.positive.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              if (
                chartInfo.negative &&
                Object.keys(chartInfo.negative).length > 0
              ) {
                negative = {
                  homeTeam: chartInfo.negative.homeTeam,
                  awayTeam: chartInfo.negative.awayTeam,
                  labels: chartInfo.labels,
                };
              }
              state.handicapHadChartData = { all, positive, negative };
            }
          } else if (action.payload.table.tableId === 5) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("homeTeam") &&
              action.payload.response.chartInfo.homeTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("awayTeam") &&
              action.payload.response.chartInfo.awayTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("labels") &&
              action.payload.response.chartInfo.labels.length > 0
            ) {
              //state.hafuGraphData = structureGraphData(action.payload.response.chartInfo);
              state.hafuGraphData = {
                homeTeam: action.payload.response.chartInfo.homeTeam,
                awayTeam: action.payload.response.chartInfo.awayTeam,
                labels: action.payload.response.chartInfo.labels,
              };
            }
          } else if (action.payload.table.tableId === 6) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              action.payload.response.chartInfo.length > 0
            ) {
              state.hiLoChartData = action.payload.response.chartInfo;
            }
          } else if (action.payload.table.tableId === 8 && false) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              action.payload.response.chartInfo.length > 0
            ) {
              state.fhHiLoChartData = action.payload.response.chartInfo;
            }
          } else if (action.payload.table.tableId === 7) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("homeTeam") &&
              action.payload.response.chartInfo.homeTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("awayTeam") &&
              action.payload.response.chartInfo.awayTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("labels") &&
              action.payload.response.chartInfo.labels.length > 0
            ) {
              //state.teamToScoreOEGraphData = action.payload.response.chartInfo;
              // if(action.payload.response.chartInfo.oddEven && Object.keys(action.payload.response.chartInfo.oddEven).length>0){
              // state.teamToScoreOEGraphData = [{
              //     outcomeName:state.staticKeyWords.odd,
              //     homeGoals:action.payload.response.chartInfo.oddEven.homeTeamOdd,
              //     awayGoals:action.payload.response.chartInfo.oddEven.awayTeamOdd
              // },
              // {
              //     outcomeName:state.staticKeyWords.even,
              //     homeGoals:action.payload.response.chartInfo.oddEven.homeTeamEven,
              //     awayGoals:action.payload.response.chartInfo.oddEven.awayTeamEven
              // }]
              state.teamToScoreOEGraphData = {
                homeTeam: action.payload.response.chartInfo.homeTeam,
                awayTeam: action.payload.response.chartInfo.awayTeam,
                labels: action.payload.response.chartInfo.labels,
              };
            }
            // }
          } else if (action.payload.table.tableId === 8) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0
            ) {
              //state.firstTeamToScoreGraphData = action.payload.response.chartInfo;
              var FTSScored = {},
                FTSConceded = {};
              // for(var data of action.payload.response.chartInfo){
              //   if(data.outcomeName === "Scored First"){
              //       FTSScored.homeScoredFirst = data.homeTeam;
              //       FTSScored.awayScoredFirst = data.awayTeam;
              //   }else if(data.outcomeName === "Conceded First"){
              //       FTSConceded.homeScoredFirst = data.homeTeam;
              //       FTSConceded.awayScoredFirst = data.awayTeam;
              //   }
              // }
              if (
                action.payload.response.chartInfo.hasOwnProperty(
                  "concededFirst",
                ) &&
                action.payload.response.chartInfo.concededFirst.length > 0 &&
                action.payload.response.chartInfo.hasOwnProperty("labels") &&
                action.payload.response.chartInfo.labels.length > 0
              ) {
                FTSConceded = {
                  data: action.payload.response.chartInfo.concededFirst,
                  labels: action.payload.response.chartInfo.labels,
                };
              }
              if (
                action.payload.response.chartInfo.hasOwnProperty(
                  "scoredFirst",
                ) &&
                action.payload.response.chartInfo.scoredFirst.length > 0 &&
                action.payload.response.chartInfo.hasOwnProperty("labels") &&
                action.payload.response.chartInfo.labels.length > 0
              ) {
                FTSScored = {
                  data: action.payload.response.chartInfo.scoredFirst,
                  labels: action.payload.response.chartInfo.labels,
                };
              }
              state.firstTeamToScoreGraphData = { FTSScored, FTSConceded };
            }
          } else if (action.payload.table.tableId === 9) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("homeTeam") &&
              action.payload.response.chartInfo.homeTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("awayTeam") &&
              action.payload.response.chartInfo.awayTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("labels") &&
              action.payload.response.chartInfo.labels.length > 0
            ) {
              //state.correctScoreGraphData = action.payload.response.chartInfo;
              // var csHomeGraphData=[],csAwayGraphData=[],csDrawGraphData=[];
              // var chartInfo = action.payload.response.chartInfo;
              // if(chartInfo.hasOwnProperty('homeTeam') && chartInfo.homeTeam.length>0){
              //   csHomeGraphData = structureGraphData(chartInfo.homeTeam,true,"score");
              // }
              // if(chartInfo.hasOwnProperty('awayTeam') && chartInfo.awayTeam.length>0){
              //     csAwayGraphData = structureGraphData(chartInfo.awayTeam,true,"score");
              // }
              // if(chartInfo.hasOwnProperty('draw') && chartInfo.draw.length>0){
              //     csDrawGraphData = structureGraphData(chartInfo.draw,true,"score");
              // }
              //state.correctScoreGraphData = {csHomeGraphData,csAwayGraphData,csDrawGraphData};
              state.correctScoreGraphData = {
                homeTeam: action.payload.response.chartInfo.homeTeam,
                awayTeam: action.payload.response.chartInfo.awayTeam,
                labels: action.payload.response.chartInfo.labels,
              };
            }
          } else if (action.payload.table.tableId === 12) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              action.payload.response.chartInfo.length > 0
            ) {
              state.FHCorretScoreGraphData = action.payload.response.chartInfo;
            }
          } else if (action.payload.table.tableId === 10) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              action.payload.response.chartInfo.length > 0
            ) {
              state.cornersHiLoChartData = action.payload.response.chartInfo;
            }
          } else if (action.payload.table.tableId === 11) {
            if (
              action.payload.response &&
              action.payload.response.chartInfo &&
              Object.keys(action.payload.response.chartInfo).length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("homeTeam") &&
              action.payload.response.chartInfo.homeTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("awayTeam") &&
              action.payload.response.chartInfo.awayTeam.length > 0 &&
              action.payload.response.chartInfo.hasOwnProperty("labels") &&
              action.payload.response.chartInfo.labels.length > 0
            ) {
              //  state.standingsChartData = structureGraphData(action.payload.response.chartInfo);
              state.standingsChartData = {
                homeTeam: action.payload.response.chartInfo.homeTeam,
                awayTeam: action.payload.response.chartInfo.awayTeam,
                labels: action.payload.response.chartInfo.labels,
              };
            }
          }

          break;
        case 2:
          if (
            action.payload.response &&
            Object.keys(action.payload.response).length
          ) {
            state.keyIndicatorsData = action.payload.response;
          }
          break;
        default:
      }
    },
    setFilterData: (state, action) => {
      if (
        action.payload.response &&
        action.payload.response.Season &&
        action.payload.response.Season.length > 0
      ) {
        state.seasonFilterData = action.payload.response.Season;
      }
      if (
        action.payload.response &&
        action.payload.response.HDC_Type &&
        action.payload.response.HDC_Type.length > 0
      ) {
        state.HDCTypeFilterData = action.payload.response.HDC_Type;
      }
      if (
        action.payload.response &&
        action.payload.response.HiLo_FT &&
        action.payload.response.HiLo_FT.length > 0
      ) {
        state.HiLoFTFilterData = action.payload.response.HiLo_FT;
      }
      if (
        action.payload.response &&
        action.payload.response.HiLo_HT &&
        action.payload.response.HiLo_HT.length > 0
      ) {
        state.HiLoHTFilterData = action.payload.response.HiLo_HT;
      }
      if (
        action.payload.response &&
        action.payload.response.Options &&
        action.payload.response.Options.length > 0
      ) {
        state.optionsList = action.payload.response.Options;
      }
      if (
        action.payload.response &&
        action.payload.response.betType &&
        action.payload.response.betType.length > 0
      ) {
        state.betTypeFilterData = action.payload.response.betType;
      }
    },
    resetTableData: (state, action) => {
      state.standingsTableData = action.payload;
      state.keyIndicatorsData = {};
    },
  },
});

export const getTablesList =
  (
    tableAndRoutes,
    eventId,
    competitionId,
    isTournament,
    type,
    languageId,
    homeTeamId,
    awayTeamId,
  ) =>
  (dispatch) => {
    var url =
      seasonalStats.getTablesList +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId;
    dispatch(setLoader(true));
    apiCaller(url, "GET", {})
      .then((response) => {
        if (
          response.data &&
          response.data != null &&
          response.data.length > 0
        ) {
          const uniqueTableNames = Array.from(
            new Set(response.data.map((item) => item.tableId)),
          );
          let specifyOrder = [];

          if (uniqueTableNames.includes(10)) {
            specifyOrder = uniqueTableNames.filter((name) => name !== 10);
            specifyOrder.splice(4, 0, 10);
          } else {
            specifyOrder = uniqueTableNames;
          }
          const sortedData = response.data.sort(
            (a, b) =>
              specifyOrder.indexOf(a.tableId) - specifyOrder.indexOf(b.tableId),
          );
          console.log(sortedData);
          dispatch(setTablesList(sortedData));
          if ((homeTeamId && awayTeamId) || type)
            dispatch(
              getSelectTable(
                tableAndRoutes,
                response.data,
                eventId,
                competitionId,
                isTournament,
                type,
                languageId,
                homeTeamId,
                awayTeamId,
              ),
            );
        } else {
          dispatch(setTablesList([]));
          dispatch(setLoader(false));
        }
      })
      .catch((error) => {
        dispatch(setTablesList([]));
        dispatch(setLoader(false));
      });
  };

export const bindLink = (id, tableAndRoutes, index) => (dispatch) => {
  return (
    tableAndRoutes &&
    tableAndRoutes[index] != undefined &&
    tableAndRoutes[index].route
  );
  // if(tableAndRoutes && tableAndRoutes.length){
  //   tableAndRoutes.forEach((table,index)=>{
  //     if(id == table.tableId){
  //       alert(table.route)
  //     }
  //   })
  // }

  // return (id == 1)?'standings':
  //        (id == 2)?'keyindicators':
  //        (id == 3)?'firsthalfhad':
  //        (id == 4)?'handicap':
  //        (id == 5)?'handicaphad':
  //        (id == 6)?'hafu':
  //        (id == 7)?'hilo':
  //        (id == 8)?'fhhilo':
  //        (id == 9)?'teamstoscoreoddoreven':
  //        (id == 10)?'firstteamtoscore':
  //        (id == 11)?'correctscore':
  //        (id == 12)?'fhcorrectscore':
  //        (id == 13)?'cornershilo':'totalgoals'
};

export const getTableData = (params) => (dispatch) => {
  // if(params.homeTeamId && (""+params.homeTeamId).length>0 && params.awayTeamId &&(""+params.awayTeamId).length>0){
  dispatch(setLoader(true));
  dispatch(resetTableData([]));

  var obj = {
    channelId: channelId,
    languageId: params.languageId,
    // "eventId":params.eventId,
    competitionId: params.competitionId,
    homeTeamId: params.homeTeamId,
    awayTeamId: params.awayTeamId,
  };
  var partialUrl = window.location.pathname.split("/");
  if (partialUrl.includes("tournament")) {
    var tabId = partialUrl[5] == "team" ? 2 : 1;
    if (tabId == 2) {
      obj.teamId = partialUrl[6];
    }
    var url =
      seasonalStats.getKeyPerformanceTableInfo +
      "?tableId=" +
      params.table.tableId +
      "&tabId=" +
      tabId;
  } else {
    var url =
      seasonalStats.getKeyPerformanceInfo +
      "?tableId=" +
      params.table.tableId +
      "&competitionId=" +
      params.competitionId;
  }
  if (
    params.table.tableId === 1 ||
    params.table.tableId === 3 ||
    params.table.tableId === 4 ||
    params.table.tableId === 6 ||
    params.table.tableId == 5 ||
    params.table.tableId == 7 ||
    params.table.tableId == 8 ||
    params.table.tableId == 9 ||
    params.table.tableId == 10 ||
    params.table.tableId == 11
  ) {
    obj.optionId = params.optionId ? params.optionId : 1;
    obj.seasonId = params.seasonId ? params.seasonId : 1;
    if (params.table.tableId === 3) {
      obj.hdcTypeId = params.hdcTypeId ? params.hdcTypeId : 1;
    }
    if (
      params.table.tableId === 1 ||
      params.table.tableId === 6 ||
      params.table.tableId === 9
    ) {
      obj.betTypeId = params.betTypeId ? params.betTypeId : 2;
    }
    if (params.table.tableId === 6) {
      obj.hiLoFtId = params.hiLoFtId ? params.hiLoFtId : 1;
    }
    if (params.table.tableId === 6) {
      obj.hiLoHtId = params.hiLoHtId ? params.hiLoHtId : 1;
    }
  }
  apiCaller(url, "POST", obj).then((response) => {
    if (response.data && Object.keys(response.data)) {
      dispatch(setData({ table: params.table, response: response.data }));
      dispatch(
        setComepetitionAndDate({
          competitionName: response.data.hasOwnProperty("competitionName")
            ? response.data.competitionName
            : response.data.teamName,
          lastUpdated: response.data.lastUpdated,
        }),
      );
      dispatch(setLoader(false));
    } else {
      dispatch(setData({ table: params.table, response: {} }));
      dispatch(
        setComepetitionAndDate({
          competitionName: "",
          lastUpdated: "",
        }),
      );
      dispatch(setLoader(false));
    }
  });
  // }
};
export const getFiltersData = (params) => (dispatch) => {
  var partialUrl = window.location.pathname.split("/");
  var tabId = partialUrl[5] == "team" ? 2 : 1;
  var teamId = partialUrl[5] == "team" ? partialUrl[6] : 1;

  // var seasonalstatsTabStatus = window.location.href.includes("seasonalstats");
  var url =
    tabId == 2
      ? seasonalStats.getFilters +
        "?languageId=" +
        params.languageId +
        "&channelId=" +
        channelId +
        "&tableId=" +
        params.table.tableId +
        "&competitionId=" +
        params.competitionId +
        "&tabId=" +
        tabId +
        "&teamId=" +
        teamId
      : seasonalStats.getFilters +
        "?languageId=" +
        params.languageId +
        "&channelId=" +
        channelId +
        "&tableId=" +
        params.table.tableId +
        "&competitionId=" +
        params.competitionId +
        "&tabId=" +
        tabId;
  dispatch(setLoader(true));
  apiCaller(url, "GET", {}).then((response) => {
    if (response.data && Object.keys(response.data)) {
      dispatch(
        setFilterData({
          tableId: params.table.tableId,
          response: response.data,
        }),
      );
      params.seasonId = response.data
        ? response.data.Season
          ? response.data.Season[0].id
          : 1
        : 1;
      dispatch(setFilter({ filter: "season", value: params.seasonId }));
      let competitionId = response.data
        ? response.data.Season
          ? response.data.Season[0].competitionId
          : params.competitionId
        : params.competitionId;
      params.competitionId = competitionId
        ? competitionId
        : params.competitionId;
      dispatch(getTableData(params));
      // dispatch(setLoader(false));
      //dispatch(setSelectedTable(params.table));
    } else {
      dispatch(setLoader(false));
    }
  });
};

export const highlightTab =
  (tableId, tableAndRoutes, index, isTournament, type) => (dispatch) => {
    var link = dispatch(bindLink(tableId, tableAndRoutes, index));
    dispatch(setTab(1));
    //dispatch(setFilter({filter:"season","value":1}))
    dispatch(setFilter({ filter: "hdcType", value: 1 }));
    dispatch(setFilter({ filter: "hiloFT", value: 1 }));
    dispatch(setFilter({ filter: "hiloHT", value: 1 }));
    dispatch(setFilter({ filter: "betType", value: 2 }));
    return (isTournament
      ? type == "team"
        ? window.location.pathname.split("/")[8]
        : window.location.pathname.split("/")[6]
      : window.location.pathname.split("/")[7]) == link
      ? "active"
      : "";
  };

export const getSelectTable =
  (
    tableAndRoutes,
    tablesList,
    eventId,
    competitionId,
    isTournament,
    type,
    languageId,
    homeTeamId,
    awayTeamId,
  ) =>
  (dispatch) => {
    tableAndRoutes.forEach((table, index) => {
      if (
        table.route ==
        (isTournament
          ? type == "team"
            ? window.location.pathname.split("/")[8]
            : window.location.pathname.split("/")[6]
          : window.location.pathname.split("/")[7])
      ) {
        // dispatch(getTableData({table:tablesList[index], eventId:eventId,competitionId:competitionId,languageId:languageId,homeTeamId:homeTeamId,awayTeamId:awayTeamId}))
        dispatch(setSelectedTable(tablesList[index]));
        dispatch(setLoader(true));
        dispatch(
          getFiltersData({
            table: tablesList[index],
            eventId: eventId,
            competitionId: competitionId,
            languageId: languageId,
            homeTeamId: homeTeamId,
            awayTeamId: awayTeamId,
          }),
        );
      }
    });
  };

export const {
  setTablesList,
  setData,
  setFilterData,
  setSelectedTable,
  setTableHeaders,
  resetTableData,
} = SeasonalStatsSlice.actions;

export default SeasonalStatsSlice.reducer;
