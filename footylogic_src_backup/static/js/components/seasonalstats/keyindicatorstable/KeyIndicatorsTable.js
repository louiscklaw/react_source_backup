import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../../loading/Loading";
import { setSelectButton } from "../../tournamentleague/TournamentLeagueSlice";

class KeyIndicators extends Component {
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
  rowNavigation(link, isRowClick) {
    if (isRowClick) {
      this.props.dispatch(setSelectButton("fixturesresults"));
      this.props.history.push(link);
    } else {
      return true;
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
  }
  handleShowMore() {
    let records = this.state.rowsToShow;
    let totalRows = this.state.totalRows;
    if (records < totalRows) this.setState({ rowsToShow: totalRows });
    else this.setState({ rowsToShow: 20 });
  }

  render() {
    return (
      <table class="tableDefault tableSeasonal-stats">
        <thead>
          <tr>
            {this.props.standingColumns ? (
              this.props.standingColumns.map((item, index) => {
                if (item.hasOwnProperty("isRow")) {
                  return (
                    <React.Fragment key={index}>
                      {item.isRow ? (
                        <th className={item.className} rowSpan={item.spanValue}>
                          {item.column}
                        </th>
                      ) : (
                        <th className={item.className} colSpan={item.spanValue}>
                          {item.column}
                        </th>
                      )}
                    </React.Fragment>
                  );
                }
              })
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </tr>
          <tr>
            {this.props.standingColumns ? (
              this.props.standingColumns.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {!item.hasOwnProperty("isRow") && (
                      <th className={item.className}>{item.column}</th>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </tr>
        </thead>
        <tbody>
          {this.props.standingsTableData.length ? (
            this.props.standingsTableData.map((rowData, rowIndex) => {
              if (rowIndex < this.state.rowsToShow || !this.props.isViewAll) {
                return (
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
                    {this.props.standingColumns &&
                      this.props.standingColumns.map(
                        (columndata, columnIndex) => {
                          if (columndata.isDisplay) {
                            var obj = columndata["key"].split(".");
                            return columndata["className"] ? (
                              <>
                                {" "}
                                {rowData.teamId !== "null" &&
                                this.props.isRowClick ? (
                                  <td
                                    key={columnIndex}
                                    className={columndata["className"]}
                                    data-href="true"
                                  >
                                    <div>
                                      {obj.length > 1
                                        ? rowData[obj[1]]
                                        : rowData[columndata["key"]]}
                                    </div>
                                    {/*<div>{(obj.length>1)?rowData[obj[0]][obj[1]]:rowData[columndata['key']]}</div>*/}
                                  </td>
                                ) : (
                                  <td
                                    key={columnIndex}
                                    className={columndata["className"]}
                                  >
                                    <div>
                                      {obj.length > 1
                                        ? rowData[obj[1]]
                                        : rowData[columndata["key"]]}
                                    </div>
                                    {/*<div>{(obj.length>1)?rowData[obj[0]][obj[1]]:rowData[columndata['key']]}</div>*/}
                                  </td>
                                )}
                              </>
                            ) : (
                              <>
                                {rowData.teamId !== "null" &&
                                this.props.isRowClick ? (
                                  <td key={columnIndex} data-href="true">
                                    <div>
                                      {obj.length > 1
                                        ? rowData[obj[1]]
                                        : rowData[columndata["key"]]}
                                    </div>
                                    {/*<div>{(obj.length>1)?rowData[obj[0]][obj[1]]:rowData[columndata['key']]}</div>*/}
                                  </td>
                                ) : (
                                  <td key={columnIndex}>
                                    <div>
                                      {obj.length > 1
                                        ? rowData[obj[1]]
                                        : rowData[columndata["key"]]}
                                    </div>
                                    {/*<div>{(obj.length>1)?rowData[obj[0]][obj[1]]:rowData[columndata['key']]}</div>*/}
                                  </td>
                                )}
                              </>
                            );
                          }
                        },
                      )}
                  </tr>
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
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    loader: state.app.loader,
    staticKeyWords: state.app.staticKeyWords,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(KeyIndicators);
