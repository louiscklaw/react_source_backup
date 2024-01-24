import { createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { channelId } from "../../sharedfiles/constants";
import { setLoader } from "../../AppSlice";

export const HTOHOutputSlice = createSlice({
  name: "htohoutput",
  initialState: {
    h2hLastEncounters: {},
    selectedOptionId: 1,
    hiLoOptions: [],
    selectedHiLoOption: "",
    hadFullTime: {},
    hadHalfTime: {},
    goalsPerGame: {},
    ftHiLo: [],
    htHiLo: [],
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOptionId = action.payload;
    },
    setH2HLastEncounters: (state, action) => {
      state.h2hLastEncounters = action.payload;
    },
    setHiLoOptions: (state, action) => {
      state.hiLoOptions = action.payload;
    },
    setSelectedHiLoOption: (state, action) => {
      state.selectedHiLoOption = action.payload;
    },
    setGraphData: (state, action) => {
      if (
        action.payload.hasOwnProperty("homeAwayDraw") &&
        Object.keys(action.payload.homeAwayDraw).length > 0
      ) {
        if (
          action.payload.homeAwayDraw.hasOwnProperty("had") &&
          Object.keys(action.payload.homeAwayDraw.had).length > 0
        ) {
          state.hadFullTime = action.payload.homeAwayDraw.had;
        }
        if (
          action.payload.homeAwayDraw.hasOwnProperty("firstHalfHad") &&
          Object.keys(action.payload.homeAwayDraw.firstHalfHad).length > 0
        ) {
          state.hadHalfTime = action.payload.homeAwayDraw.firstHalfHad;
        }
        if (
          action.payload.homeAwayDraw.hasOwnProperty("goalsPerGame") &&
          Object.keys(action.payload.homeAwayDraw.goalsPerGame).length > 0
        ) {
          state.goalsPerGame = action.payload.homeAwayDraw.goalsPerGame;
        }
      }
      if (
        action.payload.hasOwnProperty("hiLo") &&
        Object.keys(action.payload.hiLo).length > 0
      ) {
        if (
          action.payload.hiLo.hasOwnProperty("ftHiLo") &&
          action.payload.hiLo.ftHiLo.length > 0
        ) {
          state.ftHiLo = action.payload.hiLo.ftHiLo;
        }
        if (
          action.payload.hiLo.hasOwnProperty("htHiLo") &&
          action.payload.hiLo.htHiLo.length > 0
        ) {
          state.htHiLo = action.payload.hiLo.htHiLo;
        }
      }
    },
  },
});

export const fetchh2hlastencouters = (params) => (dispatch) => {
  dispatch(setLoader(true));
  dispatch(setSelectedOption(params.optionId));
  var url =
    matchCenter.getHTOHOutput +
    "?languageId=" +
    params.languageId +
    "&channelId=" +
    channelId +
    "&eventId=" +
    params.eventId +
    "&optionId=" +
    1; // All hardcoding As per request
  apiCaller(url, "GET", {}).then((response) => {
    dispatch(setLoader(false));
    if (response && response.data !== undefined) {
      var hiLoOptions = [];
      if (response.data.hasOwnProperty("h2hLast8Encounters")) {
        for (var i = 0; i < response.data.h2hLast8Encounters.length; i++) {
          if (response.data.h2hLast8Encounters[i].hasOwnProperty("hiLo")) {
            if (response.data.h2hLast8Encounters[i].hiLo.length) {
              response.data.h2hLast8Encounters[i].hiLo.forEach((item) => {
                var val = item.line;
                if (hiLoOptions.indexOf(val) === -1) {
                  hiLoOptions.push(val);
                }
              });
            }
          }
        }
      }
      if (
        (response.data.hasOwnProperty("homeAwayDraw") &&
          Object.keys(response.data.homeAwayDraw).length > 0) ||
        (response.data.hasOwnProperty("hiLo") &&
          Object.keys(response.data.hiLo).length > 0)
      ) {
        dispatch(setGraphData(response.data));
      }
      dispatch(setSelectedHiLoOption(hiLoOptions[0]));
      dispatch(setH2HLastEncounters(response.data));
      dispatch(setHiLoOptions(hiLoOptions));
    }
  });
};

export const bindHiLoValue = (hiLo, selectedHiLoOption, from) => (dispatch) => {
  var data = "";
  // hiLo.forEach((option)=>{
  //   if(option.line===selectedHiLoOption){
  //     data = option.outcomeName;
  //   }
  // })
  if (from === "value") {
    return data ? data : "-";
  } else if (from === "class") {
    return data.toLowerCase() === "h"
      ? "status win"
      : data.toLowerCase() === "l"
        ? "status loss"
        : "";
  }
};

export const {
  setSelectedOption,
  setH2HLastEncounters,
  setHiLoOptions,
  setSelectedHiLoOption,
  setGraphData,
} = HTOHOutputSlice.actions;

export default HTOHOutputSlice.reducer;
