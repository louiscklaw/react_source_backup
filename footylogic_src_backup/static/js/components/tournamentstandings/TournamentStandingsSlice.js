import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { tournament, seasonalStats } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import { setLoader, metaData } from "../../AppSlice";
import { setComepetitionAndDate } from "../tournamentleague/TournamentLeagueSlice";

export const TournamentStandingsSlice = createSlice({
  name: "tournamentstandings",
  initialState: {
    optionsList: [],
    seasonFilterData: [],
    selectedSeasonFilter: 1,
    selectedTab: 1,
    standingColumns: [],
    standingsData: {},
    staticKeyWords: {},
    level1Opt: [],
    isRegSeas: true,
    level2Opt: [],
    level1SelOpt: "",
    level2SelOpt: "",
    layOut: "",
    roundId: "",
    layoutId: "",
    groupLetter: [],
    groupName: "all",
    compId: "",
  },
  reducers: {
    setTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setTableHeaders: (state, action) => {
      var staticKeyWords = action.payload;
      state.staticKeyWords = staticKeyWords;
      state.standingColumns = [
        {
          column: staticKeyWords.tournamentRank,
          key: "teamRank",
          isSplit: false,
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
        { column: staticKeyWords.standingsl, key: "teamLoss", isSplit: false },
        { column: staticKeyWords.gf, key: "teamGoalsFor", isSplit: false },
        { column: staticKeyWords.ga, key: "teamGoalsAway", isSplit: false },
        { column: staticKeyWords.gd, key: "teamGoalsDiff", isSplit: false },
        { column: staticKeyWords.pts, key: "teamPoints", isSplit: false },
        { column: staticKeyWords.form, key: "teamForm", isSplit: true },
      ];
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
        action.payload.response.Options &&
        action.payload.response.Options.length > 0
      ) {
        state.optionsList = action.payload.response.Options;
      }
    },
    setFilter: (state, action) => {
      state.selectedSeasonFilter = action.payload.value;
    },
    setData: (state, action) => {
      state.standingsData = action.payload;
    },
    setLevel1Opt: (state, action) => {
      state.level1Opt = action.payload;
    },
    setSeasonType: (state, action) => {
      state.isRegSeas = action.payload;
    },
    setLevel2Opt: (state, action) => {
      state.level2Opt = action.payload;
    },
    setSelLevel1Opt: (state, action) => {
      state.level1SelOpt = action.payload;
    },
    setSelLevel2Opt: (state, action) => {
      state.level2SelOpt = action.payload;
    },
    setLayOut: (state, action) => {
      state.layOut = action.payload;
    },
    setGroupLetter: (state, action) => {
      state.groupLetter = action.payload;
    },
    setGroupName: (state, action) => {
      state.groupName = action.payload;
    },
    setCompetitionId: (state, action) => {
      state.compId = action.payload;
    },
  },
});

export const {
  setTab,
  setData,
  setFilterData,
  setFilter,
  setTableHeaders,
  setLevel1Opt,
  setSeasonType,
  setLevel2Opt,
  setSelLevel1Opt,
  setSelLevel2Opt,
  setLayOut,
  setGroupLetter,
  setGroupName,
  setCompetitionId,
} = TournamentStandingsSlice.actions;

export const getStandingsOpt =
  (params, leagueType, languageId) => (dispatch) => {
    // if (params.isLeague) {
    var tournUrl =
      tournament.tourOptions +
      "?languageId=" +
      languageId +
      "&channelId=" +
      channelId +
      "&competitionId=" +
      params.compId +
      "&seasonId=" +
      params.seasonId;
    apiCaller(tournUrl, "GET", {}).then((tourResp) => {
      let isRegSeas = true;

      // if (tourResp.data.length === 1) {
      //   isRegSeas = true;
      // } else {
      //   if (tourResp.data[0].name === "Group Staging") {
      //     isRegSeas = true;
      //   } else {
      //     isRegSeas = false;
      //     dispatch(setLoader(false));
      //   }
      // }
      var levelData = tourResp.data;
      let levelFound = false;
      if (levelData) {
        if (params.level1Id || params.level2Id) {
          for (var lvl of levelData) {
            if (lvl.levelId === params.level1Id) {
              if (!params.level2Id) {
                dispatch(setLayOut(lvl.layoutName));
                params.roundId = lvl.id;
                params.layoutId = lvl.layoutId;
                levelFound = true;
              }

              dispatch(setSelLevel1Opt(lvl));
            }
            if (params.level2Id && lvl.subLevels.length > 0) {
              var subLevels = lvl.subLevels;
              for (var subLvl of subLevels) {
                if (subLvl.levelId === params.level2Id) {
                  dispatch(setLayOut(subLvl.layoutName));
                  params.roundId = subLvl.id;
                  params.layoutId = subLvl.layoutId;
                  dispatch(setLevel2Opt(subLevels));
                  dispatch(setSelLevel2Opt(subLvl));
                  levelFound = true;
                }
              }
            }
          }
        }
        if (!levelFound) {
          var levelData = tourResp.data;
          let array = window.location.href.split("/");
          let value = array[8] ? array[8] : "";
          let objsel = {};
          for (var LvlValue of levelData) {
            // dispatch(setSelLevel1Opt(LvlValue.name))
            if (
              value &&
              value.trim() == LvlValue.engName.replace(" ", "_").trim()
            ) {
              objsel = LvlValue;
              dispatch(setSelLevel1Opt(LvlValue));
            }
          }
          objsel = Object.keys(objsel).length > 0 ? objsel : levelData[0];
          dispatch(setLayOut(objsel.layoutName));
          params.roundId = objsel.id;
          params.layoutId = objsel.layoutId;
          dispatch(setSelLevel1Opt(objsel));
          if (objsel.subLevels.length > 0) {
            dispatch(setLevel2Opt(objsel.subLevels));
            dispatch(setSelLevel2Opt(objsel.subLevels[0]));
          } else {
            dispatch(setLevel2Opt([]));
            dispatch(setSelLevel2Opt(""));
          }
          if (objsel.subLevels.length > 0) {
            dispatch(setLevel2Opt(objsel.subLevels));
            dispatch(setSelLevel2Opt(objsel.subLevels[0]));
          } else {
            dispatch(setLevel2Opt([]));
            dispatch(setSelLevel2Opt(""));
          }
        }
        dispatch(getStandings(params, leagueType, languageId, isRegSeas));
        if (tourResp.data.length > 1) {
          dispatch(setLevel1Opt(tourResp.data));
          //dispatch(setSelLevel1Opt(tourResp.data[0]));
        } else {
          dispatch(setLevel1Opt(""));
        }
      } else {
        dispatch(setLevel2Opt(""));
        dispatch(setLevel1Opt(""));
        dispatch(setData([]));
        dispatch(
          setComepetitionAndDate({
            competitionName: "",
            lastUpdated: "",
          }),
        );
        dispatch(setLoader(false));
      }

      //if (isRegSeas) {

      // }
      // if (tourResp && tourResp.data) {
      //dispatch(setSeasonType(isRegSeas));

      //else {
      // dispatch(setLoader(false));
      // }
      // }
    });
  };
//   else {
//     dispatch(getStandings(params, leagueType, languageId, true));
//   }
// }

export const getStandings =
  (params, leagueType, languageId, isRegSeas) => (dispatch) => {
    dispatch(setData({}));
    dispatch(setLoader(true));
    var url = "";
    let tabId;
    if (params.isLeague) {
      tabId = 1;
    } else {
      tabId = 2;
    }
    var leagueTypeId = leagueType == "league" ? 1 : leagueType == "cup" ? 2 : 3;
    if (params.layoutId !== 2) {
      dispatch(setGroupName("all"));
    }
    if (params.isLeague) {
      url =
        tournament.getStandings +
        "?languageId=" +
        languageId +
        "&channelId=" +
        channelId +
        "&competitionId=" +
        params.compId +
        "&optionId=" +
        params.optionId +
        "&seasonId=" +
        params.seasonId +
        "&layoutId=" +
        params.layoutId +
        "&roundId=" +
        params.roundId +
        "&tabId=" +
        tabId +
        "&&group=" +
        (params?.groupLetter ? params.groupLetter : "all");
    } else {
      url =
        tournament.getStandings +
        "?languageId=" +
        languageId +
        "&channelId=" +
        channelId +
        "&competitionId=" +
        params.compId +
        "&optionId=" +
        params.optionId +
        "&seasonId=" +
        params.seasonId +
        "&layoutId=" +
        params.layoutId +
        "&roundId=" +
        params.roundId +
        "&tabId=" +
        tabId +
        "&teamId=" +
        params.teamId +
        "&&group=" +
        (params?.groupLetter ? params.groupLetter : "all");
      // dispatch(setLayOut("LEAGUE_TABLE"));
      // url = tournament.getTeamStandings + '?languageId=' + languageId + '&channelId=' + channelId + '&competitionId='
      // + params.compId + '&teamId=' + params.teamId + '&optionId=' + params.optionId + '&seasonId=' + params.seasonId+'&tabId='+tabId;
      // dispatch(setLevel2Opt(''));
      // dispatch(setLevel1Opt(''));
    }
    apiCaller(url, "GET", {}).then((response) => {
      if (response && response.data) {
        const data = response.data;
        if (data.corrections && data.corrections.length > 0) {
          const correctionVal = data.corrections
            .filter((val) => val && val.teamName)
            .map((val) => val.teamName);
          for (const teamName of correctionVal) {
            const updateInfo = data.info.find(
              (info) => info && info.teamName === teamName,
            );
            if (updateInfo) {
              updateInfo.teamName = updateInfo.teamName + "*";
              // updateInfo.teamName = `<span style="color: red;">${updateInfo.teamName}*</span>`;
            }
          }
        }
        dispatch(setData(response.data));
        dispatch(
          setComepetitionAndDate({
            competitionName: response.data.hasOwnProperty("competitionName")
              ? response.data.competitionName
              : response.data.teamName,
            lastUpdated: response.data.lastUpdated,
            corrections: response.data.corrections,
          }),
        );
        dispatch(
          setCompetitionId(
            response.data
              ? response.data.Season
                ? response.data.Season[0].competitionId
                : params.compId
              : params.compId,
          ),
        );
        dispatch(
          metaData(
            params.isLeague ? "TournamentLeague" : "TeamName",
            response.data.hasOwnProperty("competitionName")
              ? response.data.competitionName
              : response.data.teamName,
          ),
        );
        if (params?.groupLetter?.toLowerCase() === "all") {
          dispatch(setGroupLetter(response.data.displayname));
        }
      } else {
        dispatch(
          setComepetitionAndDate({
            competitionName: "",
            lastUpdated: "",
            corrections: [],
          }),
        );
        dispatch(setGroupName("all"));
        dispatch(setGroupLetter([]));
        //dispatch(setBanner(response.data));
      }
      dispatch(setLoader(false));
    });
  };

export const getFiltersData =
  (params, leagueType, languageId) => (dispatch) => {
    let tableId = 1;
    let tabId;
    let teamId = params.teamId;
    if (params.isLeague) {
      tabId = 1;
    } else {
      tabId = 2;
    }
    if (params.isLeague) {
      var url =
        seasonalStats.getFilters +
        "?languageId=" +
        languageId +
        "&channelId=" +
        channelId +
        "&tableId=" +
        tableId +
        "&competitionId=" +
        params.compId +
        "&tabId=" +
        tabId;
    } else {
      var url =
        seasonalStats.getFilters +
        "?languageId=" +
        languageId +
        "&channelId=" +
        channelId +
        "&tableId=" +
        tableId +
        "&competitionId=" +
        params.compId +
        "&tabId=" +
        tabId +
        "&teamId=" +
        teamId;
    }
    dispatch(setLoader(true));
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data && Object.keys(response.data)) {
        dispatch(setFilterData({ tableId: tableId, response: response.data }));
        params.seasonId = response.data
          ? response.data.Season
            ? response.data.Season[0].id
            : 1
          : 1;
        dispatch(setFilter({ value: params.seasonId }));
        var competitionId = response.data
          ? response.data.Season
            ? response.data.Season[0].competitionId
            : params.compId
          : params.compId;
        params.compId = competitionId ? competitionId : params.compId;
        // if(leagueType !== "team"){
        dispatch(getStandingsOpt(params, params.leagueType, languageId));
        // }else{
        //   dispatch(getStandings(params, params.leagueType,languageId, true));
        // }
      } else {
        dispatch(setLoader(false));
      }
    });
  };

export const resetLevels = () => (dispatch) => {
  dispatch(setLevel2Opt(""));
  dispatch(setLevel1Opt(""));
  dispatch(setFilter({ value: 1 }));
  dispatch(setData([]));
  dispatch(
    setComepetitionAndDate({
      competitionName: "",
      lastUpdated: "",
      corrections: [],
    }),
  );
  dispatch(setLayOut(""));
  dispatch(setSelLevel1Opt(""));
  dispatch(setSelLevel2Opt(""));
  dispatch(setGroupName("all"));
  dispatch(setGroupLetter([]));
};
export default TournamentStandingsSlice.reducer;
