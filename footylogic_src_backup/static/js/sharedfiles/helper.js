import * as moment from "moment";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const fullWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const fullMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(date, component) {
  if (date) {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    var dt = "";
    if (component !== "home") {
      var utcDate = new Date(date.replace(/\s/, "T") + "Z").toUTCString();
      dt = new Date(utcDate);
    } else {
      dt = new Date(date.replace(/\s/, "T"));
    }
    var formatedDate = "";
    if (component === "banner" || component === "home") {
      formatedDate = {
        date:
          addZero(dt.getDate()) +
          "/" +
          addZero(dt.getMonth() + 1) +
          "/" +
          dt.getFullYear(),
        day: weekDays[dt.getDay()],
        time: addZero(dt.getHours()) + ":" + addZero(dt.getMinutes()),
      };
    } else if (component === "kotree") {
      formatedDate = {
        date: ordinal_suffix_of(dt.getDate()),
        month: fullMonths[dt.getMonth()],
      };
    } else if (component === "hrMt") {
      formatedDate = addZero(dt.getHours()) + ":" + addZero(dt.getMinutes());
    } else {
      formatedDate =
        weekDays[dt.getDay()] +
        " " +
        dt.getDate() +
        " " +
        months[dt.getMonth()] +
        " " +
        addZero(dt.getHours()) +
        ":" +
        addZero(dt.getMinutes());
    }

    return formatedDate;
  }
}
function addZero(number) {
  if (number < 10) {
    return 0 + "" + number;
  }
  return number;
}
export function getTimeZoneOffset() {
  var timeInterval = new Date().getTimezoneOffset();
  if (timeInterval < 0) {
    return Math.abs(timeInterval);
  } else {
    return -Math.abs(timeInterval);
  }
}

export function formatFixtureResultsDate(date, type) {
  if (date && date) {
    var dt = new Date(date.replace(/\s/, "T"));
    if (type === "carousel") {
      return {
        month: months[dt.getMonth()],
        year: dt.getFullYear(),
      };
    } else {
      //return fullWeekDays[dt.getDay()]+" "+ordinal_suffix_of(dt.getDate())+" "+fullMonths[dt.getMonth()];
      return {
        weekDay: fullWeekDays[dt.getDay()],
        date: ordinal_suffix_of(dt.getDate()),
        month: fullMonths[dt.getMonth()],
      };
    }
  } else {
    return null;
  }
}
export function addSuffix(num, isOnlySuffix = false) {
  return ordinal_suffix_of(num, isOnlySuffix);
}
function ordinal_suffix_of(i, isOnlySuffix) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    if (isOnlySuffix) {
      return "st";
    } else {
      return i + "st";
    }
  }
  if (j == 2 && k != 12) {
    if (isOnlySuffix) {
      return "nd";
    } else {
      return i + "nd";
    }
  }
  if (j == 3 && k != 13) {
    if (isOnlySuffix) {
      return "rd";
    } else {
      return i + "rd";
    }
  }
  if (isOnlySuffix) {
    return "th";
  } else {
    return i + "th";
  }
}

export function structureGraphData(
  mainData,
  isOutcomeChange = false,
  key = "",
) {
  var graphData = [];
  for (var data of mainData) {
    graphData.push({
      outcomeName: isOutcomeChange ? data[key] : data.outcomeName,
      homeGoals: data.homeTeam,
      awayGoals: data.awayTeam,
    });
  }
  return graphData;
}
export function getMaxValue(values) {
  var max = values[0];
  for (var i = 1; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max;
}
