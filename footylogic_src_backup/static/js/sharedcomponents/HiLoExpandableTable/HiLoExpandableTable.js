import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../../sharedfiles/helper";
import Loading from "../../components/loading/Loading";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import FootballIcon from "../../assets/images/footballIcon.png";
import RedCardIcon from "../../assets/images/redcardIcon.png";
import { apiCaller } from "../../api/apiCaller";
import { setOptions } from "../../components/hilocornerstab/HiloCornersTabSlice";
class HiLoExpandableTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiLoData: [],
      expandedRows: [],
      cornersHiLoLine: [],
      fhHiLoLine: [],
      hiLoLine: [],
      selectedCornersHiloLine: 9.5,
      selectedFhHiloLine: 1.5,
      selectedhiLoLine: 2.5,
      expandedRows: [],
      isDataSet: false,
      homeTeamExpand: [],
      awayTeamExpand: [],
      cornersHiLoLinetDefaulData: 9.5,
      fhHiLoDefaultData: 1.5,
      hiLoDefaultData: 2.5,
    };
  }
  componentWillMount() {
    if (this.props.hiLoData.length > 0) {
      this.setState({ hiLoData: this.props.hiLoData });
      this.setData(this, this.props.hiLoData);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      (JSON.stringify(nextProps.hiLoData) !==
        JSON.stringify(this.props.hiLoData) &&
        nextProps.hiLoData.length > 0) ||
      !this.state.isDataSet
    ) {
      this.setState({
        selectedCornersHiloLine: 9.5,
        selectedFhHiloLine: 1.5,
        selectedhiLoLine: 2.5,
      });
      this.setState({ hiLoData: nextProps.hiLoData });
      // this.setData(this,nextProps.hiLoData);
      setTimeout(() => {
        this.setData(this, nextProps.hiLoData);
      }, 10);
    }
  }

  setData(self, hiLoData) {
    if (hiLoData && hiLoData.length > 0) {
      let cornersHiLoLine = [];
      let fhHiLoLine = [];
      let hiLoLine = [];
      let selectedCornersHiloLine = self.state.selectedCornersHiloLine
        ? self.state.selectedCornersHiloLine
        : "";
      let selectedFhHiloLine = self.state.selectedFhHiloLine
        ? self.state.selectedFhHiloLine
        : "";
      let selectedhiLoLine = self.state.selectedhiLoLine
        ? self.state.selectedhiLoLine
        : "";
      let data = hiLoData[0];

      for (var item of data.cornersHiLo) {
        cornersHiLoLine.push(item.line);
        if (selectedCornersHiloLine === "") {
          selectedCornersHiloLine = item.line;
        }
      }
      for (var item of data.fhHiLo) {
        fhHiLoLine.push(item.line);
        if (selectedFhHiloLine === "") {
          selectedFhHiloLine = item.line;
        }
      }
      for (var item of data.hiLo) {
        hiLoLine.push(item.line);
        if (selectedhiLoLine === "") {
          selectedhiLoLine = item.line;
        }
      }
      self.setState({
        isDataSet: true,
        cornersHiLoLine: cornersHiLoLine,
        fhHiLoLine: fhHiLoLine,
        hiLoLine: hiLoLine,
        selectedCornersHiloLine: selectedCornersHiloLine,
        selectedFhHiloLine: selectedFhHiloLine,
        selectedhiLoLine: selectedhiLoLine,
      });
    }
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    if (currentExpandedRows === rowId) {
      this.setState({ expandedRows: "" });
      return;
    }
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
    let task = "";
    const checkStatus = item.scoreFT.split(":");
    if (checkStatus[0] > checkStatus[1]) {
      task += "homeBold";
    } else if (checkStatus[0] < checkStatus[1]) {
      task += "awayBold";
    } else {
      task += "draw";
    }

    const clickCallback = () => this.handleRowClick(index);
    var self = this;
    const itemRows = [
      <tr>
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
              <div>{item.homeTeamName}</div>
            </strong>
          ) : (
            <div>{item.homeTeamName}</div>
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
              {" "}
              <div>{item.awayTeamName}</div>
            </strong>
          ) : (
            <div>{item.awayTeamName}</div>
          )}
        </td>
        <td>
          <div>{item.totalGoals}</div>
        </td>
        <td>
          {item.fhHiLo.map((line) => {
            if (line.line === self.state.selectedFhHiloLine) {
              return (
                <div>
                  <span
                    className={
                      "status " +
                      (line.outcomeName &&
                      line.outcomeName.trim().toLowerCase() === "h"
                        ? "BTTSyes"
                        : "BTTSno")
                    }
                  >
                    {line.outcomeName.trim().toLowerCase() === "h"
                      ? this.props.staticKeyWords.highIcon
                      : line.outcomeName.trim().toLowerCase() === "l"
                        ? this.props.staticKeyWords.lowIcon
                        : "-"}
                  </span>
                </div>
              );
            }
          })}
        </td>
        <td>
          {item.hiLo.map((line) => {
            if (line.line === self.state.selectedhiLoLine) {
              return (
                <div>
                  <span
                    className={
                      line.outcomeName &&
                      line.outcomeName.trim().toLowerCase() === "h"
                        ? "status BTTSyes"
                        : line.outcomeName &&
                            line.outcomeName.trim().toLowerCase() === "l"
                          ? "status BTTSno"
                          : ""
                    }
                  >
                    {line.outcomeName.trim().toLowerCase() === "h"
                      ? this.props.staticKeyWords.highIcon
                      : line.outcomeName.trim().toLowerCase() === "l"
                        ? this.props.staticKeyWords.lowIcon
                        : "-"}
                  </span>
                </div>
              );
            }
          })}
        </td>
        {/*<td>
                            <div><span className="status BTTSyes">{item.bothTeamsToScore}</span></div>
                        </td>
                        <td>
                            <div>{item.teamsToScore}</div>
                        </td>*/}
        <td>
          {item.cornersHiLo.map((line) => {
            if (line.line === self.state.selectedCornersHiloLine) {
              return (
                <div>
                  <span
                    className={
                      line.outcomeName.toLowerCase().includes("h")
                        ? "status BTTSyes"
                        : line.outcomeName.toLowerCase().includes("l")
                          ? "status BTTSno"
                          : ""
                    }
                  >
                    {line.outcomeName && line.outcomeName !== "-"
                      ? (line.outcomeName
                          .toLowerCase()
                          .charAt(0)
                          .toLowerCase() === "h"
                          ? this.props.staticKeyWords.highIcon
                          : this.props.staticKeyWords.lowIcon) +
                        line.outcomeName.slice(1)
                      : "-"}
                  </span>
                </div>
              );
            }
          })}
        </td>
        {/*<td onClick={clickCallback}>
                            <div><i className="icon-notification icons"></i></div>
                        </td>*/}
      </tr>,
    ];

    if (this.state.expandedRows === index) {
      itemRows.push(
        <tr key={"row-expanded-" + index}>
          <td colspan="4" class="noBorder-td text-right">
            {this.state.homeTeamExpand.map((data, index) => {
              return (
                <div
                  class={
                    "moreExpand" +
                    (data.eventType &&
                    data.eventType.toLowerCase() === "red card"
                      ? " textRed"
                      : " textBlue")
                  }
                >
                  <span class="moreIcon">
                    {data.eventType &&
                    data.eventType.toLowerCase() === "goal" ? (
                      <img src={FootballIcon} alt="sport icon" />
                    ) : data.eventType &&
                      data.eventType.toLowerCase() === "red card" ? (
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
          <td colspan="7" class="noBorder-td text-left">
            {this.state.awayTeamExpand.map((data, index) => {
              return (
                <div
                  class={
                    "moreExpand" +
                    (data.eventType &&
                    data.eventType.toLowerCase() === "red card"
                      ? " textRed"
                      : " textBlue")
                  }
                >
                  <span class="moreIcon">
                    {data.eventType &&
                    data.eventType.toLowerCase() === "goal" ? (
                      <img src={FootballIcon} alt="sport icon" />
                    ) : data.eventType &&
                      data.eventType.toLowerCase() === "red card" ? (
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
  cornersHiLoLineChanged(event) {
    this.setState({
      selectedCornersHiloLine: Number(event.target.value),
    });
  }
  hiLoLineChanged(event) {
    this.setState({
      selectedhiLoLine: Number(event.target.value),
    });
  }
  fhHiLoLineChanged(event) {
    this.setState({
      selectedFhHiloLine: Number(event.target.value),
    });
  }
  render() {
    let allItemRows = [];

    this.props.hiLoData.forEach((item, index) => {
      const perItemRows = this.renderItem(item, index);
      allItemRows = allItemRows.concat(perItemRows);
    });
    const self = this;
    return (
      <>
        <table className="tableDefault">
          <thead>
            <tr>
              {/*<th>
                            <div>{this.props.headings.season}</div>
                        </th>*/}
              <th className="w-100px">
                <div>{this.props.headings.date}</div>
              </th>
              <th>
                <div>{this.props.headings.comp}</div>
              </th>
              <th className="team">
                <div className="teams">{this.props.headings.homeTeam}</div>
              </th>
              <th>
                <div>{this.props.headings.scoreHT}</div>
              </th>
              <th className="team">
                <div className="teams">{this.props.headings.awayTeam}</div>
              </th>
              <th>
                <div>{this.props.headings.ttg}</div>
              </th>
              <th>
                <div>
                  {this.props.headings.fhHiLo}
                  <div className="form-group">
                    <div className="form-control">
                      <select
                        className="select-margin"
                        value={this.state.selectedFhHiloLine}
                        onChange={this.fhHiLoLineChanged.bind(this)}
                      >
                        {self.state.fhHiLoLine.map((item) => {
                          return item == this.state.fhHiLoDefaultData ? (
                            <option selected value={item}>
                              {item}
                            </option>
                          ) : (
                            <option value={item}>{item}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </th>
              <th>
                <div>
                  {this.props.headings.hiLo}
                  <div className="form-group">
                    <div className="form-control">
                      <select
                        className="select-margin"
                        value={this.state.selectedhiLoLine}
                        onChange={this.hiLoLineChanged.bind(this)}
                      >
                        {self.state.hiLoLine.map((item) => {
                          return item == this.state.hiLoDefaultData ? (
                            <option selected value={item}>
                              {item}
                            </option>
                          ) : (
                            <option value={item}>{item}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </th>
              {/*<th className="w-100px">
                            <div className="teamsTo-score">{this.props.headings.btts}</div>
                        </th>
                        <th className="w-100px">
                            <div className="teamsTo-score">{this.props.headings.tts}</div>
                        </th>*/}
              <th className="w-100px">
                <div style={{ whiteSpace: "nowrap" }}>
                  {this.props.headings.cornersHiLo}
                  <div className="form-group">
                    <div className="form-control">
                      <select
                        className="select-margin"
                        value={this.state.selectedCornersHiloLine}
                        onChange={this.cornersHiLoLineChanged.bind(this)}
                      >
                        {self.state.cornersHiLoLine.map((item) => {
                          return item ==
                            this.state.cornersHiLoLinetDefaulData ? (
                            <option selected value={item}>
                              {item}
                            </option>
                          ) : (
                            <option value={item}>{item}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </th>
              {/*<th>
                            <div>{this.props.headings.more}</div>
                        </th>*/}
            </tr>
          </thead>
          <tbody>
            {!this.props.isLoader && this.props.hiLoData.length > 0 ? (
              allItemRows
            ) : (
              <td colSpan={Object.keys(this.props.headings).length}>
                <Loading
                  isLoader={this.props.loader}
                  isNoData={!this.props.loader && !this.props.hiLoData.length}
                  temporarilyNoData={this.props.temporarilyNoData}
                />
              </td>
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
export default connect(mapStateToProps)(HiLoExpandableTable);
