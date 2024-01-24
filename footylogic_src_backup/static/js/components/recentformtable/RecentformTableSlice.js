import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const RecentformTableSlice = createSlice({
  name: "recentfromtable",
  initialState: {
    selectedTab: "had",
    graphData: [],
    homeTeamData: [],
    awayTeamData: [],
    homeTeamName: "",
    awayTeamName: "",
    selectedOption: 1,
    selectedHomeFhHiloTab: 1.5,
    selectedHomeHiloTab: 2.5,
    selectedAwayFhHiloTab: 1.5,
    selectedAwayHiloTab: 2.5,
    homefhHiLo: [],
    selectedHomeCornerTab: 9.5,
    selectedAwayCornerTab: 9.5,
    homeCorners: [],
    awayCorners: [],
  },
  reducers: {
    selectHomeFhHiloTab: (state, action) => {
      state.selectedHomeFhHiloTab = action.payload;
    },
    selectHomeHiloTab: (state, action) => {
      state.selectedHomeHiloTab = action.payload;
    },
    selectAwayFhHiloTab: (state, action) => {
      state.selectedAwayFhHiloTab = action.payload;
    },
    selectAwayHiloTab: (state, action) => {
      state.selectedAwayHiloTab = action.payload;
    },
    selectHomeCornerTab: (state, action) => {
      state.selectedHomeCornerTab = action.payload;
    },
    selectAwayCornerTab: (state, action) => {
      state.selectedAwayCornerTab = action.payload;
    },
  },
});

export const optionChanged =
  (
    option,
    loadData,
    selectedTab,
    from,
    homeTeamId,
    awayTeamId,
    languageId,
    tableSelectedOptions,
  ) =>
  (dispatch) => {
    dispatch(resetAllTabs(selectedTab, from));
    // var opt = (option==0)?1:(option==1)?2:3;
    dispatch(
      loadData(
        selectedTab,
        option,
        from,
        homeTeamId,
        awayTeamId,
        languageId,
        tableSelectedOptions,
      ),
    );
  };

export const bindStatusColor = (result, text, list, from) => {
  var data = result;
  if (text && list && list.length) {
    data = "";
    list.forEach((item) => {
      if (item.line == result) {
        data = item.outcomeName;
      }
    });
  }
  if (data && data !== "-" && data !== undefined) {
    if (from == "class") {
      if (text == "hilo") {
        return data.toLowerCase() == "h"
          ? "status High"
          : data.toLowerCase() == "l"
            ? "status Low"
            : data.toLowerCase() == "n"
              ? "status BTTSno"
              : data.toLowerCase() == "y"
                ? "status BTTSyes"
                : "";
      } else if (text == "corners") {
        return data.toLowerCase().match("h")
          ? "status High"
          : data.toLowerCase().match("l")
            ? "status Low"
            : "";
      } else if (text == "handicapsHAD") {
        return data.toLowerCase() == "w"
          ? "status win"
          : data.toLowerCase() == "l"
            ? "status loss"
            : "status draw";
      } else if (text == "handicaps") {
        return data.toLowerCase() == "w"
          ? "status win"
          : data.toLowerCase() == "l"
            ? "status loss"
            : "status draw";
      } else {
        return data.toLowerCase() == "l"
          ? "status loss"
          : data.toLowerCase() == "w"
            ? "status win"
            : data.toLowerCase() == "d"
              ? "status draw"
              : "";
      }
    } else {
      return data ? data : "-";
    }
  } else {
    return data ? data : "-";
  }
};

export const hiLoOptionChanged = (option, text) => (dispatch) => {
  if (text == "home_fhHiLo") {
    dispatch(selectHomeFhHiloTab(option));
  } else if (text == "home_hiLo") {
    dispatch(selectHomeHiloTab(option));
  } else if (text == "away_fhHiLo") {
    dispatch(selectAwayFhHiloTab(option));
  } else if (text == "away_hiLo") {
    dispatch(selectAwayHiloTab(option));
  } else if (text == "home_corners") {
    dispatch(selectHomeCornerTab(option));
  } else if (text == "away_corners") {
    dispatch(selectAwayCornerTab(option));
  }
};

export const resetAllTabs = (selectedTab, from) => (dispatch) => {
  if (from !== null && from !== "" && from !== undefined) {
    if (from == "home" && selectedTab == "hilo") {
      dispatch(selectHomeFhHiloTab(1.5));
      dispatch(selectHomeHiloTab(2.5));
    } else if (from == "away" && selectedTab == "hilo") {
      dispatch(selectAwayFhHiloTab(1.5));
      dispatch(selectAwayHiloTab(2.5));
    } else if (from == "home" && selectedTab == "corners") {
      dispatch(selectHomeCornerTab(9.5));
    } else if (from == "away" && selectedTab == "corners") {
      dispatch(selectAwayCornerTab(9.5));
    }
  } else {
    dispatch(selectHomeFhHiloTab(1.5));
    dispatch(selectHomeHiloTab(2.5));
    dispatch(selectAwayFhHiloTab(1.5));
    dispatch(selectAwayHiloTab(2.5));
    dispatch(selectHomeCornerTab(9.5));
    dispatch(selectAwayCornerTab(9.5));
  }
};

export const {
  selectHomeFhHiloTab,
  selectHomeHiloTab,
  selectAwayFhHiloTab,
  selectAwayHiloTab,
  selectHomeCornerTab,
  selectAwayCornerTab,
} = RecentformTableSlice.actions;

export default RecentformTableSlice.reducer;
