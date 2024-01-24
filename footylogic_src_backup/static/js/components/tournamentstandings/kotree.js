import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import trophy from "../../assets/images/trophy.png";
import { formatDate, formatFixtureResultsDate } from "../../sharedfiles/helper";
import { setDisplayMode, checkEdisplay } from "../../AppSlice";
import { engLangId } from "../../sharedfiles/constants";
import Loading from "../loading/Loading";
class KOTree extends Component {
  constructor(props) {
    super(props);
    this.bracketIndex = {
      last16L: 1,
      quarterFinalsL: 2,
      semiFinalsL: 3,
      finalMiddle: 4,
      semiFinalsR: 5,
      quarterFinalsR: 6,
      last16R: 7,
    };
  }
  componentDidMount() {
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  render() {
    let treeHeaders = this.props?.standingsTableData
      ? this.props?.standingsTableData.treeHeaders
      : [];
    let treeData = this.props?.standingsTableData
      ? this.props?.standingsTableData.treeData
      : [];
    let treeKeys = this.props?.standingsTableData
      ? this.props?.standingsTableData.treeKeys
      : [];
    return (
      <React.Fragment>
        <div className="tournament-container">
          {treeHeaders.length > 0 ||
          treeData.length > 0 ||
          treeKeys.length > 0 ? (
            <div
              className={
                treeHeaders.length === 1
                  ? "tournament-container1"
                  : treeHeaders.length === 3
                    ? "tournament-container3"
                    : ""
              }
            >
              <div className="tournament-headers">
                {treeHeaders?.map((header, idx) => {
                  return (
                    <h3 key={"KO_TREE" + idx}>
                      {this.props.staticKeyWords[header]}
                    </h3>
                  );
                })}
              </div>

              <div className="tournament-brackets">
                {treeKeys?.map((round, roundIdx) => {
                  if (treeData[round]) {
                    return (
                      <ul
                        key={"tree" + roundIdx}
                        className={
                          "bracket " +
                          (treeData[round][0].side === "R" ? "right " : "") +
                          "bracket-" +
                          this.bracketIndex[round]
                        }
                      >
                        {treeData[round]?.map((info, idx) => {
                          var dateFormat = formatDate(info.kickOff, "kotree");
                          return info.trName === "Final" ? (
                            <>
                              {/* <li className="team-item-logo"><img src={info.cupLogURL} alt="country" /></li> */}
                              {info.fullTimeScore != "" &&
                              info.winner != null &&
                              !info.isConsolationMatch ? (
                                <li
                                  className="team-item-result"
                                  key={"winner" + idx}
                                >
                                  <div className="team-item-resultContent">
                                    {info.winner === "H"
                                      ? info.homeTeamName
                                      : info.awayTeamName}
                                    <span className="teamCup">
                                      <img src={trophy} alt="country" />
                                    </span>
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        (info.winner === "H"
                                          ? info.homeFlag
                                          : info.awayFlag) +
                                        ".png"
                                      }
                                      alt=""
                                    />
                                  </div>
                                </li>
                              ) : (
                                ""
                              )}
                              <li
                                className={
                                  info.isConsolationMatch
                                    ? "team-item-result result-info"
                                    : "team-item"
                                }
                                key={"fixtrf" + idx}
                              >
                                <div className="finalMatch">
                                  <span>
                                    {" "}
                                    {info.homeTeamName}
                                    {info.result && info.winner === "H"
                                      ? " (" + info.result + ")"
                                      : ""}
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.homeFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                    <span className="score">
                                      {info.teamHScore}
                                    </span>{" "}
                                    <br />
                                  </span>

                                  <span className="matchTime">
                                    <span>
                                      {(this.props.languageId === engLangId
                                        ? dateFormat.date
                                        : this.props.staticKeyWords[
                                            dateFormat.month.toLowerCase()
                                          ]) +
                                        " " +
                                        (this.props.languageId === engLangId
                                          ? this.props.staticKeyWords[
                                              dateFormat.month.toLowerCase()
                                            ]
                                          : this.props.staticKeyWords[
                                              dateFormat.date
                                            ])}
                                    </span>
                                    {/* <time>{info.kickOff && formatDate(info.kickOff, "hrMt")}</time> */}
                                    <br />
                                  </span>
                                  <span>
                                    {info.awayTeamName}
                                    {info.result && info.winner === "A"
                                      ? " (" + info.result + ")"
                                      : ""}
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.awayFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                    <span className="score">
                                      {info.teamAScore}
                                    </span>
                                  </span>
                                </div>
                              </li>
                              {/* {info.fullTimeScore != "" && info.fullTimeScore.split("-") ?
                                                    <li className="team-item-result result-info">
                                                        <div className="team-item-resultContent">{info.teamHScore > info.teamAScore ? info.homeTeamName : info.awayTeamName}
                                                        <img className="countryLogo-small"
                                                            src={"http://images.footylogic.com/countries/" + (info.teamHScore > info.teamAScore ? info.homeFlag : info.awayFlag) + ".png"} alt="" />
                                                    <span className="teamCup"><img src={trophy} alt="country" /></span>
                                                    </div>
                                                    </li> : ""} */}
                            </>
                          ) : (
                            <>
                              <li
                                key={"fixtrH" + idx}
                                className={
                                  "team-item " +
                                  (info.winner === "H" ? "teamBold" : "") +
                                  (info.side === "R" ? " team-item-right " : "")
                                }
                              >
                                {info.side === "R" ? (
                                  <span className="score">
                                    {info.teamHScore}
                                  </span>
                                ) : (
                                  <span>
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.homeFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                  </span>
                                )}
                                <span className="countryName">
                                  {info.homeTeamName}{" "}
                                  {info.result && info.winner === "H"
                                    ? " (" + info.result + ")"
                                    : ""}
                                </span>
                                {info.side === "R" ? (
                                  <span>
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.homeFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                  </span>
                                ) : (
                                  <span className="score">
                                    {info.teamHScore}
                                  </span>
                                )}

                                <span className="tree-arrow"></span>
                              </li>
                              {/* //<br/>Venue name */}
                              <span className="KickOf-time">
                                {(this.props.languageId === engLangId
                                  ? dateFormat.date
                                  : this.props.staticKeyWords[
                                      dateFormat.month.toLowerCase()
                                    ]) +
                                  " " +
                                  (this.props.languageId === engLangId
                                    ? this.props.staticKeyWords[
                                        dateFormat.month.toLowerCase()
                                      ]
                                    : this.props.staticKeyWords[
                                        dateFormat.date
                                      ])}
                              </span>
                              <li
                                key={"fixtrA" + idx}
                                className={
                                  "team-item " +
                                  (info.winner === "A" ? "teamBold" : "") +
                                  (info.side === "R" ? " team-item-right " : "")
                                }
                              >
                                {info.side === "R" ? (
                                  <span className="score">
                                    {info.teamAScore}
                                  </span>
                                ) : (
                                  <span>
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.awayFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                  </span>
                                )}
                                <span className="countryName">
                                  {info.awayTeamName}
                                  {info.result && info.winner === "A"
                                    ? " (" + info.result + ")"
                                    : ""}
                                </span>
                                {info.side === "R" ? (
                                  <span>
                                    <img
                                      className="countryLogo-small"
                                      src={
                                        "https://images.footylogic.com/countries/" +
                                        info.awayFlag +
                                        ".png"
                                      }
                                      alt=""
                                      onError={(e) =>
                                        (e.target.style.display = "none")
                                      }
                                    />
                                  </span>
                                ) : (
                                  <span className="score">
                                    {info.teamAScore}
                                  </span>
                                )}
                                <span className="tree-arrow"></span>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    );
                  } else {
                    return (
                      <ul
                        key={"tree" + roundIdx}
                        className={
                          "bracket " +
                          (round.slice(round.length - 1) === "R"
                            ? "right "
                            : "") +
                          "bracket-" +
                          this.bracketIndex[round]
                        }
                      ></ul>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Loading
          isLoader={this.props.loader}
          isNoData={
            !this.props.loader &&
            (Object.keys(
              this.props?.standingsTableData?.treeData &&
                this.props?.standingsTableData?.treeHeaders &&
                this.props?.standingsTableData?.treeKeys,
            ).length === 0 ||
              this.props.standingsTableData.length === 0)
          }
          temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
        />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    languageId: state.app.languageId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(KOTree);
