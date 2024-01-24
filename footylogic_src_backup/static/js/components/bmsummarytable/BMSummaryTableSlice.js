import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";
import { selectFilter, selectCornersFilter } from "../summary/SummarySlice";

export const BMSummaryTableSlice = createSlice({
  name: "bmsummarytable",
  initialState: {},
  reducers: {},
});

export const {} = BMSummaryTableSlice.actions;

export const bindStatusColor = (outcome, isHandicap, column) => (dispatch) => {
  if (
    isHandicap &&
    outcome &&
    (column == "FT Result" || column == "FHAD" || column == undefined)
  ) {
    var finalClass =
      outcome.toLowerCase() == "l"
        ? "loss"
        : outcome.toLowerCase() == "w"
          ? "win"
          : outcome.toLowerCase() == "d"
            ? "draw"
            : "";
    return "status " + finalClass;
  }
  if (
    !isHandicap &&
    outcome &&
    (column == "FH HiLo" ||
      column == "HiLo" ||
      column == "Both Teams to Score" ||
      column == "Corners HiLo" ||
      column == undefined)
  ) {
    var finalClass = outcome.toLowerCase().includes("h")
      ? "High"
      : outcome.toLowerCase().includes("l")
        ? "Low"
        : outcome.toLowerCase() == "n"
          ? "BTTSno"
          : outcome.toLowerCase() == "y"
            ? "BTTSyes"
            : "";
    return "status " + finalClass;
  }
};

export const bindLineValues =
  (key, isHome, seledtedFilter, data, highorlow, table) => (dispatch) => {
    var outcome = {};
    if (Object.keys(seledtedFilter).length > 0 && data?.length) {
      if (table == "hilo") {
        if (key == "halfTime" && isHome) {
          data.forEach((item) => {
            if (seledtedFilter.homehalf == item.line) {
              outcome = item;
            }
          });
        } else if (key == "halfTime" && !isHome) {
          data.forEach((item) => {
            if (seledtedFilter.awayhalf == item.line) {
              outcome = item;
            }
          });
        } else if (key == "fullTime" && isHome) {
          data.forEach((item) => {
            if (seledtedFilter.homefull == item.line) {
              outcome = item;
            }
          });
        } else if (key == "fullTime" && !isHome) {
          data.forEach((item) => {
            if (seledtedFilter.awayfull == item.line) {
              outcome = item;
            }
          });
        }
      } else {
        if (isHome) {
          data.forEach((item) => {
            if (seledtedFilter.homecornerfull == item.line) {
              outcome = item;
            }
          });
        } else if (!isHome) {
          data.forEach((item) => {
            if (seledtedFilter.awaycornerfull == item.line) {
              outcome = item;
            }
          });
        }
      }
      if (Object.keys(outcome).length) {
        if (table === "hilo") {
          if (highorlow == "high") {
            return outcome.high;
          } else {
            return outcome.low;
          }
        } else {
          if (highorlow == "high") {
            let highfectValue = outcome.highPct == null ? 0 : outcome.highPct;
            return outcome.high + " (" + highfectValue + "%)";
          } else {
            let lowfectValue = outcome.lowPct == null ? 0 : outcome.lowPct;
            return outcome.low + " (" + lowfectValue + "%)";
          }
        }
      } else {
        return "-";
      }
    }
  };

export const filterChanged =
  (value, isHome, column, text, staticKeyWords) => (dispatch) => {
    if (text == "cornershilo") {
      if (isHome && column == staticKeyWords.fullTime) {
        dispatch(selectCornersFilter({ text: "homecornerfull", value: value }));
      } else if (!isHome && column == staticKeyWords.fullTime) {
        dispatch(selectCornersFilter({ text: "awaycornerfull", value: value }));
      }
    } else {
      if (isHome && column == staticKeyWords.halfTime) {
        dispatch(selectFilter({ text: "homehalf", value: value }));
      } else if (isHome && column == staticKeyWords.fullTime) {
        dispatch(selectFilter({ text: "homefull", value: value }));
      } else if (!isHome && column == staticKeyWords.halfTime) {
        dispatch(selectFilter({ text: "awayhalf", value: value }));
      } else if (!isHome && column == staticKeyWords.fullTime) {
        dispatch(selectFilter({ text: "awayfull", value: value }));
      }
    }
  };

export default BMSummaryTableSlice.reducer;
