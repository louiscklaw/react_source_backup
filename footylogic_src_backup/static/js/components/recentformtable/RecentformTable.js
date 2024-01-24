import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadData,
  selectDefaultHomeOptionId,
  selectDefaultAwayOptionId,
} from "../recentformtab/RecentFormTabSlice";
import {
  optionChanged,
  bindStatusColor,
  hiLoOptionChanged,
  resetAllTabs,
  selectHomeFhHiloTab,
  selectHomeHiloTab,
  selectAwayFhHiloTab,
  selectAwayHiloTab,
  selectHomeCornerTab,
  selectAwayCornerTab,
  resetDropDown,
} from "./RecentformTableSlice";
import { formatDate } from "../../sharedfiles/helper";
import Loading from "../loading/Loading";
import { metaData } from "../../AppSlice";

class RecentformTable extends Component {
  constructor() {
    super();
    this.state = {
      defaultFHHiloValue: 1.5,
      defaultHiloValue: 2.5,
      defaultCornersHiloValue: 9.5,
    };
  }
  componentWillMount() {
    // this.setState({
    //     selectedHomeOptionId:this.props.homeSelectedOptionId?this.props.homeSelectedOptionId:2,
    //     selectedAwayOptionId:this.props.awaySelectedOptionId?this.props.awaySelectedOptionId:3
    // });
    // this.setState({
    //     selectedHomeOptionId:1,
    //     selectedAwayOptionId:1
    // });
  }
  componentDidMount() {
    this.props.dispatch(resetAllTabs(this.props.selectedTab, null));
    if (this.props?.homeTeamName && this.props?.awayTeamName) {
      this.props.dispatch(
        metaData(
          "RecentFormTab",
          this.props.homeTeamName + " vs " + this.props.awayTeamName,
        ),
      );
    }
    this.props.dispatch(selectDefaultHomeOptionId(1));
    this.props.dispatch(selectDefaultAwayOptionId(1));
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props?.homeTeamName &&
      this.props?.awayTeamName &&
      prevProps?.homeTeamName !== this.props.homeTeamName &&
      prevProps?.awayTeamName !== this.props.awayTeamName
    ) {
      this.props.dispatch(resetAllTabs(this.props.selectedTab, null));
      this.props.dispatch(
        metaData(
          "RecentFormTab",
          this.props.homeTeamName + " vs " + this.props.awayTeamName,
        ),
      );
    }
  }
  optionSelected(type, event) {
    this.props.dispatch(
      optionChanged(
        event.target.value,
        loadData,
        this.props.selectedTab,
        type,
        this.props.homeTeamId,
        this.props.awayTeamId,
        this.props.languageId,
        {
          selectedHomeOptionId:
            type === "home"
              ? event.target.value
              : this.props.defaultHomeOptionId,
          selectedAwayOptionId:
            type === "away"
              ? event.target.value
              : this.props.defaultAwayOptionId,
        },
      ),
    );
    if (type === "home") {
      // this.setState({selectedHomeOptionId:event.target.value});
      this.props.dispatch(selectDefaultHomeOptionId(event.target.value));
    } else {
      // this.setState({selectedAwayOptionId:event.target.value});
      this.props.dispatch(selectDefaultAwayOptionId(event.target.value));
    }

    if (this.props.onOptionChange) {
      this.props.onOptionChange(type, event.target.value);
    }
  }
  handleCornersStatus(selectedHomeCornerTab, item) {
    let corner = bindStatusColor(selectedHomeCornerTab, "corners", item, "");
    let formattedValue = "-";
    if (corner && corner != null && corner !== "" && corner !== "-") {
      formattedValue =
        (corner.toLowerCase().charAt(0).toLowerCase() === "h"
          ? this.props.staticKeyWords.highIcon
          : this.props.staticKeyWords.lowIcon) + corner.slice(1);
    }
    return formattedValue;
  }
  render() {
    return (
      <div className="tableTwo-column">
        <div className="tableHome">
          <div className="tableFull-width">
            <div className="tableHeader-home">
              <div className="tableHeading">
                {this.props.homeTeamName}{" "}
                <span>({this.props.staticKeyWords.recentResults})</span>
              </div>
              <div className="tableHeading-rightSection">
                <div className="form-group">
                  <div className="form-control">
                    <select
                      className="select-margin"
                      value={this.props.defaultHomeOptionId}
                      onChange={this.optionSelected.bind(this, "home")}
                    >
                      {this.props.lastEncountersOptions.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {this.selectedHomeOptionId} {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <table className="tableDefault">
              <thead>
                <tr>
                  <th>{this.props.staticKeyWords.competition}</th>
                  <th>{this.props.staticKeyWords.mcDate}</th>
                  <th>{this.props.staticKeyWords.ha}</th>
                  <th>{this.props.staticKeyWords.against}</th>
                  <th>{this.props.staticKeyWords.pos}</th>

                  {this.props.selectedTab === "had" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.scoreHt}
                      </th>
                      <th>{this.props.staticKeyWords.wbyl}</th>
                      <th>{this.props.staticKeyWords.fhwbyl}</th>
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "handicap" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.ftScore}
                      </th>
                      <th>{this.props.staticKeyWords.hdc}</th>
                      <th>{this.props.staticKeyWords.hHAD}</th>
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "hilo" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.scoreHt}
                      </th>
                      <th className="w-50">{this.props.staticKeyWords.ttg}</th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.fhHiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "home_fhHiLo",
                                    ),
                                  )
                                }
                              >
                                {this.props.homefhHiLo &&
                                  this.props.homefhHiLo.map((item, index) => {
                                    return item ==
                                      this.state.defaultFHHiloValue ? (
                                      <option selected key={index} value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.hiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "home_hiLo",
                                    ),
                                  )
                                }
                              >
                                {this.props.homehiLo &&
                                  this.props.homehiLo.map((item, index) => {
                                    return item ==
                                      this.state.defaultHiloValue ? (
                                      <option key={index} selected value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                      {/*<th>{this.props.staticKeyWords.bts}</th>
                                        <th>{this.props.staticKeyWords.tts}</th>*/}
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "corners" && (
                    <React.Fragment>
                      <th>{this.props.staticKeyWords.scoreHt}</th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.cornersHiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "home_corners",
                                    ),
                                  )
                                }
                              >
                                {this.props.homeCorners &&
                                  this.props.homeCorners.map((item, index) => {
                                    return item ==
                                      this.state.defaultCornersHiloValue ? (
                                      <option key={index} selected value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                    </React.Fragment>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.props.homeTeamData.length ? (
                  this.props.homeTeamData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div>
                            {item.competitionName ? item.competitionName : "-"}
                          </div>
                        </td>
                        <td>
                          <div>{formatDate(item.kickOff, "banner").date}</div>
                        </td>
                        <td>
                          <div>{item.homeOrAway ? item.homeOrAway : "-"}</div>
                        </td>
                        <td>
                          <div>{item.oppTeamName ? item.oppTeamName : "-"}</div>
                        </td>
                        <td>
                          <div>{item.teamPos ? item.teamPos : "-"}</div>
                        </td>

                        {this.props.selectedTab === "had" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    item.fullTimeResult,
                                    "",
                                    "",
                                    "class",
                                  )}
                                >
                                  {item.fullTimeResult
                                    ? item.fullTimeResult.toLowerCase() === "w"
                                      ? this.props.staticKeyWords.hadWinIcon
                                      : item.fullTimeResult.toLowerCase() ===
                                          "l"
                                        ? this.props.staticKeyWords.hadLossIcon
                                        : item.fullTimeResult.toLowerCase() ===
                                            "d"
                                          ? this.props.staticKeyWords.d
                                          : "-"
                                    : "-"}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    item.firstHalfHad,
                                    "",
                                    "",
                                    "class",
                                  )}
                                >
                                  {item.firstHalfHad
                                    ? item.firstHalfHad.toLowerCase() === "w"
                                      ? this.props.staticKeyWords.hadWinIcon
                                      : item.firstHalfHad.toLowerCase() === "l"
                                        ? this.props.staticKeyWords.hadLossIcon
                                        : item.firstHalfHad.toLowerCase() ===
                                            "d"
                                          ? this.props.staticKeyWords.d
                                          : "-"
                                    : "-"}
                                </span>
                              </div>
                            </td>
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "handicap" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}
                              </div>
                            </td>
                            <td>
                              {item.hdcOutcome ? (
                                <div className="textIcon">
                                  <span className="hdcValue">
                                    {item.hdcName}
                                  </span>
                                  <span
                                    className={bindStatusColor(
                                      item.hdcOutcome,
                                      "handicaps",
                                      "",
                                      "class",
                                    )}
                                  >
                                    {item.hdcOutcome &&
                                    item.hdcOutcome !== null &&
                                    item.hdcOutcome !== "-"
                                      ? item.hdcOutcome.toLowerCase() === "w"
                                        ? this.props.staticKeyWords.hadWinIcon
                                        : item.hdcOutcome.toLowerCase() === "l"
                                          ? this.props.staticKeyWords
                                              .hadLossIcon
                                          : item.hdcOutcome.toLowerCase() ===
                                              "d"
                                            ? this.props.staticKeyWords.d
                                            : "-"
                                      : "-"}
                                  </span>
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                            <td>
                              {item.hHadOutcome ? (
                                <div className="textIcon">
                                  <span>{item.hHadName}</span>
                                  <span
                                    className={bindStatusColor(
                                      item.hHadOutcome,
                                      "handicapsHAD",
                                      "",
                                      "class",
                                    )}
                                  >
                                    {item.hHadOutcome
                                      ? item.hHadOutcome.toLowerCase() === "w"
                                        ? this.props.staticKeyWords.hadWinIcon
                                        : item.hHadOutcome.toLowerCase() === "l"
                                          ? this.props.staticKeyWords
                                              .hadLossIcon
                                          : item.hHadOutcome.toLowerCase() ===
                                              "d"
                                            ? this.props.staticKeyWords.d
                                            : "-"
                                      : "-"}
                                  </span>
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "hilo" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>
                            <td>
                              <div>{item.totalGoals}</div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedHomeFhHiloTab,
                                    "hilo",
                                    item.fhHiLo,
                                    "class",
                                  )}
                                >
                                  {bindStatusColor(
                                    this.props.selectedHomeFhHiloTab,
                                    "hilo",
                                    item.fhHiLo,
                                  )?.toLowerCase() === "h"
                                    ? this.props.staticKeyWords.highIcon
                                    : this.props.staticKeyWords.lowIcon}{" "}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedHomeHiloTab,
                                    "hilo",
                                    item.hiLo,
                                    "class",
                                  )}
                                >
                                  {bindStatusColor(
                                    this.props.selectedHomeHiloTab,
                                    "hilo",
                                    item.hiLo,
                                  ).toLowerCase() === "h"
                                    ? this.props.staticKeyWords.highIcon
                                    : this.props.staticKeyWords.lowIcon}
                                </span>
                              </div>
                            </td>
                            {/*<td>
                                                <div><span className={bindStatusColor(item.bothTeamsToScore,'hilo','','class')}>{item.bothTeamsToScore}</span></div>
                                            </td>
                                            <td>
                                                <div>{item.teamsToScore}</div>
                                            </td>*/}
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "corners" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedHomeCornerTab,
                                    "corners",
                                    item.cornerHiLo,
                                    "class",
                                  )}
                                >
                                  {this.handleCornersStatus(
                                    this.props.selectedHomeCornerTab,
                                    item.cornerHiLo,
                                  )}
                                </span>
                              </div>
                            </td>
                          </React.Fragment>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={
                        this.props.selectedTab === "had"
                          ? 9
                          : this.props.selectedTab === "handicap"
                            ? 8
                            : this.props.selectedTab === "hilo"
                              ? 11
                              : this.props.selectedTab === "corners"
                                ? 8
                                : 0
                      }
                    >
                      <Loading
                        isLoader={this.props.loader}
                        isNoData={
                          !this.props.loader && !this.props.homeTeamData.length
                        }
                        temporarilyNoData={
                          this.props.staticKeyWords.temporarilyNoData
                        }
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="tableAway">
          <div className="tableFull-width">
            <div className="tableHeader-away">
              <div className="tableHeading">
                {this.props.awayTeamName}{" "}
                <span>({this.props.staticKeyWords.recentResults})</span>
              </div>
              <div className="tableHeading-rightSection">
                <div className="form-group">
                  <div className="form-control">
                    <select
                      className="select-margin"
                      value={this.props.defaultAwayOptionId}
                      onChange={this.optionSelected.bind(this, "away")}
                    >
                      {this.props.lastEncountersOptions.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <table className="tableDefault">
              <thead>
                <tr>
                  <th>{this.props.staticKeyWords.competition}</th>
                  <th>{this.props.staticKeyWords.mcDate}</th>
                  <th>{this.props.staticKeyWords.ha}</th>
                  <th>{this.props.staticKeyWords.against}</th>
                  <th>{this.props.staticKeyWords.pos}</th>
                  {this.props.selectedTab === "had" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.scoreHt}
                      </th>
                      <th>{this.props.staticKeyWords.wbyl}</th>
                      <th>{this.props.staticKeyWords.fhwbyl}</th>
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "handicap" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.ftScore}
                      </th>
                      <th>{this.props.staticKeyWords.hdc}</th>
                      <th>{this.props.staticKeyWords.hHAD}</th>
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "hilo" && (
                    <React.Fragment>
                      <th className="playerHT-FT">
                        {this.props.staticKeyWords.scoreHt}
                      </th>
                      <th className="w-50">{this.props.staticKeyWords.ttg}</th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.fhHiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "away_fhHiLo",
                                    ),
                                  )
                                }
                              >
                                {this.props.awayfhHiLo &&
                                  this.props.awayfhHiLo.map((item, index) => {
                                    return item ==
                                      this.state.defaultFHHiloValue ? (
                                      <option selected key={index} value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.hiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "away_hiLo",
                                    ),
                                  )
                                }
                              >
                                {this.props.awayhiLo &&
                                  this.props.awayhiLo.map((item, index) => {
                                    return item ==
                                      this.state.defaultHiloValue ? (
                                      <option key={index} selected value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                      {/*<th>{this.props.staticKeyWords.bts}</th>
                                        <th>{this.props.staticKeyWords.tts}</th>*/}
                    </React.Fragment>
                  )}
                  {this.props.selectedTab === "corners" && (
                    <React.Fragment>
                      <th>{this.props.staticKeyWords.scoreHt}</th>
                      <th>
                        <div>
                          {this.props.staticKeyWords.cornersHiLo}
                          <div className="form-group">
                            <div className="form-control">
                              <select
                                className="select-margin"
                                onChange={(event) =>
                                  this.props.dispatch(
                                    hiLoOptionChanged(
                                      event.target.value,
                                      "away_corners",
                                    ),
                                  )
                                }
                              >
                                {this.props.awayCorners &&
                                  this.props.awayCorners.map((item, index) => {
                                    return item ==
                                      this.state.defaultCornersHiloValue ? (
                                      <option key={index} selected value={item}>
                                        {item}
                                      </option>
                                    ) : (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </th>
                    </React.Fragment>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.props.awayTeamData.length ? (
                  this.props.awayTeamData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div>
                            {item.competitionName ? item.competitionName : "-"}
                          </div>
                        </td>
                        <td>
                          <div>{formatDate(item.kickOff, "banner")?.date}</div>
                        </td>
                        <td>
                          <div>{item.homeOrAway ? item.homeOrAway : "-"}</div>
                        </td>
                        <td>
                          <div>{item.oppTeamName ? item.oppTeamName : "-"}</div>
                        </td>
                        <td>
                          <div>{item.teamPos ? item.teamPos : "-"}</div>
                        </td>

                        {this.props.selectedTab === "had" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>

                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    item.fullTimeResult,
                                    "",
                                    "",
                                    "class",
                                  )}
                                >
                                  {item.fullTimeResult
                                    ? item.fullTimeResult.toLowerCase() === "w"
                                      ? this.props.staticKeyWords.hadWinIcon
                                      : item.fullTimeResult.toLowerCase() ===
                                          "l"
                                        ? this.props.staticKeyWords.hadLossIcon
                                        : item.fullTimeResult.toLowerCase() ===
                                            "d"
                                          ? this.props.staticKeyWords.d
                                          : "-"
                                    : "-"}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    item.firstHalfHad,
                                    "",
                                    "",
                                    "class",
                                  )}
                                >
                                  {item.firstHalfHad
                                    ? item.firstHalfHad.toLowerCase() === "w"
                                      ? this.props.staticKeyWords.hadWinIcon
                                      : item.firstHalfHad.toLowerCase() === "l"
                                        ? this.props.staticKeyWords.hadLossIcon
                                        : item.firstHalfHad.toLowerCase() ===
                                            "d"
                                          ? this.props.staticKeyWords.d
                                          : "-"
                                    : "-"}
                                </span>
                              </div>
                            </td>
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "handicap" && (
                          <React.Fragment>
                            <td>
                              <div>
                                {item.fullTimeScore ? item.fullTimeScore : "-"}
                              </div>
                            </td>
                            <td>
                              {item.hdcOutcome ? (
                                <div className="textIcon">
                                  <span className="hdcValue">
                                    {item.hdcName}
                                  </span>
                                  <span
                                    className={bindStatusColor(
                                      item.hdcOutcome,
                                      "handicaps",
                                      "",
                                      "class",
                                    )}
                                  >
                                    {item.hdcOutcome &&
                                    item.hdcOutcome !== null &&
                                    item.hdcOutcome !== "-"
                                      ? item.hdcOutcome.toLowerCase() === "w"
                                        ? this.props.staticKeyWords.hadWinIcon
                                        : item.hdcOutcome.toLowerCase() === "l"
                                          ? this.props.staticKeyWords
                                              .hadLossIcon
                                          : item.hdcOutcome.toLowerCase() ===
                                              "d"
                                            ? this.props.staticKeyWords.d
                                            : "-"
                                      : "-"}
                                  </span>
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                            <td>
                              {item.hHadOutcome ? (
                                <div className="textIcon">
                                  <span>{item.hHadName}</span>
                                  <span
                                    className={bindStatusColor(
                                      item.hHadOutcome,
                                      "handicapsHAD",
                                      "",
                                      "class",
                                    )}
                                  >
                                    {item.hHadOutcome
                                      ? item.hHadOutcome.toLowerCase() === "w"
                                        ? this.props.staticKeyWords.hadWinIcon
                                        : item.hHadOutcome.toLowerCase() === "l"
                                          ? this.props.staticKeyWords
                                              .hadLossIcon
                                          : item.hHadOutcome.toLowerCase() ===
                                              "d"
                                            ? this.props.staticKeyWords.d
                                            : "-"
                                      : "-"}
                                  </span>
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "hilo" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>
                            <td>
                              <div>{item.totalGoals}</div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedAwayFhHiloTab,
                                    "hilo",
                                    item.fhHiLo,
                                    "class",
                                  )}
                                >
                                  {bindStatusColor(
                                    this.props.selectedAwayFhHiloTab,
                                    "hilo",
                                    item.fhHiLo,
                                  ).toLowerCase() === "h"
                                    ? this.props.staticKeyWords.highIcon
                                    : this.props.staticKeyWords.lowIcon}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedAwayHiloTab,
                                    "hilo",
                                    item.hiLo,
                                    "class",
                                  )}
                                >
                                  {bindStatusColor(
                                    this.props.selectedAwayHiloTab,
                                    "hilo",
                                    item.hiLo,
                                  ).toLowerCase() === "h"
                                    ? this.props.staticKeyWords.highIcon
                                    : this.props.staticKeyWords.lowIcon}
                                </span>
                              </div>
                            </td>
                            {/*<td>
                                                <div><span className={bindStatusColor(item.bothTeamsToScore,'hilo','','class')}>{item.bothTeamsToScore}</span></div>
                                            </td>
                                            <td>
                                                <div>{item.teamsToScore?item.teamsToScore:'-'}</div>
                                            </td>*/}
                          </React.Fragment>
                        )}
                        {this.props.selectedTab === "corners" && (
                          <React.Fragment>
                            <td className="noBorder-td">
                              <div className="whiteColumn-bg">
                                {item.fullTimeScore ? item.fullTimeScore : "-"}{" "}
                                {item.halfTimeScore
                                  ? "(" + item.halfTimeScore + ")"
                                  : ""}
                              </div>
                            </td>
                            <td>
                              <div>
                                <span
                                  className={bindStatusColor(
                                    this.props.selectedAwayCornerTab,
                                    "corners",
                                    item.cornerHiLo,
                                    "class",
                                  )}
                                >
                                  {this.handleCornersStatus(
                                    this.props.selectedAwayCornerTab,
                                    item.cornerHiLo,
                                  )}
                                </span>
                              </div>
                            </td>
                          </React.Fragment>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={
                        this.props.selectedTab === "had"
                          ? 9
                          : this.props.selectedTab === "handicap"
                            ? 8
                            : this.props.selectedTab === "hilo"
                              ? 11
                              : this.props.selectedTab === "corners"
                                ? 8
                                : 0
                      }
                    >
                      <Loading
                        isLoader={this.props.loader}
                        isNoData={
                          !this.props.loader && !this.props.awayTeamData.length
                        }
                        temporarilyNoData={
                          this.props.staticKeyWords.temporarilyNoData
                        }
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedTab: state.recentfromtab.selectedTab,
    homeTeamData: state.recentfromtab.homeTeamData,
    awayTeamData: state.recentfromtab.awayTeamData,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    filterOptions: state.recentfromtable.filterOptions,
    lastEncountersOptions: state.matchcenter.lastEncountersOptions,
    selectedHomeFhHiloTab:
      state.recentfromtable.selectedHomeFhHiloTab == ""
        ? state.recentfromtab.selectedHomeFhHiloTab
        : state.recentfromtable.selectedHomeFhHiloTab,
    selectedHomeHiloTab:
      state.recentfromtable.selectedHomeHiloTab == ""
        ? state.recentfromtab.selectedHomeHiloTab
        : state.recentfromtable.selectedHomeHiloTab,
    selectedAwayFhHiloTab:
      state.recentfromtable.selectedAwayFhHiloTab == ""
        ? state.recentfromtab.selectedAwayFhHiloTab
        : state.recentfromtable.selectedAwayFhHiloTab,
    selectedAwayHiloTab:
      state.recentfromtable.selectedAwayHiloTab == ""
        ? state.recentfromtab.selectedAwayHiloTab
        : state.recentfromtable.selectedAwayHiloTab,
    selectedHomeCornerTab:
      state.recentfromtable.selectedHomeCornerTab == ""
        ? state.recentfromtab.selectedHomeCornerTab
        : state.recentfromtable.selectedHomeCornerTab,
    selectedAwayCornerTab:
      state.recentfromtable.selectedAwayCornerTab == ""
        ? state.recentfromtab.selectedAwayCornerTab
        : state.recentfromtable.selectedAwayCornerTab,
    homefhHiLo: state.recentfromtab.homefhHiLo,
    homehiLo: state.recentfromtab.homehiLo,
    awayfhHiLo: state.recentfromtab.awayfhHiLo,
    awayhiLo: state.recentfromtab.awayhiLo,
    awayCorners: state.recentfromtab.awayCorners,
    homeCorners: state.recentfromtab.homeCorners,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    loader: state.app.loader,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    defaultHomeOptionId: state.recentfromtab.defaultHomeOptionId,
    defaultAwayOptionId: state.recentfromtab.defaultAwayOptionId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentformTable);
