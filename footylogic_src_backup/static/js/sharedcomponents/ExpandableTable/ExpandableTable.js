import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../../sharedfiles/helper";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import FootballIcon from "../../assets/images/footballIcon.png";
import RedCardIcon from "../../assets/images/redcardIcon.png";
import Loading from "../../components/loading/Loading";
class ExpandableTable extends Component {
  constructor() {
    super();

    this.state = {
      expandedRows: [],
      homeTeamExpand: [],
      awayTeamExpand: [],
    };
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    if (currentExpandedRows === rowId) {
      this.setState({ expandedRows: "" });
      return;
    }
    //const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    // const newExpandedRows = isRowCurrentlyExpanded ?
    // 	currentExpandedRows.filter(id => id !== rowId) :
    //     currentExpandedRows.concat(rowId);
    const newExpandedRows = rowId;
    var url =
      matchCenter.moreInfo +
      "?eventId=" +
      this.props.eventId +
      "&languageId=" +
      this.props.languageId;
    apiCaller(url, "GET", {}).then((response) => {
      if (response.data && Object.keys(response.data).length > 0) {
        if (response.data.hasOwnProperty("homeTeam")) {
          this.setState({ homeTeamExpand: response.data.homeTeam });
        }
        if (response.data.hasOwnProperty("awayTeam")) {
          this.setState({ awayTeamExpand: response.data.awayTeam });
        }
      }
    });
    this.setState({ expandedRows: newExpandedRows });
  }

  renderItem(item, index) {
    const checkStatus = item.scoreFT.split(":");
    let task = "";
    if (checkStatus[0] > checkStatus[1]) {
      task += "homeBold";
    } else if (checkStatus[0] < checkStatus[1]) {
      task += "awayBold";
    } else {
      task += "draw";
    }
    const clickCallback = () => this.handleRowClick(index);
    const itemRows = [
      <tr key={"row-data-" + index}>
        {/*<td>
                <div>{item.season}</div>
            </td>*/}
        <td>
          <div>
            {item.kickOff ? formatDate(item.kickOff, "banner").date : ""}
          </div>
        </td>
        <td>
          <div>{item.competitionName}</div>
        </td>
        <td className="team">
          {task === "homeBold" ? (
            <strong>
              {" "}
              <div>{item.homeTeamName} </div>
            </strong>
          ) : (
            <div>{item.homeTeamName} </div>
          )}
        </td>
        <td className="noBorder-td">
          <div className="whiteColumn-bg">
            {item.scoreFT} ({item.scoreHT}) {item.isNeutral ? "#" : ""}
          </div>
        </td>
        <td className="team">
          {task === "awayBold" ? (
            <strong>
              <div>{item.awayTeamName} </div>
            </strong>
          ) : (
            <div>{item.awayTeamName} </div>
          )}
        </td>
        <td>
          <div>
            <span
              className={
                "status " +
                (item.had && item.had.trim().toLowerCase() === "h"
                  ? "win"
                  : item.had && item.had.trim().toLowerCase() === "a"
                    ? "loss"
                    : item.had && item.had.trim().toLowerCase() === "d"
                      ? "draw"
                      : "")
              }
            >
              {item.had
                ? this.props.staticKeyWords[item.had.trim().toLowerCase()]
                : "-"}
            </span>
          </div>
        </td>
        <td>
          <div>
            <span
              className={
                "status " +
                (item.fHad && item.fHad.trim().toLowerCase() === "h"
                  ? "win"
                  : item.fHad && item.fHad.trim().toLowerCase() === "a"
                    ? "loss"
                    : item.fHad && item.fHad.trim().toLowerCase() === "d"
                      ? "draw"
                      : "")
              }
            >
              {item.fHad
                ? this.props.staticKeyWords[item.fHad.trim().toLowerCase()]
                : "-"}
            </span>
          </div>
        </td>
        <td>
          {item.hdcName ? (
            <div className="textIcon">
              <span className="hdcValue">
                {item.hdcName ? item.hdcName : "-"}
              </span>
              <span
                className={
                  "status " +
                  (item.hdcOutcome &&
                  item.hdcOutcome.trim().toLowerCase() === "h"
                    ? "win"
                    : item.hdcOutcome &&
                        item.hdcOutcome.trim().toLowerCase() === "a"
                      ? "loss"
                      : item.hdcOutcome &&
                          item.hdcOutcome.trim().toLowerCase() === "d"
                        ? "draw"
                        : "")
                }
              >
                {item.hdcOutcome
                  ? this.props.staticKeyWords[
                      item.hdcOutcome.trim().toLowerCase()
                    ]
                  : ""}
              </span>
            </div>
          ) : (
            <span>-</span>
          )}
        </td>
        <td>
          {item.hHadName ? (
            <div className="textIcon">
              <span>{item.hHadName ? item.hHadName : "-"}</span>
              <span
                className={
                  "status " +
                  (item.hHadOutcome &&
                  item.hHadOutcome.trim().toLowerCase() === "h"
                    ? "win"
                    : item.hHadOutcome &&
                        item.hHadOutcome.trim().toLowerCase() === "a"
                      ? "loss"
                      : item.hHadOutcome &&
                          item.hHadOutcome.trim().toLowerCase() === "d"
                        ? "draw"
                        : "")
                }
              >
                {item.hHadOutcome
                  ? this.props.staticKeyWords[
                      item.hHadOutcome.trim().toLowerCase()
                    ]
                  : "-"}
              </span>
            </div>
          ) : (
            <span>-</span>
          )}
        </td>
        {/*<td onClick={clickCallback}>
                <div><i class="icon-notification icons"></i></div>
        </td>*/}
      </tr>,
    ];
    //this.state.expandedRows.includes(item.id)
    if (this.state.expandedRows === index) {
      itemRows.push(
        <tr key={"row-expanded-" + index}>
          <td colspan="4" className="noBorder-td text-right">
            {this.state.homeTeamExpand.map((data, index) => {
              return (
                <div
                  className={
                    "moreExpand" +
                    (data.eventType.toLowerCase() === "red card"
                      ? " textRed"
                      : " textBlue")
                  }
                >
                  <span className="moreIcon">
                    {data.eventType.toLowerCase() === "goal" ? (
                      <img src={FootballIcon} alt="sport icon" />
                    ) : data.eventType.toLowerCase() === "red card" ? (
                      <img src={RedCardIcon} alt="red card" />
                    ) : (
                      ""
                    )}
                  </span>
                  <span>
                    {data.playerName}({data.goalMinute})
                  </span>
                </div>
              );
            })}
          </td>
          <td colspan="7" className="noBorder-td text-left">
            {this.state.awayTeamExpand.map((data, index) => {
              return (
                <div
                  className={
                    "moreExpand" +
                    (data.eventType.toLowerCase() === "red card"
                      ? " textRed"
                      : " textBlue")
                  }
                >
                  <span className="moreIcon">
                    {data.eventType.toLowerCase() === "goal" ? (
                      <img src={FootballIcon} alt="sport icon" />
                    ) : data.eventType.toLowerCase() === "red card" ? (
                      <img src={RedCardIcon} alt="red card" />
                    ) : (
                      ""
                    )}
                  </span>
                  <span>
                    {data.playerName}({data.goalMinute})
                  </span>
                </div>
              );
            })}
          </td>
        </tr>,
      );
    }

    return itemRows;
  }

  render() {
    let allItemRows = [];

    this.props.data.forEach((item, index) => {
      const perItemRows = this.renderItem(item, index);
      allItemRows = allItemRows.concat(perItemRows);
    });
    // const self = this;
    return (
      <>
        <table className="tableDefault">
          <thead>
            <tr>
              {/*<th>{this.props.headings.season}</th>*/}

              <th className="w-100px">{this.props.headings.date}</th>
              <th>{this.props.headings.comp}</th>
              <th className="team">{this.props.headings.homeTeam}</th>
              <th>{this.props.headings.scoreHT}</th>
              <th className="team">{this.props.headings.awayTeam}</th>
              <th>{this.props.headings.had}</th>
              <th>{this.props.headings.fHAD}</th>
              <th className="w-150">{this.props.headings.hdc}</th>
              <th className="w-80">{this.props.headings.hHAD}</th>
              {/*<th>{this.props.headings.more}</th>*/}
            </tr>
          </thead>
          <tbody>
            {!this.props.isLoader && this.props.data.length > 0 ? (
              allItemRows
            ) : (
              <tr>
                <td colSpan={Object.keys(this.props.headings).length}>
                  <Loading
                    isLoader={this.props.loader}
                    isNoData={
                      !this.props.loader && this.props.data.length === 0
                    }
                    temporarilyNoData={this.props.temporarilyNoData}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {this.props.staticKeyWords.noteLang}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    staticKeyWords: state.app.staticKeyWords,
  };
}
export default connect(mapStateToProps)(ExpandableTable);
