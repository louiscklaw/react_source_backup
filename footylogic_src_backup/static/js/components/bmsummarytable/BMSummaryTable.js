import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { formatDate } from "../../sharedfiles/helper";
import {
  bindStatusColor,
  bindLineValues,
  filterChanged,
} from "./BMSummaryTableSlice";

import { metaData } from "../../AppSlice";
class BMSummaryTable extends Component {
  constructor() {
    super();
    this.state = {
      defaultFHHiloValue: 1.5,
      defaultHiloValue: 2.5,
      defaultCornersHiloValue: 9.5,
    };
  }

  componentWillReceiveProps(nextProps) {}
  componentWillMount() {
    this.props.dispatch(metaData("default"));
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.props.isStatistics && (
          <div
            className={
              this.props.isHome ? "tableHeader-home" : "tableHeader-away"
            }
          >
            <div className="tableHeading">
              {this.props.isHome
                ? this.props.bannerData.homeTeamName
                : this.props.bannerData.awayTeamName}
            </div>
          </div>
        )}
        <table className="tableDefault">
          <thead>
            {this.props.isHilo && (
              <React.Fragment>
                <tr>
                  <th rowSpan="2"></th>
                  {this.props.mainColumns &&
                    this.props.mainColumns.map((column, columnIndex) => {
                      return (
                        <React.Fragment key={"summ" + columnIndex}>
                          <th colSpan="2">
                            {column.column}
                            <div className="form-group mt-10">
                              <div className="form-control">
                                <span>{this.props.staticKeyWords.line}</span>{" "}
                                <select
                                  onChange={(event) =>
                                    this.props.dispatch(
                                      filterChanged(
                                        event.target.value,
                                        this.props.isHome,
                                        column.column,
                                        null,
                                        this.props.staticKeyWords,
                                      ),
                                    )
                                  }
                                >
                                  {(this.props.isHome &&
                                  column.column ==
                                    this.props.staticKeyWords.halfTime
                                    ? this.props.hiloFilters.homeHalfTimeGoals
                                    : this.props.isHome &&
                                        column.column ==
                                          this.props.staticKeyWords.fullTime
                                      ? this.props.hiloFilters.homeFullTimeGoals
                                      : !this.props.isHome &&
                                          column.column ==
                                            this.props.staticKeyWords.halfTime
                                        ? this.props.hiloFilters
                                            .awayHalfTimeGoals
                                        : this.props.hiloFilters
                                            .awayFullTimeGoals
                                  ).map((item, itemIndex) => {
                                    if (
                                      column.column ==
                                      this.props.staticKeyWords.halfTime
                                    ) {
                                      return item ==
                                        this.state.defaultFHHiloValue ? (
                                        <option
                                          key={itemIndex}
                                          selected
                                          value={item}
                                        >
                                          {item}
                                        </option>
                                      ) : (
                                        <option key={itemIndex} value={item}>
                                          {item}
                                        </option>
                                      );
                                    } else {
                                      return item ==
                                        this.state.defaultHiloValue ? (
                                        <option
                                          key={itemIndex}
                                          selected
                                          value={item}
                                        >
                                          {item}
                                        </option>
                                      ) : (
                                        <option key={itemIndex} value={item}>
                                          {item}
                                        </option>
                                      );
                                    }
                                  })}
                                </select>
                              </div>
                            </div>
                          </th>
                          {column.rowspan && (
                            <th className="w-30" rowSpan="1"></th>
                          )}
                        </React.Fragment>
                      );
                    })}
                </tr>
                <tr></tr>
              </React.Fragment>
            )}
            {this.props.isCornersHilo && (
              <React.Fragment>
                <tr>
                  <th rowSpan="1"></th>
                  <th colSpan="3">
                    <div className="form-group">
                      <div className="form-control">
                        <span>{this.props.staticKeyWords.line}</span>{" "}
                        <select
                          onChange={(event) =>
                            this.props.dispatch(
                              filterChanged(
                                event.target.value,
                                this.props.isHome,
                                this.props.staticKeyWords.fullTime,
                                "cornershilo",
                                this.props.staticKeyWords,
                              ),
                            )
                          }
                        >
                          {(this.props.cornersFilters && this.props.isHome
                            ? this.props.cornersFilters.homeCornersFullTimeGoals
                            : this.props.cornersFilters.awayCornersFullTimeGoals
                          ).map((item, itemIndex) => {
                            return item ==
                              this.state.defaultCornersHiloValue ? (
                              <option key={itemIndex} selected value={item}>
                                {item}
                              </option>
                            ) : (
                              <option key={itemIndex} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr></tr>
              </React.Fragment>
            )}
            <tr>
              {this.props.columns &&
                this.props.columns.map((row, columnIndex) => {
                  return (
                    <th className={row.class} key={columnIndex}>
                      <div>
                        {row.column}
                        {/*    {row.column=='FH HiLo' && <div className="form-group">
                                        <div className="form-control">
                                            <select className="select-margin">
                                                <option value="1">1.5</option>
                                                <option value="2">2.5</option>
                                                <option value="3">3.5</option>
                                            </select>
                                        </div>
                                    </div>}
                                    {row.column=='HiLo' && <div className="form-group">
                                        <div className="form-control">
                                            <select className="select-margin">
                                                <option value="1">1.5</option>
                                                <option value="2">2.5</option>
                                                <option value="3">3.5</option>
                                            </select>
                                        </div>
                                    </div>}
                                    {row.column=='Corners HiLo' && <div className="form-group">
                                        <div className="form-control">
                                            <select className="select-margin">
                                                <option value="1">1.5</option>
                                                <option value="2">2.5</option>
                                                <option value="3">3.5</option>
                                            </select>
                                        </div>
                                    </div>}
                                */}
                      </div>
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {this.props.isStatistics ? (
              <React.Fragment>
                {this.props.data &&
                  Object.keys(this.props.data).map((key, keyIndex) => {
                    return (
                      <tr key={keyIndex}>
                        <td>{this.props.staticKeyWords[key]}</td>
                        {this.props.isHilo &&
                          Object.keys(this.props.data[key]).map(
                            (row, rowIndex) => {
                              if (row.key != "") {
                                if (this.props.isHilo) {
                                  return (
                                    <React.Fragment key={rowIndex}>
                                      <td>
                                        {/*<div>{this.props.data[key][row][0].high}</div>*/}
                                        <div>
                                          {this.props.dispatch(
                                            bindLineValues(
                                              row,
                                              this.props.isHome,
                                              this.props.seledtedFilter,
                                              this.props.data[key][row],
                                              "high",
                                              "hilo",
                                            ),
                                          )}
                                        </div>
                                      </td>
                                      <td>
                                        <div>
                                          {this.props.dispatch(
                                            bindLineValues(
                                              row,
                                              this.props.isHome,
                                              this.props.seledtedFilter,
                                              this.props.data[key][row],
                                              "low",
                                              "hilo",
                                            ),
                                          )}
                                        </div>
                                      </td>
                                      {Object.keys(this.props.data[key])
                                        .length -
                                        1 !=
                                        rowIndex && (
                                        <td>
                                          <div></div>
                                        </td>
                                      )}
                                    </React.Fragment>
                                  );
                                } else if (this.props.isCornersHilo) {
                                  return "";
                                } else {
                                  // if(row.key != 'HomeOrAway' && row.key != 'HTFT_type'){
                                  //     return <td key={rowIndex}>{this.props.data[key][row.key]}</td>
                                  // }
                                }
                              }
                            },
                          )}
                        {this.props.isCornersHilo && (
                          <React.Fragment key={keyIndex}>
                            <td>
                              <div>
                                {this.props.dispatch(
                                  bindLineValues(
                                    key,
                                    this.props.isHome,
                                    this.props.seledtedFilter,
                                    this.props.data[key],
                                    "high",
                                    "cornerHiLo",
                                  ),
                                )}
                              </div>
                            </td>
                            <td>
                              <div>
                                {this.props.dispatch(
                                  bindLineValues(
                                    key,
                                    this.props.isHome,
                                    this.props.seledtedFilter,
                                    this.props.data[key],
                                    "low",
                                    "cornerHiLo",
                                  ),
                                )}
                              </div>
                            </td>
                          </React.Fragment>
                        )}
                      </tr>
                    );
                  })}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.props.data &&
                  this.props.data.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        {this.props.columns &&
                          this.props.columns.map((column, columnIndex) => {
                            return !column.isDiff ? (
                              <td
                                key={columnIndex}
                                className={
                                  column.isSpecialClass ? "noBorder-td" : ""
                                }
                              >
                                <div
                                  className={
                                    (column.isSpecialClass
                                      ? "whiteColumn-bg "
                                      : "") +
                                    this.props.dispatch(
                                      bindStatusColor(
                                        row[column.key],
                                        column.isHandicap,
                                        column.column,
                                      ),
                                    )
                                  }
                                >
                                  {row[column.key]}
                                </div>
                              </td>
                            ) : (
                              <td key={columnIndex}>
                                <div>
                                  {column.isHandicap ? (
                                    <div class="textIcon">
                                      <span>
                                        {row[column.key + "Name"]
                                          ? row[column.key + "Name"]
                                          : "-"}
                                      </span>
                                      <span
                                        className={this.props.dispatch(
                                          bindStatusColor(
                                            row[column.key + "Outcome"],
                                            column.isHandicap,
                                          ),
                                        )}
                                      >
                                        {row[column.key + "Outcome"]
                                          ? row[column.key + "Outcome"]
                                          : "-"}
                                      </span>
                                    </div>
                                  ) : (
                                    <div>
                                      {/*<span>{row[column.key][0]['line']}</span>*/}
                                      <span
                                        className={this.props.dispatch(
                                          bindStatusColor(
                                            row[column.key] &&
                                              row[column.key][0]["outcomename"],
                                            column.isHandicap,
                                          ),
                                        )}
                                      >
                                        {row[column.key] &&
                                        row[column.key][0]["outcomename"]
                                          ? row[column.key][0]["outcomename"]
                                          : "-"}{" "}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                      </tr>
                    );
                  })}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeMarketGroupId: state.bmrecentforms.homeMarketGroupId,
    awayMarketGroupId: state.bmrecentforms.awayMarketGroupId,
    bannerData: state.match.bannerData,
    hiloFilters: state.summary.hiloFilters,
    seledtedFilter: state.summary.seledtedFilter,
    cornersFilters: state.summary.cornersFilters,
    staticKeyWords: state.app.staticKeyWords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BMSummaryTable);
