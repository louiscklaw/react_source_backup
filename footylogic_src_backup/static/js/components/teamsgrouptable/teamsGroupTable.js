import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../loading/Loading";
// import {getFiltersData, setFilter, getStandingsOpt,getStandings} from '../tournamentstandings/TournamentStandingsSlice';
// import { getTableData } from '../seasonalstats/SeasonalStatsSlice';
// import LeicesterLogo from '../../assets/images/players/James Justin.png';
// import countryLogo from '../../assets/images/teams/arsenal.png';
//import noImage from '../../assets/images/teams/UnitedKingdom.png';
import { imageUrls } from "../../sharedfiles/EndpointConfig";
import { setDisplayMode, checkEdisplay } from ".././../AppSlice";
import { engLangId } from "../../sharedfiles/constants";
import { setSelectButton } from "../tournamentleague/TournamentLeagueSlice";
import { formatDate } from "../../sharedfiles/helper";
import noPlayer from "../../assets/images/players/Noplayer.png";
class TeamsGroupTable extends Component {
  rowNavigation(link) {
    this.props.history.push(link);
    this.props.dispatch(setSelectButton("fixturesresults"));
  }
  componentDidMount() {
    if (checkEdisplay() && this.props.screenfrom == "standings") {
      this.props.dispatch(setDisplayMode(true));
    }
    if (Object.keys(this.props.standingsTableData)?.length > 0) {
      this.setState({
        groupLetters: Object.keys(this.props.standingsTableData),
      });
    } else {
      this.setState({ groupLetters: [] });
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  render() {
    let dropdownData = this.props?.standingsData?.displayname;
    let headerName =
      this.props.groupName !== "all" &&
      dropdownData.map((item) =>
        item.displayKey === this.props.groupName ? item.displayValue : "",
      );
    return (
      <React.Fragment>
        {this.props.screenfrom == "standings" &&
        Object.keys(this.props.standingsTableData).length > 0 ? (
          <div className={"standingTable-container"}>
            {Object.keys(this.props.standingsTableData).length > 0 &&
              Object.keys(this.props.standingsTableData).map((key, index) => {
                return (
                  <div
                    className={
                      "standingTable-group" +
                      (this.props.groupName === "all" ? " " : " fullWidth")
                    }
                    key={"mainGroup_" + index}
                  >
                    <table className="tableDefault standingsTable">
                      <thead>
                        <tr>
                          <th className="w-170 team">
                            <div className="groupHeading">
                              {this.props.groupName === "all"
                                ? dropdownData?.map((item) =>
                                    item.displayKey === key
                                      ? item.displayValue
                                      : "",
                                  )
                                : headerName}
                            </div>
                          </th>
                          <th className="groupStagingth">
                            {this.props.staticKeyWords.p}
                          </th>
                          <th>{this.props.staticKeyWords.w}</th>
                          <th>{this.props.staticKeyWords.d}</th>
                          <th>{this.props.staticKeyWords.l}</th>
                          <th>{this.props.staticKeyWords.gf}</th>
                          <th>{this.props.staticKeyWords.ga}</th>
                          <th>{this.props.staticKeyWords.pts}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.standingsTableData[key].length > 0 &&
                          this.props.standingsTableData[key].map(
                            (item, itemIndex) => {
                              return (
                                <tr key={"group_" + itemIndex}>
                                  {item.teamId && item.teamId !== null ? (
                                    <td
                                      onClick={
                                        item.teamId != null
                                          ? this.rowNavigation.bind(
                                              this,
                                              this.props.rowNavigation.replace(
                                                "[:id]",
                                                item.teamId,
                                              ),
                                            )
                                          : ""
                                      }
                                      className={"team"}
                                      data-href="true"
                                    >
                                      {item.flagName != null ? (
                                        <span className="groupStagelogo">
                                          <img
                                            src={
                                              `https://images.footylogic.com/countries/` +
                                              item.flagName +
                                              `.png`
                                            }
                                            width="30px"
                                            alt="team"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                      <span>{item.teamName}</span>
                                    </td>
                                  ) : (
                                    <td className={"team"}>
                                      {item.flagName != null ? (
                                        <span className="groupStagelogo">
                                          <img
                                            src={
                                              `https://images.footylogic.com/countries/` +
                                              item.flagName +
                                              `.png`
                                            }
                                            width="30px"
                                            alt="team"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                      <span>{item.teamName}</span>
                                    </td>
                                  )}
                                  <td>
                                    <div>{item.teamPlayed}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamWin}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamDraw}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamLoss}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamGoalsFor}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamGoalsAway}</div>
                                  </td>
                                  <td>
                                    <div>{item.teamPoints}</div>
                                  </td>
                                </tr>
                              );
                            },
                          )}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            {this.props.scheduleTable.length > 0 && (
              <>
                <div className="sectionHeading groupTable-heading">
                  <div className="sectionTitle">
                    <span>{this.props.staticKeyWords.schedule}</span>
                  </div>
                </div>
                <table className="tableDefault">
                  <thead>
                    <tr>
                      <th className="playOff-date">
                        {this.props.staticKeyWords.mcDate}
                      </th>
                      <th className="playOff-Teams">
                        {this.props.staticKeyWords.home}
                      </th>
                      <th className="playOff-data">
                        {this.props.staticKeyWords.scoreHt}
                      </th>
                      <th className="playOff-Teams">
                        {this.props.staticKeyWords.away}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.scheduleTable &&
                      this.props.scheduleTable?.length &&
                      this.props.scheduleTable.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="playOff-date">
                              <div>
                                {item.Kickoff
                                  ? formatDate(item.Kickoff, "banner").date
                                  : "-"}
                              </div>
                            </td>
                            {item.homeTeamId && item.homeTeamId !== null ? (
                              <td
                                onClick={
                                  item.homeTeamId &&
                                  this.rowNavigation.bind(
                                    this,
                                    this.props.rowNavigation.replace(
                                      "[:id]",
                                      item.homeTeamId,
                                    ),
                                  )
                                }
                                className="playOff-Teams"
                                data-href="true"
                              >
                                <div
                                  className={
                                    item.winner == "H" ? "teamBold" : ""
                                  }
                                >
                                  {item.homeTeamName}
                                </div>
                              </td>
                            ) : (
                              <td className="playOff-Teams">
                                <div
                                  className={
                                    item.winner == "H" ? "teamBold" : ""
                                  }
                                >
                                  {item.homeTeamName}
                                </div>
                              </td>
                            )}
                            <td className="playOff-data">
                              <div>
                                {item.fullTimeScore} ({item.halfTimeScore})
                              </div>
                            </td>
                            {item.awayTeamId && item.awayTeamId !== null ? (
                              <td
                                onClick={
                                  item.awayTeamId &&
                                  this.rowNavigation.bind(
                                    this,
                                    this.props.rowNavigation.replace(
                                      "[:id]",
                                      item.awayTeamId,
                                    ),
                                  )
                                }
                                className="playOff-Teams"
                                data-href="true"
                              >
                                <div
                                  className={
                                    item.winner == "A" ? "teamBold" : ""
                                  }
                                >
                                  {item.awayTeamName}
                                </div>
                              </td>
                            ) : (
                              <td className="playOff-Teams">
                                <div
                                  className={
                                    item.winner == "A" ? "teamBold" : ""
                                  }
                                >
                                  {item.awayTeamName}
                                </div>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </>
            )}
          </div>
        ) : this.props.screenfrom == "standings" &&
          !Object.keys(this.props.standingsTableData).length ? (
          <Loading
            isLoader={this.props.loader}
            temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
            isNoData={
              !this.props.loader &&
              !Object.keys(this.props.standingsTableData).length > 0
            }
          />
        ) : (
          ""
        )}
        {this.props.screenfrom == "topscorer" &&
        this.props.standingsTableData.length > 1 ? (
          <div className="topScorer-container">
            <div className="headerDetails">
              <div className="haed-playerRank">
                {this.props.staticKeyWords.rank}
              </div>
              <div className="haed-playerInfo">
                {this.props.staticKeyWords.player}
              </div>
              <div className="haed-goalsNumber">
                {this.props.staticKeyWords.goals}
              </div>
              <div className="haed-playerHkjcno">
                {this.props.staticKeyWords.hKJCNo}
              </div>
            </div>
            {this.props.standingsTableData &&
              this.props.standingsTableData.map((player, playerIndex) => {
                if (playerIndex <= 9) {
                  return (
                    <div
                      className="topScore-playerdetails"
                      key={"cup_" + playerIndex}
                    >
                      <div className="playerRank">{player.playerRank}</div>
                      <div className="playerIcon">
                        <div className="playerIcon-position">
                          <img
                            src={
                              imageUrls.player +
                              "" +
                              player.playerImageUrl +
                              ".png"
                            }
                            alt="country"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = noPlayer;
                            }}
                          />
                        </div>
                      </div>
                      <div className="playerCountry">
                        <img
                          className="countryLogo-img"
                          src={
                            imageUrls.country +
                            "" +
                            player.countryImgUrl +
                            ".png"
                          }
                          alt="country"
                        />
                      </div>
                      {player.playerId && player.playerId !== null ? (
                        <div
                          className="playerInfo"
                          onClick={this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              player.playerClubId,
                            ),
                          )}
                          data-href="true"
                        >
                          <span>{player.playerName}</span>
                          <span className="text-blue">{player.playerClub}</span>
                        </div>
                      ) : (
                        <div className="playerInfo">
                          <span>{player.playerName}</span>
                          <span className="text-blue">{player.playerClub}</span>
                        </div>
                      )}
                      <div className="playerGoals">
                        <div className="goalsNumber">{player.playerGoals}</div>
                        <div className="crossline"></div>
                      </div>
                      <div className="playerHkjcno">{player.playerHkjcNo}</div>
                    </div>
                  );
                }
              })}
          </div>
        ) : this.props.screenfrom == "topscorer" &&
          this.props.standingsTableData.length <= 1 ? (
          <Loading
            isLoader={this.props.loader}
            isNoData={
              !this.props.loader && !this.props.standingsTableData.length <= 1
            }
            temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    loader: state.app.loader,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    groupName: state.tournamentstandings.groupName,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamsGroupTable);
