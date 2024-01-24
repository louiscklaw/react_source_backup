import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../loading/Loading";
import { highlightTab } from "../../layouts/matchSlice";
import { setSelectButton } from "../tournamentleague/TournamentLeagueSlice";
import { setFilter } from "../../components/seasonalstats/standings/StandingsSlice";
class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsToShow: 20,
      totalRows: 0,
    };
  }
  componentDidMount() {
    if (
      this.props.standingsTableData &&
      this.props.standingsTableData.length &&
      this.props.isViewAll
    ) {
      this.setState({ totalRows: this.props.standingsTableData.length });
      this.setState({ rowsToShow: 20 });
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.standingsTableData &&
      prevProps.standingsTableData &&
      this.props.standingsTableData.length !==
        prevProps.standingsTableData.length
    ) {
      this.setState({ totalRows: this.props.standingsTableData.length });
    }
    if (
      this.props.dispatch(highlightTab("seasonalstats")) &&
      this.props.selectedTable.tableId == 1
    ) {
      this.props.dispatch(setSelectButton("statistics"));
    }
  }
  rowNavigation(link) {
    this.props.dispatch(setSelectButton("fixturesresults"));
    this.props.history.push(link);
  }
  handleShowMore() {
    let records = this.state.rowsToShow;
    let totalRows = this.state.totalRows;
    if (records < totalRows) this.setState({ rowsToShow: totalRows });
    else this.setState({ rowsToShow: 20 });
  }

  render() {
    return (
      <table
        className={
          "tableDefault" + (this.props.isWhiteBG ? "" : " tableSeasonal-stats")
        }
      >
        <thead>
          <tr>
            {this.props.standingColumns.map((item, index) => {
              if (item.isHeaderImg) {
                return (
                  <th key={"gp" + index} className={item.className}>
                    <img src={item.column} alt="graph" />
                  </th>
                );
              } else {
                if (
                  this.props.selectedButton === "statistics" &&
                  this.props.selectedTable.tableId == 1 &&
                  this.props.selectedBetTypeFilter == 1 &&
                  item.column == this.props.staticKeyWords.pts
                ) {
                } else if (
                  this.props.selectedButton === "statistics" &&
                  this.props.selectedTable.tableId == 1 &&
                  this.props.selectedBetTypeFilter == 2 &&
                  this.props.isPoints == false &&
                  item.column == this.props.staticKeyWords.pts
                ) {
                } else {
                  return (
                    <th key={"gc" + index} className={item.className}>
                      {item.column}
                    </th>
                  );
                }
              }
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.standingsTableData.length ? (
            this.props.standingsTableData.map((rowData, rowIndex) => {
              if (rowIndex < this.state.rowsToShow || !this.props.isViewAll) {
                return (
                  <>
                    <tr
                      key={"tm" + rowIndex}
                      className={
                        this.props.isTournament
                          ? this.props.type == "team"
                            ? this.props.teamId == rowData.teamId
                              ? "neutral"
                              : ""
                            : ""
                          : this.props.homeTeamId == rowData.teamId
                            ? "homeBg"
                            : this.props.awayTeamId == rowData.teamId
                              ? "awayBg"
                              : ""
                      }
                      onClick={
                        rowData[this.props.paramKey] !== "null" &&
                        this.props.isRowClick
                          ? this.rowNavigation.bind(
                              this,
                              this.props.rowNavigation
                                ? this.props.rowNavigation.replace(
                                    "[:id]",
                                    rowData[this.props.paramKey],
                                  )
                                : "",
                            )
                          : ""
                      }
                    >
                      {this.props.standingColumns.map((column, columnIndex) => {
                        if (column.isSplit) {
                          return (
                            <td key={columnIndex} className="formStatus">
                              <div className="team-lastForm">
                                {rowData[column["key"]] &&
                                  rowData[column["key"]]
                                    .split(",")
                                    .map((item, subColumnIndex) => {
                                      return (
                                        <span
                                          key={subColumnIndex}
                                          className={
                                            "status" +
                                            (item === "W"
                                              ? " win"
                                              : item === "D"
                                                ? " draw"
                                                : " loss")
                                          }
                                        >
                                          {
                                            this.props.staticKeyWords[
                                              item.toLowerCase()
                                            ]
                                          }
                                        </span>
                                      );
                                    })}
                              </div>
                            </td>
                          );
                        } else if (column.showImg) {
                          return (
                            <td key={"tim" + columnIndex} className="text-left">
                              {rowData[column["imgKey"]] ? (
                                <img
                                  class="player-pic"
                                  src={rowData[column["imgKey"]]}
                                  alt="player"
                                />
                              ) : (
                                ""
                              )}
                              {rowData[column["key"]]}
                            </td>
                          );
                        } else if (column.isTopScorer) {
                          if (rowIndex >= 10) {
                            return (
                              <td
                                key={"ts" + columnIndex}
                                className={column.className}
                              >
                                <div>
                                  {rowData[column["key"]] !== "" &&
                                  rowData[column["key"]] !== 0
                                    ? rowData[column["key"]]
                                    : 0}
                                </div>
                              </td>
                            );
                          }
                        } else {
                          if (
                            this.props.selectedButton === "statistics" &&
                            this.props.selectedTable.tableId == 1 &&
                            this.props.selectedBetTypeFilter == 1 &&
                            column["key"] == "teamPoints"
                          ) {
                          } else if (
                            this.props.selectedButton === "statistics" &&
                            this.props.selectedTable.tableId == 1 &&
                            this.props.selectedBetTypeFilter == 2 &&
                            this.props.isPoints == false &&
                            column["key"] == "teamPoints"
                          ) {
                          } else {
                            if (
                              this.props.selectedTable.tableId === 5 ||
                              this.props.selectedTable.tableId === 9 ||
                              this.props.selectedTable.tableId === 11
                            ) {
                              return (
                                <>
                                  {" "}
                                  {rowData.teamId !== "null" ? (
                                    <td
                                      key={"tp" + columnIndex}
                                      className={
                                        column["key"] == "teamName"
                                          ? "team teamSpacing"
                                          : ""
                                      }
                                      data-href="true"
                                    >
                                      <div>
                                        {rowData[column["key"]] !== "" &&
                                        rowData[column["key"]] !== 0
                                          ? rowData[column["key"]]
                                          : 0}
                                      </div>
                                    </td>
                                  ) : (
                                    <td
                                      key={"tp" + columnIndex}
                                      className={
                                        column["key"] == "teamName"
                                          ? "team teamSpacing"
                                          : ""
                                      }
                                    >
                                      <div>
                                        {rowData[column["key"]] !== "" &&
                                        rowData[column["key"]] !== 0
                                          ? rowData[column["key"]]
                                          : 0}
                                      </div>
                                    </td>
                                  )}
                                </>
                              );
                            } else {
                              return (
                                <>
                                  {rowData.teamId !== "null" ? (
                                    <td
                                      key={"tp" + columnIndex}
                                      className={
                                        column["key"] == "teamName"
                                          ? "team "
                                          : ""
                                      }
                                      data-href="true"
                                    >
                                      <div>
                                        {rowData[column["key"]] !== "" &&
                                        rowData[column["key"]] !== 0
                                          ? rowData[column["key"]]
                                          : 0}
                                      </div>
                                    </td>
                                  ) : (
                                    <td
                                      key={"tp" + columnIndex}
                                      className={
                                        column["key"] == "teamName"
                                          ? "team "
                                          : ""
                                      }
                                    >
                                      <div>
                                        {rowData[column["key"]] !== "" &&
                                        rowData[column["key"]] !== 0
                                          ? rowData[column["key"]]
                                          : 0}
                                      </div>
                                    </td>
                                  )}
                                </>
                              );
                            }
                          }
                        }
                      })}
                    </tr>
                    {this.props.splitIndex != 0 &&
                      this.props.splitIndex === rowIndex + 1 && (
                        <tr>
                          <td colspan="12" class="vertical-line"></td>
                        </tr>
                      )}
                  </>
                );
              }
            })
          ) : (
            <tr>
              <td colSpan={this.props.standingColumns.length}>
                <Loading
                  isLoader={this.props.loader}
                  isNoData={
                    !this.props.loader && !this.props.standingsTableData.length
                  }
                  temporarilyNoData={
                    this.props.staticKeyWords.temporarilyNoData
                  }
                />
              </td>
            </tr>
          )}
          {this.props.standingsTableData.length &&
          this.props.standingsTableData.length > 20 &&
          this.props.isViewAll ? (
            <tr className="ShowMore">
              <td colSpan="11">
                <li onClick={() => this.handleShowMore()}>
                  {this.state.rowsToShow < this.state.totalRows
                    ? this.props.staticKeyWords.showAll
                    : this.props.staticKeyWords.showLess}
                </li>
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  return {
    loader: state.app.loader,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    staticKeyWords: state.app.staticKeyWords,
    selectedTable: state.seasonalstats.selectedTable,
    selectedBetTypeFilter: state.standings.selectedBetTypeFilter,
    isPoints: state.seasonalstats.isPoints,
    selectedButton: state.tournamentleague.selectedButton,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Standings);
